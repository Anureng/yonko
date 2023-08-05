import Image from 'next/image'
import Header from "@/components/Header"
import AllAssetMain from '@/components/AllAssetMain'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Accordian from '@/components/Accordian'
export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Accordian/>
    <AllAssetMain/>
    <Footer/>
    </>
  )
}
