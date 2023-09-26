import { Link } from "react-router-dom"

type YearClassListItemProps = {
  yearDetails: { year: number, _id: string }
} & React.HTMLAttributes<HTMLAnchorElement>

export const YearClassListItem = ({ yearDetails, ...rest }: YearClassListItemProps) => {
  return (
    <Link to={yearDetails?._id} className="w-full flex justify-center items-center  h-12 bg-gray-300 border rounded-lg" {...rest} >
      {yearDetails?.year}
    </Link>
  )
}
