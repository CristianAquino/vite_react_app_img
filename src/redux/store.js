import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import folderSlice from "./slices/folderSlice";
import chapterSlice from "./slices/chapterSlice";

export default configureStore({
  reducer: {
    authSlice,
    userSlice,
    folderSlice,
    chapterSlice,
  },
});
