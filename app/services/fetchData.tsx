import axios from "axios";
import { useState } from "react";

export const APICall = async () => {
  const [post, setPost] = useState(null);
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => setPost(response.data));
  return post;
};
