import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const handleLogin = createAsyncThunk(
  "auth/login",
  async ({ user, actions }) => {
    try {
      const response = await appApi.post("/login", {
        email: user.email,
        password: user.password,
      });
      actions.success(response);
      return response;
    } catch (error) {
      actions.error();
    }
  }
);

export const getMe = createAsyncThunk("auth/getMe", async () => {
  try {
    const response = await appApi.get("/me");
    return response;
  } catch (error) {}
});

export const fetchListUser = createAsyncThunk(
  "auth/getUser",
  async (params) => {
    try {
      const res = await appApi.get("/user", { params });
      return res;
    } catch (error) {}
  }
);

export const createUser = async ({ data, success }) => {
  try {
    await appApi.post("/register", data);
    success();
  } catch (_error) {}
};
