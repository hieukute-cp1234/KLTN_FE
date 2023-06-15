import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProject, fetchDetailProject } from "./actions";

const initialState = {
  listProject: [],
  isAddProject: false,
  detailProject: {},
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
    [fetchDetailProject.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.detailProject = payload;
    },
  },
});

const { reducer, actions } = auth;

export const { toggleModalAddProject } = actions;
export default reducer;
