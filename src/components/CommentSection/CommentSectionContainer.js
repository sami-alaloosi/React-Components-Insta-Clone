// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [peopleComments, setPeopleComments] = useState(props.comments)
const [value, setValue] = useState()
const submitComment = (event) => {
  event.preventDefault()
  event.target.reset()
  let copy = []
  peopleComments.forEach(data => copy.push(data))
  copy.push({username:"sami-AlAloosi", text :value})
  setPeopleComments(copy)
}

const changeComment =(event) =>{
  setValue(event.target.value)
}
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {peopleComments.map(data => <Comment comment = {data} key = {data.username + data.text}/>)}
      <CommentInput submitComment ={submitComment} changeComment={changeComment}/>
    </div>
  );
};

export default CommentSection;
