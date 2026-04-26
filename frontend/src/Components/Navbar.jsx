import React from 'react'

import { assets as adminassets } from '../assets/assets_admin/assets'
import { assets as frontassets } from '../assets/assets_frontend/assets' // Add this import
import { NavLink ,useNavigate} from 'react-router-dom'
import { useState } from 'react'



function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token,setToken]=useState(true);

  return (
    <div className='flex justify-between text-sm py-4 mb-5 border-b border-grey-400 items-center'>
  
      <img onClick={()=>navigate("/")} className='cursor-pointer w-44' src={adminassets.admin_logo} alt='' />
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex items-start gap-4 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none bg-primary w-3/5 m-auto h-0.5 hidden'></hr>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>About</li>
          <hr className='border-none outline-none bg-primary w-3/5 m-auto h-0.5  hidden'></hr>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>All Doctors</li>
          <hr className='border-none outline-none bg-primary w-3/5 m-auto h-0.5  hidden'></hr>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none bg-primary w-3/5 m-auto h-0.5  hidden'></hr>
        </NavLink>
      </ul>
      
      <div className='flex items-center gap-4' >
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={frontassets.profile_pic} alt=''></img>
              <img  className='w-2.5' src={frontassets.dropdown_icon} alt=''></img>
              <div className='absolute right-0 top-0 pt-14 text-base font-medium text-grey-600 hidden group-hover:block' >
                <div className='min-w-48 bg-stone-200 rounded gap-4 p-4 flex flex-col' >
                  <p  onClick={()=>navigate('/myprofile')}>My profile</p>
                  <p  onClick={()=>navigate('/myappointments')}> my appointments</p>
                  <p onClick={()=>setToken(false)}>Logout</p>
                </div>
              </div>
            </div>
            : <button  onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 font-light hidden md:block rounded-full'> create account</button>
        }
        
        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(!showMenu)} className='md:hidden w-6 cursor-pointer' src={frontassets.menu_icon} alt='' />
      </div>
      
      {/* Mobile Menu */}
      {showMenu && (
        <div className='absolute top-20 right-0 bg-white shadow-lg rounded-lg p-4 md:hidden z-50'>
          <NavLink to='/' onClick={() => setShowMenu(false)}>
            <p className='py-2 px-4 hover:bg-gray-100'>Home</p>
          </NavLink>
          <NavLink to='/about' onClick={() => setShowMenu(false)}>
            <p className='py-2 px-4 hover:bg-gray-100'>About</p>
          </NavLink>
          <NavLink to='/doctors' onClick={() => setShowMenu(false)}>
            <p className='py-2 px-4 hover:bg-gray-100'>All Doctors</p>
          </NavLink>
          <NavLink to='/contact' onClick={() => setShowMenu(false)}>
            <p className='py-2 px-4 hover:bg-gray-100'>Contact</p>
          </NavLink>
          {token && (
            <>
              <p onClick={() => { navigate('/myprofile'); setShowMenu(false); }} className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>My Profile</p>
              <p onClick={() => { navigate('/myappointments'); setShowMenu(false); }} className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>My Appointments</p>
              <p onClick={() => { setToken(false); setShowMenu(false); }} className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Logout</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar