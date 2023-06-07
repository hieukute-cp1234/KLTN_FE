import { createSlice } from "@reduxjs/toolkit";
import { fetchListProcess, fetchProcessById } from "./actions";

const initialState = {
  listProcess: [],
  detailProcess: {},
};

const auth = createSlice({
  name: "process",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListProcess.fulfilled]: (state, { payload }) => {
      state.listProcess = payload;
    },
    [fetchProcessById.fulfilled]: (state, { payload }) => {
      state.detailProcess = payload;
    },
  },
});

const { reducer, actions } = auth;

export const {} = actions;
export default reducer;
