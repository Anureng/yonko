"use client"
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/app/contract/contract'
import { ethers } from 'ethers'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'


const BuyedAsset = () => {
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
    <div > 
           <div className='text-blue-900 border border-black p-4'>
    <div className='flex items-center justify-center text-xl'>
      You Buyed these Assets
    </div>
    <div className='flex flex-wrap items-center justify-center space-x-10 '>
     {
      contractData?.map((person,i)=>{
        return (
          <div>

          {
            person.borrowingPrice===address ? (
    <div key={i } className='border hover:shadow-xl  p-2  hover:rounded-xl'>
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

  </div>
            ):(<div>Nothing</div>)
          }
          </div>
        )
})
     }
    </div>
  </div></div>
  )
}

export default BuyedAsset