import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../utils/http";

const initialState = {
  users: [],
  usersLoading: false,
  usersError: null,
  userSelect: null,
  user: null,
  userLoading: false,
  userError: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await http.get("users");
  return response.data;
});

export const getUserById = createAsyncThunk("users/getUserById", async (id) => {
  const response = await http.get(`users/${id}`);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.usersLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.usersLoading = false;
      state.usersError = action.error;
    },
    [getUserById.pending]: (state, action) => {
      state.userLoading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.user = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = action.error;
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
