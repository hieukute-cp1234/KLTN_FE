import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "./actions";

const initialState = {
  user: {},
  listUser: [],
  token: "",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [handleLogin.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", payload.data.token);
      state.token = payload.data.token;
    },
  },
});

const { reducer, actions } = auth;

export const { login } = actions;
export default reducer;
