import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [data, setData] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:4000", {
        title: data,
      })
      .then((data) => setData(""));
  };
  return (
    <div className="bg-white my-3 mx-16 shadow ">
      <div className="text-center">
        <span className="border-b-2 text-gray-700 my-4 ml-5 font-sans">
          Please Post Here
        </span>
      </div>
      <form onSubmit={onSubmit}>
        <div className="px-4">
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="border-2 inline-block border-indigo-400 rounded w-full h-20 px-2 py-1  focus:border-blue-400"
            name="post"
            id="post"
          />
          <br />
          <button
            className="inline-block border-2 border-blue-400 rounded px-3 py-1 focus:bg-blue-400 hover:bg-blue-100 mb-3"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
