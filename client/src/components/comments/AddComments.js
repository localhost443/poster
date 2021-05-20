import React, { useState } from "react";
import CommentsList from "./CommentsList";
import axios from "axios";

const AddComment = (props) => {
  const [data, setData] = useState("");
  const onsubmit = async (event) => {
    event.preventDefault();
    let url = `http://localhost:4001/posts/${props.postKey}/comments`;
    await axios.post(url, {
      id: props.postKey,
      comment: data,
    });
    setData("");
  };

  return (
    <div>
      <div className="h-full">
        <form onSubmit={onsubmit}>
          <input
            className="h-full px-3 py-2 inline-block border-2 border-blue-200 focus:outline-none focus:border-blue-600"
            type="text"
            name="comment"
            placeholder="Write your comment"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <input type="hidden" value={props.postKey} name="id" />
          <button
            className="m-2 bg-white border-blue-200 border-2 px-3 py-2 rounded hover:bg-green-100 active:shadow-md  focus:border-blue-900 hover:text-green-800"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <CommentsList commentsList={props.commentList} />
    </div>
  );
};

export default AddComment;
