import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthorized: false,
    authLoading: true,
    authToken: "",
  },
  reducers: {
    add: (state) => {
      state;
    },
    setAuthTokens: (state, actions) => {
      state.authToken = localStorage.getItem("myapp_tokens") || "";
      if (state.authToken) {
        state.isAuthorized = true;
      }
      state.authLoading = false;
    },
    clearAuthTokens: (state) => {
      state.authToken = "";
      state.isAuthorized = false;
    },
    verifyToken: (state) => {
      state.isAuthorized = localStorage.getItem("myapp_tokens") ? true : false;
    },
    setLoading: (state, actions) => {
      state.authLoading = actions.payload;
    },
  },
});

export const { add, setAuthTokens, clearAuthTokens, verifyToken, setLoading } =
  userSlice.actions;
export default userSlice.reducer;
