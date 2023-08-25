"use client"
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Skeleton } from "@/components/ui/skeleton"




  import { useAccount, useContractRead } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/app/contract/contract'
import { ethers } from 'ethers'
import Image from 'next/image'
  


const FilterMainPage = () => {
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


     const handleBuyAsset =async(index) =>{
    //  const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Kz46-dMGtMzy5Bg7hvfcnsvi8NuHh3S2")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner(address);
     const addressAbiSigner = new ethers.Contract(
       CONTRACT_ADDRESS,
       CONTRACT_ABI,
       signer
     )

      // console.log(i);/
      const pushData = await addressAbiSigner.BuyAsset(index)
      console.log("successfull purchase", pushData);

    console.log(address);

    const [activeCategory, setActiveCategory] = useState([])
    const [searcgCategory, setSearchCategory] = useState("")
    const searchFilterCategory = () =>{
      
    }
  }




  const handleBorrowAsset =async(index) =>{
    //  const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Kz46-dMGtMzy5Bg7hvfcnsvi8NuHh3S2")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner(address);
     const addressAbiSigner = new ethers.Contract(
       CONTRACT_ADDRESS,
       CONTRACT_ABI,
       signer
     )

      // console.log(i);/
      const pushData = await addressAbiSigner.BorrowAsset(index)
      console.log("successfull purchase", pushData);
     
    console.log(address);

    const [activeCategory, setActiveCategory] = useState([])
    const [searcgCategory, setSearchCategory] = useState("")
    const searchFilterCategory = () =>{
      
    }
  }




  return (
    <div>
      
    <div className='border border-black  '>
        {/* Navbar with higher or lower price  */}
        <div className='flex items-center space-x-2  justify-around'>
          {/* <input type='text' onChange={(e)=>setS}/> */}
        </div>
        <div className='flex '>
        {/* left filter side  */}
        <div className='space-y-2 '>
           
            {/* Author Category  */}
            {/* <div className='flex flex-col items-center space-y-3 p-2'>
                <p className='text-red-600 font-bold text-lg '>Author</p>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Sam</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Jony</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Anurag</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Sang</button>
            </div>
             {/* hardCopy and Soft copy  */}
             {/* <div className='flex flex-col items-center space-y-3 p-2'>
                <p className='text-red-600 font-bold text-lg '>Type</p>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Hard Copy</button>
             <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Soft Copy</button>
            </div>
        </div> */} 
        {/* hr line  */}
        {/* <div className=' border-left border'></div> */}
<div className='flex flex-wrap items-center justify-center space-x-10 '>
{
  loading===true ? (
    
 
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    
  )
  :
  (
    <div className='flex flex-wrap items-center justify-center space-x-10 '>
      {contractData?.map((person , index) => (
  <div key={index } className='border hover:shadow-xl  p-2  hover:rounded-xl'>
    <span>Name :- {person[0]}</span>
    <Image className='rounded-xl' src={"https://ipfs.io/ipfs/"+person[7]} alt='loading' width={100} height={100} />
    {/* <Image src={`https://ipfs.io/ipfs/${person[7]}`} width={100} height={100} alt='Nothing'/> */}
    <span>Description :- {person[1]}</span> <br />
    <span>Price :- {parseInt(person[2]._hex)}</span> <br />
    <span>BorrowingPrice :- {parseInt(person[3]._hex)}</span> <br />
    <span>Owner :- {person[4].toString()}</span> <br />
    <span>Borrowed :- {person[8].toString()==="0x0000000000000000000000000000000000000000" ? "No one Borrow this Asset " : (
      <div>{person[8].toString()}</div>
      // <div>No one Borrow this Asset </div>
    )}</span>
<br />
<div className='space-x-4'> 
    <button onClick={()=>handleBuyAsset(index)} className='bg-blue-600 text-white px-1 py-2 rounded-xl'>Buy </button> 
    <button onClick={()=>handleBorrowAsset(index)} className='bg-blue-600 text-white px-1 py-2 rounded-xl'>Borrow</button>
</div>
  </div>
        ))}
    </div>
  )
}

        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default FilterMainPage