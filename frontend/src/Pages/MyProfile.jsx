import React from 'react'
import { useState } from 'react'
import { assets as frontassets } from '../assets/assets_frontend/assets'

function MyProfile() {

  const [userdata, setUserdata] = useState({
    name: "suresh kumar",
    Image: frontassets.profile_pic,
    email: "suresh@example.com",
    phone: "123-456-7890",
    address: {
      line1: "123 Main St",
      line2: "Apt 4B",
    },
    gender: "male",
    dob: "1990-01-01",

  })

  const [editMode, setEditMode] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2  text-sm'>
      <img className='w-36 rounded ' src={userdata.Image} alt="" />
      {
        editMode ? <input  className="bg-gray-50  text-3xl font-medium max-w-60 mt-4" type='text ' value={userdata.name} onChange={(e) => setUserdata(prev => ({ ...prev, name: e.target.value }))} /> : <p className='font-medium text-3xl text-neutral-800 mt-4 '>{userdata.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'></hr>
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'> email id:</p>
          <p className='text-blue-500'> {userdata.email}</p>
          <p> phone:</p>
          {
            editMode ? <input className="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type='text' value={userdata.phone} onChange={(e) => setUserdata(prev => ({ ...prev, phone: e.target.value }))} /> : <p>{userdata.phone}</p>

          }
          <p> address: </p>
          {
            editMode?
           <div className="flex flex-col gap-2">
            <input className="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setUserdata(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} type='text' value={userdata.address.line1} placeholder="Address Line 1"></input>
            <input className="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setUserdata(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} type='text' value={userdata.address.line2} placeholder="Address Line 2"></input>
           </div>:
           <p>{userdata.address.line1}
           <br></br>
            {userdata.address.line2}
           </p>

          
}

        
        </div>


      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            editMode ? 
            <select className="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setUserdata(prev=>({...prev,gender:e.target.value}))} value={userdata.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
             : <p>{userdata.gender}</p>
          }
          <p className='font-medium'>Date of Birth:</p>
          {
            editMode? 
            <input className="bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type='date' onChange={(e)=>setUserdata(prev=>({...prev,dob:e.target.value}))} value={userdata.dob}></input>
              :<p>{userdata.dob}</p>
          }
        </div>
      </div>
    <div className="mt-6">
      {
        editMode ?
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200" onClick={()=>setEditMode(false)}>Save Information</button>:
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200" onClick={()=>setEditMode(true)}>Edit Profile</button>
      }
    </div>

    </div>
  )
}

export default MyProfile