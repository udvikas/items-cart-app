import Axios from "axios";
import React, { useState } from "react";

const PostAxios = () => {
  const [myTitle, setMyTitle] = useState("");
  const [myBody, setMyBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: myTitle,
      body: myBody,
    }).then((response) => { console.log(response)})
    .catch((error) => console.log(error))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Title:</label>
      <input
        type="text"
        name="title"
        value={myTitle}
        onChange={(e) => setMyTitle(e.target.value)}
      />
      <br />
      <br />
      <label>Enter Body:</label>
      <input
        type="text"
        name="body"
        value={myBody}
        onChange={(e) => setMyBody(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="Post" />
    </form>
  );
};

export default PostAxios;
