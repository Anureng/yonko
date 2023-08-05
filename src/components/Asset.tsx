'use client'
import React, { useState } from 'react'

interface IAdata{
    id:number,
    name:string,
    description:string,
    ImageUrl:string
    price:number
    borrowingPrice:number
}
const Asset = () => {
    const [data, setData] = useState<IAdata[]>([
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
            "name":"nik",
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

    const [query, setQuery] = useState('');

//Our search filter function
  const searchFilter = (array:any) => {
  return array?.filter(
    (el:any) => el.name?.common?.toLowerCase().includes(query)
  )
  }

    const filtered = searchFilter(data)

    console.log(searchFilter(data));
    

    console.log(data);
    function handleChange(e: any) {
        setQuery(e.target.value)
    }

        
  return (
    <div className='text-black flex flex-wrap items-center  space-x-4  justify-center p-4 space-y-4'>
        <input onChange={handleChange} type='text' placeholder='Search...'/>
       {filtered?.map((el:any)=>(
        <>
        <div className='border border-black p-2 text-xl'>
        <div>id:-{el.id}</div>
        <div>Name:-{el.name}</div>
        <div>description:-{el.description}</div>
        <div>ImageUrl:-{el.ImageUrl}</div>
        <div>price:-{el.price}</div>
        <div>borrowingPrice:-{el.borrowingPrice}</div>
        <div className='space-x-2'>
        <button>Buy</button>
        <button>Borrow</button>
        </div>
        </div>
        </>
       ))}
    </div>
  )
}

export default Asset