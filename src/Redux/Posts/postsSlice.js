import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../utils/http";

const initialState = {
  posts: [],
  postsLoading: false,
  postsError: null,
  post: null,
  postLoading: false,
  postError: null,
};

export const getPostsByUserId = createAsyncThunk(
  "posts/getPostsByUserId",
  async (id) => {
    const response = await http.get(`posts?userId=${id}`);
    return response.data;
  }
);

export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  const response = await http.get(`posts/${id}`);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsByUserId.pending]: (state, action) => {
      state.postsLoading = true;
    },
    [getPostsByUserId.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.posts = action.payload;
    },
    [getPostsByUserId.rejected]: (state, action) => {
      state.postsLoading = false;
      state.postsError = action.error;
    },
    [getPostById.pending]: (state, action) => {
      state.postLoading = true;
    },
    [getPostById.fulfilled]: (state, action) => {
      state.postLoading = false;
      state.post = action.payload;
    },
    [getPostById.rejected]: (state, action) => {
      state.postLoading = false;
      state.postError = action.error;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
