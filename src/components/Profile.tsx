'use client'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/app/contract/contract'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const Profile = () => {
  const [contractData , setContractData] = useState()
  const [loading, setLoading] = useState(true)
  const { address, isConnecting, isDisconnected } = useAccount()
  useEffect(() => {
    async function fetchData() {
    const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Kz46-dMGtMzy5Bg7hvfcnsvi8NuHh3S2")
    const signer = provider.getSigner(address);
    const addressAbiSigner = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    )

    const dataCount = await addressAbiSigner.assetCount()

    const data = [];

    for(let i=0 ; i<dataCount.toNumber(); i++) {
      const pushData = await addressAbiSigner.arrayAsset(i)
      console.log(i, pushData);
      
      data.push(pushData)
      
    }
    console.log(data);
    
    setContractData(data)
    setLoading(false)
  }
  fetchData()
  console.log(fetchData());
   }, [])
// console.log(data);


  return (
    <div className='text-white border border-black'>

      <div className='flex items-center justify-center text-xl'>
        You created these Assets
      </div>
      <div className='flex h-96 items-center justify-center space-x-4'>
      {/* {data.map((el:any)=>(
        <>
        <div className='flex flex-col'>
        <span>{el.name}</span>
        <span>{el.description}</span>
        <span>{el.ImageUrl}</span>
        <span>{el.price}</span>
        <span>{el.borrowingPrice}</span>
        </div>
        </>
      ))} */}
      </div>
    </div>
  )
}

export default Profile