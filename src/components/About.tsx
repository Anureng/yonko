import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
            <div className='flex items-center justify-center mt-8 text-xl'>About this Dapp</div>
        <div className='flex  flex-col sm:flex-row items-center justify-center space-x-4  h-fit p-2'>

        <div className='flex flex-col items-center justify-center rounded-xl border hover:shadow-xl p-3'>
            <Image src="/eth.jpg" alt='nothing' width={100} height={100}/>
           <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Odit  libero rem vel <br /> corporis id perspiciatis consectetur minus </p>
        </div>

        <div className='flex flex-col items-center justify-center rounded-xl border hover:shadow-xl p-3'>
        <Image src="/buyed.png" alt='nothing' width={100} height={100}/>
        <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Odit aliquam  libero rem vel <br /> corporis id perspiciatis consectetur minus </p>
        </div>

        <div className='flex flex-col items-center justify-center rounded-xl border hover:shadow-xl p-3'>
        <Image src="/borrowed.png" alt='nothing' width={100} height={100}/>
        <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Odit aliquam  libero rem vel <br /> corporis id perspiciatis consectetur minus </p>
        </div>

         </div>
        </div>
  )
}

export default About