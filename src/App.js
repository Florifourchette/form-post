import "./App.css";
import PostDisplay from "./PostDisplay";
import Instructions from "./Instructions";
import Form from "./Form";
import { useState, useEffect } from "react";

export default function App() {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPostJson = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await result.json();
    return json;
  };

  useEffect(async () => {
    const data = await fetchPostJson();
    setAllPosts(data);
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((postResponse) => {
  //       setAllPosts(postResponse);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  return (
    <div className="App">
      <Instructions />
      <div className="block">
        <Form allPosts={allPosts} setAllPosts={setAllPosts} />
        {allPosts.map((post) => (
          <PostDisplay key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
