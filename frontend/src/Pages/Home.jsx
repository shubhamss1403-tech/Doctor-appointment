import React from 'react'
import Header from '../Components/Header'
import Speciality from '../Components/speciality'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

function Home() {
  return (
    <div>
      <Header></Header>
      <Speciality></Speciality>
      <TopDoctors></TopDoctors>
      <Banner></Banner>
    </div>
  )
}

export default Home