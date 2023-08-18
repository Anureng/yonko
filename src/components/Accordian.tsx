import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const Accordian = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-gray-100'>
      <p className='text-2xl text-blue-800'>FAQ</p>
        <Accordion type="single" collapsible className='w-3/5 p-2  text-blue-700  text-xl'>
  <AccordionItem value="item-1" >
    <AccordionTrigger className='text-lg'>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger className='text-lg'>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger className='text-lg'>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>


</Accordion>
    </div>
  )
}

export default Accordian

