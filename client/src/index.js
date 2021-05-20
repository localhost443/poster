import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import AddPost from "./components/posts/AddPosts";
import PostList from "./components/posts/postList";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <AddPost />
      <PostList />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
