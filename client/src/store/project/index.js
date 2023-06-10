import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProject } from "./actions";

const initialState = {
  listProject: [],
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
  extraReducers: {
    [fetchAllProject.fulfilled]: (state, { payload }) => {
      state.listProject = payload;
    },
  },
});

const { reducer, actions } = auth;

export const { toggleModalAddProject } = actions;
export default reducer;
