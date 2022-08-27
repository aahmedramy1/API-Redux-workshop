import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Redux/Users/usersSlice";
import postsReducer from "../Redux/Posts/postsSlice";
import commentsReducer from "../Redux/Comments/commentsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
