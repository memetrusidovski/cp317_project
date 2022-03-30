import axios from "axios";
import React from "react";
import './Like.css';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Like() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="Like-text">
      <h1>im axios {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
