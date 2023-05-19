import { createSlice } from "@reduxjs/toolkit";

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
});

const { reducer, actions } = auth;

export const { login } = actions;
export default reducer;
