import { YearClassListItem } from "./YearClassListItem"
import { AddNewClassButton } from "./AddNewClassButton"
import { HeadingBar } from "./HeadingBar"
import { YearClassList } from "./YearClassList"
import React from "react"


type AddEditClassProps = {
  classYears: {
    year: number
    _id: string
  }[]
  handleNewClass: (event: React.MouseEvent<HTMLButtonElement>) => void
} & React.HTMLAttributes<HTMLDivElement>

export const AddEditClass = ({ classYears, handleNewClass, ...rest }: AddEditClassProps) => {
  return (
    <div className="flex flex-col  w-[25%]">
      <span className="font-bold" >
        Logo
      </span>
      <div className=" flex flex-col items-center w-full border rounded-xl" {...rest}>
        <HeadingBar />
        <YearClassList>
          {
            classYears.map((item, index) => (
              <React.Fragment key={index}>
                <YearClassListItem yearDetails={item} />
              </React.Fragment>
            ))
          }
        </YearClassList>
        <AddNewClassButton handleNewClass={handleNewClass} />
      </div>
    </div>
    
  )
}

AddEditClass.displayName = "AddEditClass"
AddEditClass.HeadingBar = HeadingBar
AddEditClass.YearClassList = YearClassList
AddEditClass.AddNewClassButton = AddNewClassButton
