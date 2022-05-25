// A mock function to mimic making an async request for data
import axios from "axios";

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const getPosts = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res;
};
