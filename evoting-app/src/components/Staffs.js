import React, { useState } from 'react'

export default function Staffs() {
  const [selectedStaff, setSelectedStaff] = useState()

  const staffs = ['COMELECT', 'Poll Workers', 'Election Observers', 'Media', 'Law Enforcement']

  return (
    <div className='w-full p-2'>
      <div className='mb-5 text-xl font-semibold'>Staffs</div>
      <StaffTab staffs={staffs} selectedStaff={selectedStaff} setSelectedStaff={setSelectedStaff}/>
      { selectedStaff ? <Table staff={selectedStaff} persons={[]}/> : null}
    </div>
  )
}

function StaffTab(props){
  const {staffs, selectedStaff, setSelectedStaff} = props
  return (
    <div className='w-4/5 flex space-x-2'>
      {
        staffs.map((staff, index) => {
          return <div key={index} className={`p-1 px-2 border rounded-lg transition-colors ${selectedStaff == staff ? 'select-none bg-blue-400 text-white' : 'cursor-pointer hover:bg-blue-400 hover:text-white'}`} onClick={()=>setSelectedStaff(staff)}>{staff}</div>
        })
      }
    </div>
  )
}

function Table(props){
  const {staff, persons} = props
  return (
    <div className='w-2/3 mt-4'>
        <div className='bg-blue-400 px-2 text-md rounded-ss rounded-se text-white font-semibold'>{staff}</div>
        <div className='border rounded-ee rounded-es'>
          <div className='p-1 flex border-b justify-between text-xs'>
            <div>Name</div>
            <div>Age</div>
            <div>Email</div>
            <div>Contact No.</div>
            <div>Address</div>
          </div>
          {
            persons.length > 0 ? null
            : (
              <div className='p-1 text-center text-xs text-slate-500'>
                No person found for this table.
              </div>
            )
          }
        </div>
      </div>
  )
}
