/* eslint-disable react/prop-types */
import myContext from "./myContext"

function MyState({children}) {
    const name = "Kamal Nayan Upadhyay"
  return (
    <myContext.Provider value={name}>
       {children}
    </myContext.Provider>
  )
}

export default MyState