// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [peopleComments, setPeopleComments] = useState(props.comments)
  console.log(peopleComments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {peopleComments.map(data => <Comment comment = {data} key = {data.username}/>)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
