import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, getMe } from "./actions";

const initialState = {
  user: {},
  listUser: [],
  token: localStorage.getItem("token") || "",
  isAddUser: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleModalAddUser: (state, action) => {
      state.isAddUser = action.payload;
    },
  },
  extraReducers: {
    [handleLogin.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.token = payload.token;
    },
    [getMe.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = auth;

export const { login, toggleModalAddUser } = actions;
export default reducer;
