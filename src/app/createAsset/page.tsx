import CreateAsset from '@/components/CreateAsset'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  const styling = {
    backgroundImage: `url('/asset.jpg')`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover"
}
  return (
    <div className='h-screen' style={styling}>
      <Navbar/>
      <CreateAsset/>
    </div>
  )
}

export default page