 import React from 'react'
 import { Routes, Route } from 'react-router-dom'
  import Home from './Pages/Home.jsx'
  import About from './Pages/About.jsx'
  import Context from './Pages/Context.jsx'
  import Doctors from './Pages/doctors.jsx'
 
  import Login from './Pages/Login.jsx'
  import MyProfile from './Pages/MyProfile.jsx'
  import MyAppointments from './Pages/MyAppointments.jsx'
import Appointment from './Pages/Appointment.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Context/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
           <Route path='/doctors/:specality' element={<Doctors/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
          <Route path='/myappointments' element={<MyAppointments/>}/>
          <Route path='/Appointment/:docId' element={<Appointment/>}/>
         </Routes>
      <Footer></Footer>

       </div>
   )
 }
 
 export default App 