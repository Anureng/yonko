import Image from 'next/image'
import React from 'react'

const TokenSecond = () => {
  return (
    <div className=' text-white p-10'>
      <p className='flex items-center justify-center text-xl '>Add AN Token to your profile</p>
      <div  className='flex  items-center justify-center space-y-10 space-x-10  h-full p-12'>
      <div>
        <Image src="/token2.jpg" className='rounded-xl' alt='nothing' width={500} height={500}/>
      </div>
      <div className='space-x-4'>
        <input type="number" className='outline-none border px-1 py-2 rounded-xl bg-transparent ' placeholder='Enter the amount'  />
        <button className='bg-[#39227D] px-2 py-1 rounded-xl text-white'>Mint</button>
      </div>
      </div>
    </div>
  )
}

export default TokenSecond