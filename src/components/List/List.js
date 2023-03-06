
import { useDispatch, useSelector } from 'react-redux'
import { downVoteComment, upVoteComment } from '../../redux/commentsSlice'

const List = () => {

   const comments = useSelector((state) => state.comments.list);
   const dispatch = useDispatch()
   

  
  return (
    <div>
       
      {
        comments.map(comment => (
           <div>
            
             <div key={comment.id} className='flex justify-center items-center'>
                
                <div className='w-24 h-24 border-x border-y flex justify-center items-center mt-2 rounded-md border-gray-400 text-2xl bg-gray-300 '>
                {comment.upvote}
                
                    Points</div>
                <div className='ml-3'>
                   <div className='font-bold text-2xl'> {comment.name}</div>
                   <div className='opacity-70'>  {comment.url}</div>
                    <div className='text-sm opacity-60 mt-4'>

                        <button onClick={()=>dispatch(upVoteComment({commentId : comment.id}))} className='mr-20 '>+Vote</button>

                        <button disabled={comment.upvote === 0} onClick={()=>dispatch(downVoteComment({commentId:comment.id}))}>-Vote</button>
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