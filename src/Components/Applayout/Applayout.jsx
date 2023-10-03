import React from 'react'
import Navbar from '../Home/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Home/Footer'

export default function Applayout() {
  return (
    <div>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
