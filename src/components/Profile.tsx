'use client'
import React, { useState } from 'react'

const Profile = () => {
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
    <div className='text-white border border-black'>

      <div className='flex items-center justify-center text-xl'>
        You created these Assets
      </div>
      <div className='flex h-96 items-center justify-center space-x-4'>
      {data.map((el:any)=>(
        <>
        <div className='flex flex-col'>
        <span>{el.name}</span>
        <span>{el.description}</span>
        <span>{el.ImageUrl}</span>
        <span>{el.price}</span>
        <span>{el.borrowingPrice}</span>
        </div>
        </>
      ))}
      </div>
    </div>
  )
}

export default Profile