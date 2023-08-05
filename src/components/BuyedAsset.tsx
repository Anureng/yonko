"use client"
import React, { useState } from 'react'

const BuyedAsset = () => {
    const [data, setData] = useState<any>([
        {
            "id":1,
            "name":"Anurag",
            "description":"Yo!!!",
            "ImageUrl":"Anurag.png",
            "price":10,
            "borrowingPrice":10,
        },
        {
            "id":1,
            "name":"Anurag",
            "description":"Yo!!!",
            "ImageUrl":"Anurag.png",
            "price":10,
            "borrowingPrice":10,
        },
        {
            "id":1,
            "name":"Anurag",
            "description":"Yo!!!",
            "ImageUrl":"Anurag.png",
            "price":10,
            "borrowingPrice":10,
        },
        {
            "id":1,
            "name":"Anurag",
            "description":"Yo!!!",
            "ImageUrl":"Anurag.png",
            "price":10,
            "borrowingPrice":10,
        },
        {
            "id":1,
            "name":"Anurag",
            "description":"Yo!!!",
            "ImageUrl":"Anurag.png",
            "price":10,
            "borrowingPrice":10,
        }
    ])
    
    console.log(data);
  return (
    <div > 
           <div className='text-blue-900 border border-black p-4'>
    <div className='flex items-center justify-center text-xl'>
      You Buyed these Assets
    </div>
    <div className='flex   h-96 items-center justify-center space-x-4'>
    {data.map((el:any)=>(
      <>
      <div className=' bg-blue-300 text-black p-3 shadow-xl rounded-xl flex flex-col'>
      <span>{el.name}</span>
      <span>{el.description}</span>
      <span>{el.ImageUrl}</span>
      <span>{el.price}</span>
      <span>{el.borrowingPrice}</span>
      </div>
      </>
    ))}
    </div>
  </div></div>
  )
}

export default BuyedAsset