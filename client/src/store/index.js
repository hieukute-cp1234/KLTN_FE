import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import roleReducer from "./role";

const rootReducer = {
  auth: authReducer,
  role: roleReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
