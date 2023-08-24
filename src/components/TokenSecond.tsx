"use client"
import Image from 'next/image'
import { usePrepareContractWrite, useSendTransaction,useContractWrite, usePrepareSendTransaction } from 'wagmi'
import React, { useEffect, useState } from 'react'
import {ethers}  from "ethers";
import { useAccount } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS, Eth } from '@/app/contract/contract'

// import { parseEther } from 'viem';

const TokenSecond = () => {
  // console.log(CONTRACT_ABI);
  const { address, isConnecting, isDisconnected } = useAccount()

  // const { config, error } = usePrepareContractWrite({
  //   address: CONTRACT_ADDRESS,
  //   abi: CONTRACT_ABI,
  //   functionName: 'mint',
  //   args:[kl],
  //   onError(error) {
  //     // alert(`An error occurred preparing the transaction: ${error.name} ${error.message}`);
  //     alert(error.message);
  //   },
  // })
  // const { write } = useContractWrite(config)





  useEffect(() => {
    
  }, []);
  const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Kz46-dMGtMzy5Bg7hvfcnsvi8NuHh3S2")
    const signer = provider.getSigner(address);
    const addressAbiSigner = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    )
    


 
    async function mintTokens() {
      const mintAmount = ethers.utils.parseEther('0.01'); // Amount in Ether
      const overrides = {
          value: mintAmount,
      };
      const tx = await addressAbiSigner.mint(mintAmount, overrides);
      await tx.wait(); // Wait for the transaction to be mined
    }
  return (
    <div className=' text-white p-10'>
      <p className='flex items-center justify-center text-xl '>Add AN Token to your profile</p>
      <div  className='flex  items-center justify-center space-y-10 space-x-10  h-full p-12'>
      <div>
        <Image src="/token2.jpg" className='rounded-xl' alt='nothing' width={500} height={500}/>
      </div>
      <div className='space-x-4'>
        {/* <input type="number"  className='outline-none border px-1 py-2 rounded-xl bg-transparent ' onChange={(e)=>setAmount(e.target.value)}  placeholder='Enter the amount'  /> */}
        <button onClick={()=>mintTokens()} className='bg-[#39227D] px-2 py-1 rounded-xl text-white'>Mint</button>
      </div>
      </div>
    </div>
  )
}

export default TokenSecond


