import React from 'react'
import "../../styles/post.css"
import {obj as postObject} from "../../data/postData"
const Post = () => {
  return (
    <div className='postContainer'>
      {
        postObject.map(postData=>{
          return <div style={{border:"1px solid grey", padding:"10px 5px", marginBottom:"10px"}}>
            <div className='postHeader'> 
            <img src={`${postData.profilePic}`} width="30px" height="30px" style={{borderRadius:"50%"}} alt=''/>
            <span>{postData.username}</span>
            </div>

            <div className='postMain'>
              <img width="100%"src={`${postData.postPics}`} alt="" />
              <span>{postData.likes} Likes</span>
              <br />
              <br />
              <span style={{color:"grey", marginBottom:"20px"}}>{postData.aboutPost}</span>
            </div>
            <div>
              {
                postData.comments.map(comment=>{
                  return <div style={{marginBottom:"12px"}}>
                 <div style={{display:"flex", gap:'4px', alignItems:'center'}}>
                 <img  width="20px" height="20px" style={{borderRadius:"50%"}} src={`${comment.profilePic}`} alt="" />
                  <span>{comment.username}</span>
                  <span>{comment.comment}</span>
                 </div>
                 <span style={{color:"grey", fontSize:"12px", marginLeft:"25px", marginTop:"10px"}}>{comment.likes}Likes</span>
                  </div>
                })
              }
            </div>
            </div>
        })
      }
    </div>
  )
}

export default Post
