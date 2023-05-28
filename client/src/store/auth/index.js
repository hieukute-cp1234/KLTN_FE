import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "./actions";

const initialState = {
  user: {},
  listUser: [],
  token: "hieukute",
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
      console.log("payload", payload);
    },
  },
});

const { reducer, actions } = auth;

export const { login } = actions;
export default reducer;
