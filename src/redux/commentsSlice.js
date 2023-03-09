import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list:  [
        {
            id:"1",
            name:"Burak",
            url:"wwww.burak.com",
            upvote:1,
          
           
        },
        {   id:"2",
            name:"Tolga",
            url:"wwww.tolga.com",
            upvote:5,
          
           
        },
        {   id:"3",
            name:"Ertugrul",
            url:"wwww.ertugrul.com",
            upvote:3,
            
            
            
        },
        {   id:"4",
            name:"Mert",
            url:"wwww.mert.com",
            upvote:10,           
        }
    ]
}

export const commentsSlice = createSlice(({
    name:'comments',
    initialState,
    reducers:{
        upVoteComment(state,action){
            const {commentId} = action.payload;
            const comment = state.list.find((c) => c.id === commentId);
            comment.upvote++
        },
        downVoteComment(state,action){
           
            const {commentId} = action.payload;
            const comment = state.list.find((c) => c.id === commentId);
            comment.upvote--
         },
        mostVote(state,action){
          
        state.list = state.list.sort((a, b) => {
         
                if (a.upvote < b.upvote) {
                  return -1;
                  
                }
                if (a.upvote > b.upvote) {
                  return 1;
                  
                }
                return 0;
            
              });
             
        },
        lessVote(state,action){
          
            state.list.sort((a, b) => {
             
                    if (a.upvote < b.upvote) {
                      return 1;
                      
                    }
                    if (a.upvote > b.upvote) {
                      return -1;
                      
                    }
                    return 0;
                
                  });
                
                 
                 
            } ,
          addListItem(state,action){
            state.list=[...state.list,action.payload]
           
          },
          sortDataList(state,action){
           state.list.sort((a,b) => {
              return b.upvote - a.upvote
            })
           
          },
          deleteData(state,action){
            const {commentId} = action.payload
            const newData = state.list.filter((c) => c.id !== commentId)
            state.list = newData
          }
          
    }
}))

export const {upVoteComment,downVoteComment,mostVote,lessVote,addListItem,sortDataList,deleteData} =commentsSlice.actions
export default commentsSlice.reducer