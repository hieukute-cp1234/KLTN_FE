import { createSlice } from "@reduxjs/toolkit";
import { fetchRoles } from "./actions";

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
  extraReducers: {
    [fetchRoles.fulfilled]: (state, { payload }) => {
      state.listRole = payload?.map((role) => ({
        id: role.id,
        name: role.name,
        code: role.code,
      }));
    },
  },
});

const { reducer, actions } = auth;

export const { toggleModalAddRole } = actions;
export default reducer;
