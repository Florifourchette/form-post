import React, { useState } from "react";
import axios from "axios";

const Form = ({ allPosts, setAllPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);

    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((newPost) => {
        newPost.id = Math.random();
        newPost.title = title;
        newPost.body = body;
        setAllPosts([newPost, ...allPosts]);
        console.log(newPost);
      })
      .catch(() => console.log("error"));
  };
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: title,
  //       body: body,
  //       userId: 1,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((newPost) => {
  //       setAllPosts([newPost, ...allPosts]);
  //     });
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <button>Submit Post</button>
      </form>
    </>
  );
};

export default Form;
