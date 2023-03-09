
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, downVoteComment, sortDataList, upVoteComment } from '../../redux/commentsSlice'

const List = () => {

   const comments = useSelector((state) => state.comments.list);
   const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(sortDataList())
  },[comments])
 
   
   
  return (
    <div>
       
      {
        comments.map(comment => (
           <div className='relative '>
            
             <div key={comment.id} className='flex justify-center items-center  '>
                
                <div className='w-24 h-24 border-x border-y flex justify-center items-center mt-2 rounded-md border-gray-400 text-2xl bg-gray-300  '>
                {comment.upvote}
                
                    Points</div>
                <div className='ml-3 group'>
                   <div className='font-bold text-2xl'> {comment.name}</div>
                   <div className='opacity-70'>  {comment.url}</div>
                    <div className='text-sm opacity-60 mt-4'>

                        <button onClick={()=>dispatch(upVoteComment({commentId : comment.id}))} className='mr-20 '>+Vote</button>

                        <button disabled={comment.upvote === 0} onClick={()=>dispatch(downVoteComment({commentId:comment.id}))}>-Vote</button>
                    </div>
                    <button onClick={() =>dispatch(deleteData({commentId:comment.id}))} className='absolute top-0 right-96 left-auto  w-5 h-5 bg-red-700 text-white rounded-2xl opacity-0 group-hover:opacity-100'>X</button>
                </div>
            </div>
            </div>
        ))
      }

    </div>
  )
}

export default List