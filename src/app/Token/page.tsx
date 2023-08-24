import Navbar from '@/components/Navbar'
import TokenSecond from '@/components/TokenSecond'
import UserToken from '@/components/UserToken'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const styling = {
    backgroundImage: `url('/blue.jpg')`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover"
}
  return (
    <div style={styling} className='h-screen'>
         <Navbar/>
         <TokenSecond/>
         <UserToken/>
    </div>
  )
}

export default page