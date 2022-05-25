// A mock function to mimic making an async request for data
import axios from "axios";

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const getPostsAPI = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res;
};

export const getPostAPI = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res;
};

export const updatePostAPI = async (payload) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
    payload,
    { headers: { Authorization: `Bearer toekn` } }
  );
  return res;
};
