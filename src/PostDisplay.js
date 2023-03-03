import React from "react";

const PostDisplay = ({ post }) => {
  return (
    <>
      <div>id={post.id}</div>
      <div>title={post.title}</div>
      <div>body={post.body}</div>;
    </>
  );
};

export default PostDisplay;
