import React from "react"

type ClassDetailsWrapperProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const ClassDetailsWrapper = ({ children, ...rest }: ClassDetailsWrapperProps) => {
  return (
    <div className="w-10/12 m-auto flex gap-8 justify-center" {...rest}>
      {
        children
      }
    </div>
  )
}

ClassDetailsWrapper.displayName = "ClassDetailsWrapper"