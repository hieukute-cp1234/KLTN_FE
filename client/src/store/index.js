import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import roleReducer from "./role";
import projectReducer from "./project";

const rootReducer = {
  auth: authReducer,
  role: roleReducer,
  project: projectReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
