import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("user")),
    loading: false,
    error: false,
    message: null,
  },
  reducers: {
    userStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
        message: null,
      };
    },
    userSuccess: (state, action) => {
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
        isLogged: true,
        message: null,
      };
    },
    userFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };
    },
    userLogout: (state) => {
      return {
        ...state,
        user: null,
        loading: false,
        error: false,
        message: null,
      };
    },
  },
});

export default userSlice.reducer;

export const { userStart, userSuccess, userFail } = userSlice.actions;
