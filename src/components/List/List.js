import React, { useEffect, useState } from 'react'
import Data from '../../Data/Data.json'

const List = () => {
    
    const [data,setData] = useState([])
    const upVoteHandle = (e) => {
      const obj = data.find(item => e === item.id)
      obj.vote ++

      setData(
        data.map(item =>{ 
          if(item.id ===e) {
            return {
              ...item,
              obj
            }
          }
          return item
        } )
      )
    }
   

    useEffect(() => {
        setData(Data)
    },[])
    
    const downVoteHandle = (e) => {
      const obj = data.find(item => e === item.id)
      obj.vote --

      setData(
        data.map(item =>{ 
          if(item.id ===e) {
            return {
              ...item,
              obj
            }
          }
          return item
        } )
      )
    }
    
  return (
    <div>
        
      {
        data.map(itm => (
           <div>
            
             <div key={itm.id} className='flex justify-center items-center'>
                
                <div className='w-24 h-24 border-x border-y flex justify-center items-center mt-2 rounded-md border-gray-400 text-2xl bg-gray-300 '>
                {itm.vote}
                    Points</div>
                <div className='ml-3'>
                   <div className='font-bold text-2xl'> {itm.name}</div>
                   <div className='opacity-70'>  {itm.url}</div>
                    <div className='text-sm opacity-60 mt-4'>
                        <button onClick={()=>upVoteHandle(itm.id)} className='mr-20 '>+Vote</button>
                        <button disabled={itm.vote === 0} onClick={()=>downVoteHandle(itm.id)}>-Vote</button>
                    </div>
                </div>
            </div>
            </div>
        ))
      }

    </div>
  )
}

export default List