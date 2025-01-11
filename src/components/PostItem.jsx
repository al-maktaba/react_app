import React from "react";
import MyButton from "./ui/button/MyButton";

const PostItem = (props, remove) => {
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.description}
          </div>
        </div>
        <div className="post_btns">
          <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    )
}

export default PostItem;