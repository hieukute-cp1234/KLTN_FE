import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProcess: [],
  isAddProcess: false,
};

const auth = createSlice({
  name: "process",
  initialState,
  reducers: {
    toggleModalAddProcess: (state, action) => {
      state.isAddProcess = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = auth;

export const { toggleModalAddProcess } = actions;
export default reducer;
