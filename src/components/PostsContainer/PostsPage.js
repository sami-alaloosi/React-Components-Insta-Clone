//Complete the necessary code in this file
// import useState 
//done
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 
// done

const PostsPage = () => {
  // set up state for your data
  //done
  const [postData, setPostData] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {/* done */}
      {postData.map(data => <Post post = {data} key={data.username} /> )}
    
    </div>
  );
};

export default PostsPage;
