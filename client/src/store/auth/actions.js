import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const handleLogin = createAsyncThunk(
  "auth/login",
  async (user, actions) => {
    try {
      const response = await appApi.post("/login", {
        email: user.email,
        password: user.password,
      });
      actions.success();
      return response;
    } catch (error) {
      actions.error();
    }
  }
);
