import React, { useEffect, useState } from 'react'
import getStaffs from '../api/getStaffs';

export default function Staffs() {
  const [staffs, setStaffs] = useState([]);
  const [selectedRole, setSelectedRole] = useState()
  const [filteredStaffs, setFilteredStaffs] = useState([])
  const roles = ['COMELECT', 'Poll Worker', 'Election Observer', 'Media', 'Law Enforcement']

  const handleFetchStaffs = async () => {
    try {
      const staffList = await getStaffs();
      setStaffs(staffList);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  }

  const filterStaffsByRole = () => {
    return staffs.filter(staff => staff.role === selectedRole)
  }

  useEffect(()=>{
    handleFetchStaffs();
  }, [])

  useEffect(()=>{
    setFilteredStaffs(filterStaffsByRole());
  }, [selectedRole])



  return (
    <div className='w-full p-2'>
      <div className='mb-5 text-xl font-semibold'>Staffs</div>
      <StaffTab roles={roles} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
      { selectedRole ? <Table staffs={filteredStaffs} role={selectedRole}/> : null}
    </div>
  )
}

function StaffTab(props){
  const {staffs, roles, selectedRole, setSelectedRole} = props
  return (
    <div className='w-4/5 flex space-x-2'>
      {
        roles.map((role, index) => {
          return <div key={index} className={`p-1 px-2 border rounded-lg transition-colors ${selectedRole === role ? 'select-none bg-blue-400 text-white' : 'cursor-pointer hover:bg-blue-400 hover:text-white'}`} onClick={()=>setSelectedRole(role)}>{role}</div>
        })
      }
    </div>
  )
}

function Table(props){
  const {staffs, role} = props
  
  console.log(staffs)
  
  return (
    <div className='w-5/6 mt-4'>
        <div className='bg-blue-400 px-2 text-md rounded-ss rounded-se text-white font-semibold'>{role}</div>
        <div className='border rounded-ee rounded-es'>
          <div className='p-2 flex border-b justify-between text-xs'>
            <div className='w-1/5'>Name</div>
            <div className='w-1/5'>Age</div>
            <div className='w-1/5'>Email</div>
            <div className='w-1/5'>Contact No.</div>
            <div className='w-1/5'>Address</div>
          </div>
          {
            staffs.length > 0 ? staffs?.map(staff => {
              return <TableRow staff={staff}/>
              } 
            ) : (
              <div className='p-1 text-center text-xs text-slate-500'>
                No person found for this table.
              </div>
            )
          }
        </div>
      </div>
  )
}

function TableRow(props){
  const {staff} = props
  return (
    <div className='px-2 flex border-b justify-between text-xs'>
      <div className='py-2 w-1/5'>{staff.name}</div>
      <div className='py-2 w-1/5'>{staff.age}</div>
      <div className='py-2 w-1/5'>{staff.email}</div>
      <div className='py-2 w-1/5'>{staff.contactNumber}</div>
      <div className='py-2 w-1/5'>{staff.address}</div>
    </div>
  )
}
