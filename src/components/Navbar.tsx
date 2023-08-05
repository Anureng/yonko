import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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
            Connect Button
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar