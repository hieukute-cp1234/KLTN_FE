import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProcess: [],
};

const auth = createSlice({
  name: "process",
  initialState,
  reducers: {},
  extraReducers: {},
});

const { reducer, actions } = auth;

export const {} = actions;
export default reducer;
