import Asset from '@/components/Asset'
import FilterMainPage from '@/components/FilterMainPage'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-blue-700'>
      <Navbar />
    </div>
    {/* <Asset/> */}
    <FilterMainPage/>
    <Footer/>
    </>
  )
}

export default page