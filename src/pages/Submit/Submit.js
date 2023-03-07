import React from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addListItem } from '../../redux/commentsSlice'

const Submit = () => {
    
    
   const dispatch = useDispatch()

   const handlePage = () => {
    dispatch(addListItem())
   }
  return (
    <div>
       <div> <Header/></div>
       <div className='flex flex-col items-center '>
       <Link className='text-sm font-bold mr-48'  to={'/'}> {'<-'}Return to List</Link>
        <h2 className='font-bold text-3xl mr-24  mt-5'>Add New Link</h2>
         <div className='m-5'>
            <p className='text-m'>Link Name</p>
           <input placeholder='Name.....' className='border-gray-400 border-x border-y w-72 h-8 rounded-sm'/>
         </div>
         <div>
         <p className='text-m'>Link Url</p>
           <input placeholder='Url.....' className='border-gray-400 border-x border-y w-72 h-8 rounded-sm'/>
        </div>
        
        
        <button onClick={()=>handlePage()} className='w-28 h-12 bg-black text-white mt-5 rounded-lg font-extrabold'>ADD</button>
       </div>
    </div>
  )
}

export default Submit