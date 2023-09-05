import React from 'react'
import styles from './LoginForm.module.css'
import { Input } from '../../shared/Input'
import { Button } from '../../shared/Button'


export interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {
  // children: React.ReactNode
  isLoading: boolean
  email: string
  password: string
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void

}
export const LoginForm = ({ isLoading, email, password, setEmail, setPassword, handleSubmit }: LoginFormProps) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.aForm} >
        <Input  autoComplete='true' placeholder='Email' type='email' isFullwidth={true} value={email} onChange={setEmail} />
        <Input autoComplete='true' placeholder='Password' type='password' minLength={5}
          maxLength={64} isFullwidth={true} value={password} onChange={
            setPassword
          } />
        <Button isFullwidth={true} disabled={isLoading} >
          {!isLoading
            ? "Login"
            : "Loging in..."
          }
        </Button>
      </form>
    </>
  )
}

LoginForm.displayName = "LoginForm"