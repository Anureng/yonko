"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import { usePrepareContractWrite, useContractWrite,useWaitForTransaction } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/app/contract/contract'
import { Web3Storage } from 'web3.storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CreateAsset = () => {

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [borrowingPrice, setBorrowingPrice] = useState("")
  const [type, setType] = useState()

  console.log(type);
  

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [fileSize, setFileSize] = useState();
    const [fileType, setFileType] = useState();
    const [fileurl, setFileurl] = useState()

    const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVmMUZlZjFkMjM2NzdFNDNBZjkzNTYwNTNEQjhjZUU5MTgxNkFkRTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODUzNzQwNTQ5MzMsIm5hbWUiOiJhbWF6b24ifQ.CJO2iz7HqaIJJ14iZbfdbilW1-5FdQxYcKH_kozNId8" })
const captureFile = async (e:any) => {
    try {
      setFile(e.target.files);
      setFileName(e.target.files[0].name);
      setFileSize(e.target.files[0].size);
      setFileType(e.target.files[0].type);
    } catch (err) {
      console.log(err);
    }
  };


  const notify = (data:any) => toast.success(`Image upload Successful`);
  const uploadtoWeb3Storage=async()=>{
    const uploadedFile =await  client.put(file, {
        name: fileName,
        maxRetries: 10,
        wrapWithDirectory: false,
      });
     console.log( uploadedFile);
     const ok=setFileurl(uploadedFile.toString());
     notify(uploadedFile)
     console.log("gkgk"+typeof( ok));
  }

  const consoleData = () =>{
    console.log("You have successfully Click");
    
  }


    const { config, error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'createAsset',
    args:[name,description,price,borrowingPrice,fileurl],
    onError(error) {
      alert(`An error occurred preparing the transaction: ${error.message}`)
    },
  })
  const contractWrite = useContractWrite(config)
  const waitForTransaction = useWaitForTransaction({
    hash: contractWrite.data?.hash,
    onSuccess() {
    notify(waitForTransaction)
    },
  })
  const { write } = useContractWrite(config)

  return (
    <div className='flex items-center justify-center space-x-2'>
        <div>
            <Image src="/createasset1.png" alt='nothing' width={600} height={600}/>
        </div>
        <div className='border border-white rounded-3xl shadow-xl flex flex-col items-center justify-center  space-y-5 p-10'>
            <p className='text-xl text-white'>Create The Asset</p>
            <div className='space-x-5' >
            {/* <input className='px-1 py-2 rounded-xl bg-transparent outline-none border' type="number" onChange={(e)=>setId(e.target.value)} placeholder='Enter ID' /> */}
            <input className='px-1 py-2 rounded-xl bg-transparent outline-none border' type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
            <input className='px-1 py-2 rounded-xl bg-transparent outline-none border' type="text"onChange={(e)=>setDescription(e.target.value)} placeholder='Enter Description' />
            </div>
            <div className='space-x-5 '>
            <input className='px-1 py-2 rounded-xl bg-transparent outline-none border' type="number" onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'/>
            <input className='px-1 py-2 rounded-xl bg-transparent outline-none border' type="number" onChange={(e)=>setBorrowingPrice(e.target.value)} placeholder='Enter Borrowing price' />   
            </div>
            <div>
            {/* <Select>
  <SelectTrigger className="w-[180px] border-white rounded-xl ">
    <SelectValue placeholder="Select"  className='placeholder:text-white' />
  </SelectTrigger>
  <SelectContent className='bg-white text-black'   >
    <SelectItem  value="Audio" >Audio</SelectItem>
    <SelectItem  value="Video">Video</SelectItem>
    <SelectItem  value="Image">Image</SelectItem>
  </SelectContent>
</Select> */}
            </div>
            <div className="flex items-center justify-center w-60">
    <label className="flex flex-col items-center justify-center w-full h-32  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" onChange={(e)=>captureFile(e)} className="hidden" />
    </label>
</div>
<div className='space-x-4'>
    <button className='bg-white px-1 py-2 rounded-xl' onClick={(e)=>uploadtoWeb3Storage(e)}>Upload File</button>
    <button className='bg-white px-1 py-2 rounded-xl' disabled={!write} onClick={() => write?.()}>Create</button>
</div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default CreateAsset