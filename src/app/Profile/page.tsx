import BuyedAsset from '@/components/BuyedAsset'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import UserToken from '@/components/UserToken'
import React from 'react'


const page = () => {
  const styling = {
    backgroundImage: `url('/blue.jpg')`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover"
}
  return (
    <>
    <div style={styling} className='h-screen'>
      <Navbar/>
    <UserToken/>
    <Profile/>
    {/* <Accordian/> */}
    </div>
    <BuyedAsset/>
    <Footer/>
    {/* <Home/> */}
    </>
  )
}

export default page