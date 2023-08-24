"use client"
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/app/contract/contract'
import React, { useEffect, useState } from 'react'
import { useContractRead,useAccount } from 'wagmi'
const UserToken = () => {

  const [store, setStore] = useState<Number | undefined>()

  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'balanceOf',
    args:[address]
  })
console.log(address);

  console.log(data)

  useEffect(() => {
    setStore(data)
  }, [])
  
  
  return (
    <div className='text-white  rounded-xl  flex items-center justify-center p-4  '>
    <p className='border border-white px-1 py-2  shadow-xl rounded-xl'>
      You have {String(store)} AS Token
    </p>
    </div>
  )
}

export default UserToken