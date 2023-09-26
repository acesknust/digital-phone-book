import React from "react"


type YearClassListProp = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const YearClassList = ({ children, ...rest }: YearClassListProp) => {
  return (
    <div className="w-full flex flex-col p-3 gap-2 " {...rest} >
      {children}
    </div>
  )
}

YearClassList.displayName = "YearClassList"