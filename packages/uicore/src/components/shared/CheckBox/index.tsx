
type CheckBoxProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const CheckBox = ({ ...rest }: CheckBoxProps) => {
  return (
    <input type="checkbox" name="" id="" className="" {...rest} />
  )
}
CheckBox.displayName = "CheckBox"