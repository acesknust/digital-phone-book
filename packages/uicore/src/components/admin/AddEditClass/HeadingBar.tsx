import React from "react"


export type HeadingBarProps = {
  heading?: string
} & React.HTMLAttributes<HTMLDivElement>

export const HeadingBar = ({ ...rest }: HeadingBarProps) => {
  return (
    <div className="w-full border-b-2 p-2" {...rest}>
      <h1 className="font-semibold text-lg">Add/Edit Year Class</h1>
    </div>
  )
}
HeadingBar.displayName = "HeadingBar"