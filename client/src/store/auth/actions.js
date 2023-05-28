import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const handleLogin = createAsyncThunk("auth/login", async (user) => {
  try {
    const response = await appApi.post("/login", {
      email: user.email,
      password: user.password,
    });
    return response;
  } catch (error) {}
});
