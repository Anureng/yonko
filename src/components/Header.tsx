"use client"
import { Web3Button, Web3Modal, Web3NetworkSwitch } from '@web3modal/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const styling = {
    backgroundImage: `url('/Header.jpg')`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover"
}
  return (
    <div style={styling}  className='h-screen'  >
      {/* Navbar start  */}
      <div  className='flex  items-center justify-around
       text-white p-4 font-mono text-xl'>
        <div className='bg-white text-black px-1 py-2 rounded-xl font-bold text-xl font-serif'>
         <Link href="/">
            Yonko
         </Link>
        </div>
        <div className='flex space-x-3 '>
        <div className='flex space-x-6'>
            <p>
              <Link href="/Token">
              Token
              </Link>
              </p>
            <p>
              <Link href="/createAsset">
              Create Asset
              </Link>
              </p>
            <p>
              <Link href="/Profile">
              Profile
              </Link>
              </p>
              <p>
              <Link href="/Asset">
              Asset
              </Link>
              </p>
        </div>
        <div>
            <Web3Button/>
            
        </div>
        </div>
      </div>
      {/* Navbar end  */}

      {/* header start  */}

      <div className=' h-4/5 items-center flex'>
      <div className='w-4/5 p-10'>
        <div className='text-white space-y-4'>
          <p className='text-8xl'>Welcome to Yonko!!!</p>
          <p className='text-7xl font-light'>Trading Asset</p>
          <p>In this Dapp User can Create the erc720 token . The Name of the token is <strong>An</strong>
          <br /> User can Create the Asset and other user can buy or trade the asset.
          </p>
          <button className='bg-white px-1 py-2  rounded-xl text text-black'>
            <Link href="/Token">
            Get Started
            </Link>
            </button>
        </div>
      </div>
      </div>

      {/* header end  */}
    </div>
  )
}

export default Navbar