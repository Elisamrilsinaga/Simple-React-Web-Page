import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsAPI, getPostAPI, updatePostAPI } from "./reducerAPI";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
};

export const getPosts = createAsyncThunk("posts/data", async () => {
  const response = await getPostsAPI();
  return response.data;
});

export const getPost = createAsyncThunk("posts/show", async (id) => {
  const response = await getPostAPI(id);
  return response.data;
});

export const updatePost = createAsyncThunk("posts/update", async (payload) => {
  const response = await updatePostAPI(payload);
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.show = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const {} = postsSlice.actions;

export const data = (state) => state.posts;

export default postsSlice.reducer;
