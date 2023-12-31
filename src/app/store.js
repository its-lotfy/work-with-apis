import { configureStore } from "@reduxjs/toolkit";
import aparatSlice from "@/features/aparat/aparatSlice";
import userSlice from "@/features/user/userSlice";

export const store = configureStore({
  reducer: {
    aparat: aparatSlice,
    user: userSlice,
  },
});
