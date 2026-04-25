import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/Appcontext'

function MyAppointments() {
    const {doctors}= useContext(AppContext);

  return (
    <div className='p-8 max-w-3xl mx-auto'>
      <p className='text-2xl font-bold text-gray-800 mb-5'>My Appointments</p>

      <div className='flex flex-col gap-4'>
        {
           doctors && doctors.slice(0,3).map((item,index)=>(
            <div key={index} className='bg-white border border-gray-300 rounded-lg p-5 flex gap-5 shadow-sm'>
             <img src={item.image} alt="" className='w-24 h-24 rounded-lg object-cover' />
             
             <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-800 mb-1'>Dr. {item.name}</h3>
              <p className='text-sm text-gray-600 mb-2'>{item.speciality}</p>
              
              <div className='text-sm text-gray-700 leading-relaxed mb-4'>
                <p className='font-bold'>Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p className='text-blue-600 font-bold mt-2'>📅 Date & Time: 25 July, 2024 8:30 PM</p>
              </div>
              
              <div className='flex gap-2'>
                <button className='bg-blue-600 text-white px-3 py-2 rounded text-sm font-bold'>Pay Online</button>
                <button className='bg-red-600 text-white px-3 py-2 rounded text-sm font-bold'>Cancel Appointment</button>
              </div>
             </div>

            </div>

           ))
        }

      </div>
     
    </div>
  )
}

export default MyAppointments