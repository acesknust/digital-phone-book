import { LoginFormWrapper } from "uicore/admin"
import { useLogin } from '../../lib/hooks/authHooks/useLogin'
import { AuthActionType } from '../../lib/reducers/authReducer'


const Login = () => {
  const { submitData, authDispatch, authState } = useLogin()

  return (
    <div>
      <LoginFormWrapper
        isLoading={authState.isLoading}
        email={authState.email}
        password={authState.password}
        setEmail={(e) => {
          authDispatch({ type: AuthActionType.email, payload: e.target.value })
        }}
        setPassword={(e) => {
          authDispatch({ type: AuthActionType.password, payload: e.target.value })
        }}
        handleSubmit={submitData}
      />
    </div>

  )
}

export default Login