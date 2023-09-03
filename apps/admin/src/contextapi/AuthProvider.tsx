import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { authReducer, authInitialData, AuthDataType, AuthActions, AuthActionType } from "../lib/reducers/authReducer";
import { useQuery } from "react-query";

// TODO: Update profile

interface AuthProviderProps {
  children?: ReactNode;
}

type AuthContextType = {

  authState: AuthDataType
  authDispatch: React.Dispatch<AuthActions>
};
const AuthContext = createContext<AuthContextType | null | string>("");

export const useAuthProvider = () => {
  return useContext(AuthContext) as AuthContextType;
};

const AuthProvider = ({ children }: AuthProviderProps) => {

  const [state, dispatch] = useReducer(authReducer, authInitialData);
  const config = {
    headers: {
      Authorization: `Bearer ${state.credentials?.token}`,
      "Content-Type": "application/json",
    },
  }
  const { data } = useQuery('getCurrentUser', state.credentials?.token ? () =>
    fetch(`${import.meta.env.VITE_API_URL}/admin`, config).then(res =>
      res.json()
    ) : () => null
  )

  useEffect(() => {
    if (data?.data) {
      dispatch({ type: AuthActionType.credentials, payload: { ...data.data, token: state.credentials?.token } })
    }
  }, [data?.data])


  return (
    <>
      <AuthContext.Provider value={{
        authState: state,
        authDispatch: dispatch,
      }}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
