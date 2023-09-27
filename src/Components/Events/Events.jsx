import React from 'react'
import Navbar from '../Home/Navbar'
import Eventlist from './Eventlist'
import Eventshedule from './Eventshedule'
import Footerblog from '../Blog/Footerblog'

export default function Events() {
  return (
    <>
    <Navbar/>
    <Eventlist/>
    <Eventshedule/>
    <Footerblog/>
    </>
  )
}
