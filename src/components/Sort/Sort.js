
import { useDispatch } from 'react-redux';
import { lessVote, mostVote } from '../../redux/commentsSlice';


const Sort = () => {
 
  const dispatch = useDispatch();

    const handlePageMost = () => {
       
        dispatch(mostVote());
  
        
    }
  
    const handlePageLess = () => {
   
      dispatch(lessVote())
        
    }
  return (
    <div className='flex justify-center my-5 text-md font-bold '>
        <button  onClick={()=>handlePageMost()} className='mr-10 border-y-2 border-x-2 border-gray-500 bg-gray-300 p-3 hover:bg-black hover:text-gray-500'>Most Voted(Z - A)</button>
        <button onClick={()=>handlePageLess()}  className='border-y-2 border-x-2 border-gray-500 bg-gray-300 p-3  hover:bg-black hover:text-gray-500'>Less Voted(A - Z)</button>
       
    </div>
  )
}

export default Sort