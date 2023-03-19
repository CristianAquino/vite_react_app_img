import { createSlice } from "@reduxjs/toolkit";

export const chapterSlice = createSlice({
  name: "chapter",
  initialState: {
    chapters: null,
    loading: false,
    error: false,
    message: null,
  },
  reducers: {
    chapterStart: (state) => {
      return {
        ...state,
        loading: false,
        error: false,
        message: null,
      };
    },
    chapterSuccess: (state, action) => {
      return {
        ...state,
        chapters: action.payload,
        loading: false,
        error: false,
        message: null,
      };
    },
    chapterFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };
    },
  },
});

export default chapterSlice.reducer;

export const { chapterStart, chapterSuccess, chapterFail } =
  chapterSlice.actions;
