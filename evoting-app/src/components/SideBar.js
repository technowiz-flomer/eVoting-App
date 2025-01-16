import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='w-2/12 h-lvh border'>
        <div className='p-2'>eVoting App</div>
        <div className='flex flex-col p-2 border-t space-y-2'>
            <SidebarLink path="/" label="Home"/>
            <SidebarLink path="/staffs" label="Staffs"/>
        </div>
    </div>
  )
}

function SidebarLink(props){
    const {path, label} = props
    return (
        <Link to={path} className='p-2 border border-slate-50 rounded-lg hover:border-slate-400'>{label}</Link>
    )
}