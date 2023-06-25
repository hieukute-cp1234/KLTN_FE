import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, getMe, fetchListUser } from "./actions";

const initialState = {
  user: {},
  listUser: [],
  token: localStorage.getItem("token") || "",
  isAddUser: false,
  keySearch: "",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleModalAddUser: (state, action) => {
      state.isAddUser = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
    changeKeySearch: (state, action) => {
      state.keySearch = action.payload;
    },
  },
  extraReducers: {
    [handleLogin.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
    },
    [getMe.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [fetchListUser.fulfilled]: (state, { payload }) => {
      state.listUser = payload;
    },
  },
});

const { reducer, actions } = auth;

export const { toggleModalAddUser, clearToken, changeKeySearch } = actions;
export default reducer;
