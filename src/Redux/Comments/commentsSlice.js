import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../utils/http";

const initialState = {
  comments: [],
  commentsLoading: false,
  commentsError: null,
};

export const getCommentsByPostId = createAsyncThunk(
  "comments/getCommentsByPostId",
  async (id) => {
    const response = await http.get(`comments?postId=${id}`);
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentsByPostId.pending]: (state, action) => {
      state.commentsLoading = true;
    },
    [getCommentsByPostId.fulfilled]: (state, action) => {
      state.commentsLoading = false;
      state.comments = action.payload;
    },
    [getCommentsByPostId.rejected]: (state, action) => {
      state.commentsLoading = false;
      state.commentsError = action.error;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
