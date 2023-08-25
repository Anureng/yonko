"use client"
import { Web3Button, Web3Modal, Web3NetworkSwitch } from '@web3modal/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSignMessage } from 'wagmi'
import { GiHamburgerMenu } from 'react-icons/gi' ;
import { FaHamburger } from 'react-icons/fa' ;
const Navbar = () => {

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'gm wagmi frens',
    onSuccess(data) {
      console.log('Success', data)
      alert("Success!")
    },
  })
  console.log(data);
  console.log(signMessage);
  const styling = {
    backgroundImage: `url('/Header.jpg')`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover"
}

let Links =[
  {name:"TOKEN",link:"/Token"},
  {name:"CREATE ASSET",link:"/createAsset"},
  {name:"PROFILE",link:"/Profile"},
  {name:"ASSET",link:"/Asset"},
];
let [open,setOpen]=useState(false);
  return (
    <div style={styling}  className='h-screen '  >
      {/* Navbar start  */}
      <div className='shadow-md w-full fixed top-0 left-0 bg-gray-200'>
      <div className='bg-gray-200 md:flex items-center justify-between  py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
  
        </span>
        Anurag
      </div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <GiHamburgerMenu name={open ? 'close':'menu'}/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute space-x-3 md:static bg-gray-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-lg font-semibold md:my-0 my-7 bg-gray-200'>
              <a href={link.link} className='text-gray-800 hover:text-gray-900 bg-gray-200 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Web3Button/>
        
      </ul>
      </div>
    </div>
      {/* Navbar end  */}

      {/* header start  */}

      <div className=' lg:h-4/5  items-center flex'>
      <div className='w-4/5 p-10'>
        <div className='text-white space-y-4 mt-10 lg:mt-0'>
          <p className='sm:text-8xl text-6xl text-blue-600'>Welcome to Yonko!!!</p>
          <p className='lg:text-7xl text-5xl font-light'>Trading Asset</p>
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