import React from "react";
import MyButton from "./ui/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props, remove) => {
  const navigate = useNavigate()
  console.log(navigate)
  
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
          <MyButton onClick={()=>navigate(`/posts/${props.post.id}`, {replace: true})}>Open</MyButton>
        </div>
      </div>
    )
}

export default PostItem;