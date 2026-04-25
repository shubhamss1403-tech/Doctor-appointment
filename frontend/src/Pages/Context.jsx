import React from 'react'
import { assets as frontassets } from '../assets/assets_frontend/assets'

function Context() {
  return (
    <div className='px-4 sm:px-8 lg:px-16 py-10'>
      {/* Header */}
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold text-gray-800'>CONTACT US</h1>
      </div>

      {/* Main Content - Image Left, Contact Info Right */}
      <div className='flex flex-col lg:flex-row gap-8 items-center mb-16'>
        {/* Left Side - Contact Image */}
        <div className='lg:w-1/2'>
          <img 
            src={frontassets.contact_image} 
            alt="Contact Us" 
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        {/* Right Side - Contact Information */}
        <div className='lg:w-1/2 space-y-8'>
          {/* Office Section */}
          <div>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>OUR OFFICE</h2>
            <div className='space-y-3'>
              <p className='text-gray-600 leading-7'>
                00000 Willms Station<br/>
                Suite 000, Washington, USA
              </p>
              <p className='text-gray-600 leading-7'>
                <strong>Tel:</strong> (000) 000-0000<br/>
                <strong>Email:</strong> greatstackdev@gmail.com
              </p>
            </div>
          </div>

          {/* Careers Section */}
          <div>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>CAREERS AT PRESCRIPTO</h2>
            <p className='text-gray-600 leading-7 mb-4'>
              Learn more about our teams and job openings.
            </p>
            <button className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Context