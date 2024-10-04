import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("USER")
    ? JSON.parse(localStorage.getItem("USER")!)
    : null,
};

export type SigninDTO = {
  email: string;
  password: string;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("USER", JSON.stringify(action.payload));
      // return action.payload;
    },
    clearCredentials: (state) => {
      state.user = null;
      localStorage.removeItem("USER");
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
