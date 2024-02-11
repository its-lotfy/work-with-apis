import { configureStore } from "@reduxjs/toolkit";
import aparatSlice from "@/features/aparat/aparatSlice";
import userSlice from "@/features/user/userSlice";
import { apiSlice } from "@/API/apiSlice";
export const store = configureStore({
  reducer: {
    aparat: aparatSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefultMiddleWare) =>
    getDefultMiddleWare().concat(apiSlice.middleware),
});
