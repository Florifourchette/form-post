import React, { useState } from "react";

const Form = ({ allPosts, setAllPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    console.log("submit done");
    console.log(title);
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newPost) => {
        setAllPosts([newPost, ...allPosts]);
        console.log(newPost);
        console.log(allPosts);
      });
  };

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
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
