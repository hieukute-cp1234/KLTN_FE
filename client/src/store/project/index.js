import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listproject: [],
  isAddProject: false,
};

const auth = createSlice({
  name: "project",
  initialState,
  reducers: {
    toggleModalAddProject: (state, action) => {
      state.isAddProject = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = auth;

export const { toggleModalAddProject } = actions;
export default reducer;
