import React from 'react'
import Navbar from './components/Standard/Navbar/Navbar'
import MyState from './components/context/myState'
import Footer from './components/Standard/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
      <MyState>
      <Navbar />
      <Outlet />
      <Footer />
      </MyState>
    </>
  )
}

export default Root