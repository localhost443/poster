import React, { useState, useEffect } from "react";
import axios from "axios";
import AddComment from "../comments/AddComments";

function PostList(props) {
  const [posts, setPost] = useState({});
  const fetchPost = async () => {
    const posts = await axios.get("http://localhost:4004/posts/");
    // console.log(posts);
    setPost(posts.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const allPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="mx-4 my-2 bg-white px-3 shadow rounded-md py-4"
      >
        <div>
          <p>{post.title}</p>
          <hr className="text-blue-900 m-2" />
        </div>

        <div>
          <p>Comments</p>
          <AddComment postKey={post.id} commentList={post.comments} />
        </div>
      </div>
    );
  });
  return <div className="bg-gray-100">{allPosts}</div>;
}

export default PostList;
