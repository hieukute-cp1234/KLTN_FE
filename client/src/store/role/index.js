import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddRole: false,
  listRole: [],
};

const auth = createSlice({
  name: "role",
  initialState,
  reducers: {
    toggleModalAddRole: (state, action) => {
      state.isAddRole = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = auth;

export const { toggleModalAddRole } = actions;
export default reducer;
