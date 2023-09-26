import { Button } from "../../shared/Button"
import { CheckBox } from "../../shared/CheckBox"


type ClassDetailsTableProps = {
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export const ClassDetailsTable = ({ ...rest }: ClassDetailsTableProps) => {
  return (
    <>
      <div className="w-[70%] " {...rest}>
        <div className="w-full flex justify-between items-center " >
          <span className="font-bold ">Into the World Of Computer Engineering </span>
          <Button>
            Reports
          </Button>
        </div>
        <table className="table-auto items-center w-full border rounded-xl" {...rest}>
          <thead className="w-full" >
            <tr className="w-full flex flex-1" >
              <th> <CheckBox /> </th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th><CheckBox /></th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CheckBox /></td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

ClassDetailsTable.displayName = "ClassDetailsTable"