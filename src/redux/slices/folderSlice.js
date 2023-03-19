import { createSlice } from "@reduxjs/toolkit";

export const folderSlice = createSlice({
  name: "folder",
  initialState: {
    folders: null,
    loading: false,
    error: false,
    message: null,
  },
  reducers: {
    folderStart: (state) => {
      return {
        ...state,
        loading: false,
        error: false,
        message: null,
      };
    },
    folderSuccess: (state, action) => {
      return {
        ...state,
        folders: action.payload,
        loading: false,
        error: false,
        message: null,
      };
    },
    folderFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };
    },
  },
});

export default folderSlice.reducer;

export const { folderStart, folderSuccess, folderFail } = folderSlice.actions;
