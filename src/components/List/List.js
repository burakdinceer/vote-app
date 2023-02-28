import React, { useState } from 'react'
import Data from '../../Data/Data.json'

const List = () => {
    const [value,setValue] = useState(0)
    const [selectedItemsUp, setSelectedItemsUp] = useState({});
    const [selectedItemsDown, setSelectedItemsDown] = useState({});

    const upVoteHandle = (item) => {
        setSelectedItemsUp((prevSelectedItems) => ({
            ...prevSelectedItems,
            [item.id]: !prevSelectedItems[item.id],
          }));

    }
    const downVoteHandle = (item) => {
        setSelectedItemsDown((prevSelectedItems) => ({
            ...prevSelectedItems,
            [item.id]: !prevSelectedItems[item.id],
          }));
          
        
    }
    const art = () => {
        setValue(value+1)
    }
    console.log(selectedItemsUp)
  return (
    <div>
        
      {
        Data.map(itm => (
           <div>
            
             <div key={itm.id} className='flex justify-center items-center'>
                
                <div className='w-24 h-24 border-x border-y flex justify-center items-center mt-2 rounded-md border-gray-400 text-2xl bg-gray-300 '>
                {value}
                    Points</div>
                <div className='ml-3'>
                   <div className='font-bold text-2xl'> {itm.name}</div>
                   <div className='opacity-70'>  {itm.url}</div>
                    <div className='text-sm opacity-60 mt-4'>
                        <button onClick={()=>upVoteHandle(itm)} className='mr-20 '> {selectedItemsUp[itm.id] ? "Not Selected" : "Selected"}</button>
                        <button onClick={()=>downVoteHandle(itm)}>{selectedItemsDown[itm.id] ? "Not Selected" : "Selected"}</button>
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