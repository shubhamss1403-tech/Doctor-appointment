import React from 'react'
import { assets as frontassets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        {/*  left-side */}
        <div>
            <img  className="mb-5 w-40"src={frontassets.logo} alt=''></img>
            <p className='w-full md:w-2/3  text-gray-600  leading-6'>
            <p>A modern healthcare platform providing trusted medical information, seamless appointment booking, and access to qualified doctors across specialties. It ensures patient-focused care, secure consultations, and easy navigation for a better healthcare experience.</p>
    
            </p>
            </div>
        {/*  center */}
        <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gry-600'>
                <li>About us</li>
                <li>Home</li>
                <li>Privacy Policy</li>
                <li>Delivery</li>
            </ul>
        </div>
        
    
       
        {/*  right-side */}
        

    <div>
        <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gry-600'>
            <li >+0-000-000-000</li>
            <li>shubhamss1403@gmail.com</li>
        </ul>
    </div>
    </div>
    {/*  bottom */}
   <div>
    <hr></hr>
    <p className='py-5 text-sm text-center'>© Shubham. All rights reserved | shubhamss1403@gmail.com</p>
   </div>
    </div>
  )
}

export default Footer