import { AddEditClass, ClassDetailsWrapper } from "uicore/admin"
import { Outlet } from "react-router-dom"

const Overview = () => {
  const dummyYears = [{
    _id: "shfbjksdhfjhsd",
    year: 2023
  }, {
    _id: "jhadgfbcksdjfm",
    year: 2022
  }, {
    _id: "mdgsbfdbffbds",
    year: 2021
  }]
  return (
    <>
      <ClassDetailsWrapper>
      

        <AddEditClass
          classYears={dummyYears}
          handleNewClass={() => { }} />
          <Outlet />
      </ClassDetailsWrapper>
    </>
  )
}

export default Overview