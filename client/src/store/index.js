import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import roleReducer from "./role";
import projectReducer from "./project";
import processReducer from "./process";

const rootReducer = {
  auth: authReducer,
  role: roleReducer,
  project: projectReducer,
  process: processReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
