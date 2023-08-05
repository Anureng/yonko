import React from 'react'
import { BsInstagram ,BsLinkedin ,BsGithub,BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='space-y-10 p-4 bg-blue-700'>

    <div className='flex items-center justify-evenly p-4 bg-blue-700 text-white'>
        <div className='space-y-2'>
          <p className='text-lg '>Yonko</p>
          <p className='flex space-x-2'>
            <BsInstagram/>
            <BsLinkedin/>
            <BsGithub/>
            <BsTwitter/>
          </p>
        </div>

        <div className='flex space-x-10'>
          <div className='space-x-1'>
          <p>Token</p>
          <p>Asset</p>
          <p>Create Asset</p>
          </div>
          <div className='space-x-1' >
            <p>Profile</p>
            <p>Connect Button</p>
          </div>
        </div>

        <div className='flex space-x-2'>
          <input type="email" className='border-b bg-transparent placeholder:text-white border-white outline-none ' placeholder='Enter Email...'/>
          <p className='bg-white text-blue-900 font-bold px-1 py-2 rounded-xl'>Send Email</p>
        </div>
    </div>
      <p className='flex bg-blue-700 text-white items-center justify-center'>This website is under copyright of Anurag Sidhu</p>
    </div>
  )
}

export default Footer