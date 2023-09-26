import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../../contextapi/AuthProvider";
import { AuthActionType } from "../../reducers/authReducer";
import { validateData } from "../../validators/_helper";
import { LoginFormSchemaType, loginFormSchema } from "../../validators/loginFormValidator";

export const useLogin = () => {
  const navigate = useNavigate();

  const { authDispatch, authState } = useAuthProvider();
  useEffect(() => {
		if (authState.credentials?.token) {
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  
  const submitData = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      authDispatch({
        type: AuthActionType.isLoading,
        payload: true,
      });

      const validationResults = await validateData<LoginFormSchemaType>(loginFormSchema)({
        email: authState.email,
        password: authState.password,
      });

      if (validationResults === true) {
        console.log("validationResults is true");
      } else {
        // TODO: add error to error state and display it in the UI
        console.log("validationResults is false");
        return;
      }

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/super-admins/token`, {
        email: authState.email,
        password: authState.password,
      });

      if (Number(response.status) > 199 && Number(response.status) < 300) {
        authDispatch({
          type: AuthActionType.isLoading,
          payload: false,
        });
        authDispatch({
          type: AuthActionType.credentials,
          payload: response.data.data,
        });
        localStorage.setItem("credentials", JSON.stringify(response.data.data));
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      authDispatch({
        type: AuthActionType.isLoginError,
        payload: true,
      });
      authDispatch({
        type: AuthActionType.isLoading,
        payload: false,
      });
      const timer = setTimeout(() => {
        authDispatch({
          type: AuthActionType.isLoginError,
          payload: false,
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  };
  return { submitData, authDispatch, authState };
};
