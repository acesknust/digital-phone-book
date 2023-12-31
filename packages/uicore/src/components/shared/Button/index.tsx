import clsx from "clsx"
import React from "react"
// import styles from "./Button.module.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFullwidth?: boolean
  size?: "small" | "large"
  variants?: "outlined" | "primary"
  responsive?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    isFullwidth,
    // responsive,
    // size = "large",
    // variants = "primary",
    ...rest
  } = props

  const classes = clsx([
    // styles.aroot,
    // {
    //   [styles.isFullwidth]: isFullwidth,
    //   [styles.responsive]: responsive,
    // },
    // styles[size],
    // styles[variants],
    className,
    ` ${isFullwidth ? "w-full" : ""}
    h-12 p-4 text-center
     flex justify-center items-center border bg-black text-white rounded-xl`
  ])
  console.log(classes)

  return (
    <>
      <button
        className={classes}
        {...rest} ref={ref} >
        {children}
      </button>
    </>
  )
})

Button.displayName = "Button"