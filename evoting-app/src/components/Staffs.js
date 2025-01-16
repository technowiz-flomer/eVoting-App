import React from 'react'

export default function Staffs() {

  const staffs = ['COMELECT', 'Poll Workers', 'Election Observers', 'Media', 'Law Enforcement']

  return (
    <div className='p-2 w-full'>
      <div className='mb-5 text-xl font-semibold'>Staffs</div>
      {
        staffs.map(staff => {
          return <Table staff={staff} persons={[]}/>
        })
      }
    </div>
  )
}

function Table(props){
  const {staff, persons} = props
  return (
    <div className='w-2/3 mt-4'>
        <div className='bg-blue-300 px-2 text-md rounded-ss rounded-se text-white font-semibold'>{staff}</div>
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
