import React from 'react'
import { Link } from 'react-router-dom'

const Submit = () => {
  return (
    
    <div className='flex justify-center items-center mt-5 '>
       <Link>
       <div className='flex justify-center items-center w-80 h-24 border-x border-y bg-gray-200 rounded-md'>
          <div className='mr-6 h-16 w-16 border-x border-y rounded-md border-gray-400 font-bold text-5xl bg-gray-300'>+</div>
          <div className='font-bold text-2xl'>SUBMIT A LINK</div>
        </div>
       </Link>
    </div>
   
  )
}

export default Submit