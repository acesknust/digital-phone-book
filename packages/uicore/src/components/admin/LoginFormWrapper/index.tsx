
import React from "react"
import styles from "./LoginFormWrapper.module.css"


import { LoginForm } from "../LoginForm"

export interface LoginFormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean
  email: string
  password: string
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void

}
export const LoginFormWrapper = ({ email, password, setPassword, setEmail, isLoading, handleSubmit }: LoginFormWrapperProps) => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.logoHeading}>
          <span className={styles.logoWord}>
            Logo
          </span>
          <span className={styles.heading}>
            Admin login
          </span>
        </div>
        <LoginForm
          isLoading={isLoading}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />

      </div>
    </>
  )
}

LoginFormWrapper.displayName = "LoginFormWrapper"