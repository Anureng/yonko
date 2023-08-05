import Asset from '@/components/Asset'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-blue-700'>
      <Navbar />
    </div>
    <Asset/>
    </>
  )
}

export default page