"use client"
import Link from 'next/link'
import React from 'react'
import { useSignMessage } from 'wagmi'
import { Web3Button, Web3Modal, Web3NetworkSwitch } from '@web3modal/react'

const Navbar = () => {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'gm wagmi frens',
    onSuccess(data) {
      console.log('Success', data)
    },
  })
  console.log(data);
  
  return (
    <div>
          <div  className='flex  items-center justify-around text-white
        p-4 font-mono text-xl '>
        <div className='  px-1 py-2 rounded-xl font-bold text-xl font-serif'>
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
    </div>
  )
}

export default Navbar