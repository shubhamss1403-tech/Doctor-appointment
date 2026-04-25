import React from 'react'
import { assets as frontassets } from '../assets/assets_frontend/assets' // Add this import

function About() {
  return (
    <div className='px-4 sm:px-8 lg:px-16 py-10'>
      {/* Header */}
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold text-gray-800'>ABOUT US</h1>
      </div>

      {/* Main Content - Image Left, Text Right */}
      <div className='flex flex-col lg:flex-row gap-8 items-center mb-16'>
        {/* Left Side - Image */}
        <div className='lg:w-1/2'>
          <img 
            src={frontassets.about_image} 
            alt='About Us' 
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        {/* Right Side - Text Content */}
        <div className='lg:w-1/2 space-y-6'>
          <p className='text-gray-600 leading-7'>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          
          <p className='text-gray-600 leading-7'>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          
          <div>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Our Vision</h3>
            <p className='text-gray-600 leading-7'>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='mt-16'>
        <div className='text-center mb-8'>
          <p className='text-2xl font-bold text-gray-800'>WHY CHOOSE US</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
            <b className='text-lg block mb-3'>EFFICIENCY:</b>
            <p className='text-sm leading-6'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          
          <div className='bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
            <b className='text-lg block mb-3'>CONVENIENCE:</b>
            <p className='text-sm leading-6'>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          
          <div className='bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
            <b className='text-lg block mb-3'>PERSONALIZATION:</b>
            <p className='text-sm leading-6'>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About