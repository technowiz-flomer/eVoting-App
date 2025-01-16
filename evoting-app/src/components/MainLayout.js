import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='flex text-slate-800'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}
