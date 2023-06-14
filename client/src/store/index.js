import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import roleReducer from "./role";
import projectReducer from "./project";
import processReducer from "./process";
import taskReducer from "./task";

const rootReducer = {
  auth: authReducer,
  role: roleReducer,
  project: projectReducer,
  process: processReducer,
  task: taskReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
