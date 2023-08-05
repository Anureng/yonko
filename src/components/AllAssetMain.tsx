import React from 'react'

const AllAssetMain = () => {
  return (
    <div>
        <div className='border border-black w-fit p-2'>
            <p>Owner :- 0x0AcBD71649b4339A08C2d14f843dA3A4610d2730</p>
            <p>Name :- Anurag Sidhu</p>
            <p>description :- Anurag Sidhu</p>
            <p>Price :- 3000</p>
            <p>BorrowingPrice :- 100</p>
            <div className='space-x-2'>
            <button className='bg-[#3A2280] px-1 py-2 rounded-xl text-white'>Buyed</button>
            <button className='bg-[#3A2280] px-1 py-2 rounded-xl text-white'>Borrow</button>
            </div>
        </div>
    </div>
  )
}

export default AllAssetMain