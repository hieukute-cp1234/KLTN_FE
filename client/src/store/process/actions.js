import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const getRandomId = async () => {
  try {
    const res = await appApi.get("random-id");
    return res;
  } catch (error) {}
};
