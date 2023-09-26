import { Button } from "../../shared/Button"


export type AddNewClassButtonProps = {
  handleNewClass: (event: React.MouseEvent<HTMLButtonElement>) => void
} & React.HTMLAttributes<HTMLDivElement>

export const AddNewClassButton = ({ handleNewClass, ...rest }: AddNewClassButtonProps) => {
  return (
    <div className="w-11/12 pb-4 left-4 right-4" {...rest} >
      <Button isFullwidth onClick={handleNewClass} >
        Add New Class
      </Button>
    </div>
  )
}

AddNewClassButton.displayName = "AddNewClassButton"