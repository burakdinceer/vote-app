import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addListItem } from '../../redux/commentsSlice'
import { Form } from 'react-bootstrap'
import uuid from 'react-uuid';

const Submit = () => {
    
  const [formData,setFormData] = useState({ name: '', id: uuid(), url: '',upvote:5 })
   const dispatch = useDispatch()
   console.log(formData)
   
   const handleSubmit = (event) => {
    console.log(event )
    event.preventDefault();
    dispatch(addListItem(formData))
    alert('STACK OVERFLOW added')
    
  };
   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <div>
       <div> <Header/></div>
       <Form onSubmit={handleSubmit}>
       <div className='flex flex-col items-center '>
       <Link className='text-sm font-bold mr-48'  to={'/'}> {'<-'}Return to List</Link>
        <h2 className='font-bold text-3xl mr-24  mt-5'>Add New Link</h2>
         <div className='m-5'>
            <p className='text-m'>Link Name</p>
           <input type='text' name='name' onChange={handleChange} placeholder='Name.....' className='border-gray-400 border-x border-y w-72 h-8 rounded-sm'/>
         </div>
         <div>
         <p className='text-m'>Link Url</p>
           <input type='text' name='email' onChange={handleChange} placeholder='Url.....' className='border-gray-400 border-x border-y w-72 h-8 rounded-sm'/>
        </div>
        
        
        <button type='submit' className='w-28 h-12 bg-black text-white mt-5 rounded-lg font-extrabold'>ADD</button>
       </div>
       </Form>
    </div>
  )
}

export default Submit