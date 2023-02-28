import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token"),
    loading: false,
    error: false,
    isLogged: Boolean(sessionStorage.getItem("token")),
    message: null,
  },
  reducers: {
    authStart: (state) => {
      return {
        ...state,
        loading: true,
        error: false,
        message: null,
      };
    },
    loginSuccess: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: false,
        isLogged: true,
        message: null,
      };
    },
    authFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };
    },
    // registerSuccess: (state, action) => {
    //   sessionStorage.setItem("user", JSON.stringify(action.payload));
    //   return {
    //     ...state,
    //     loading: false,
    //     error: false,
    //   };
    // },

    // updateData: (state, action) => {
    //   const nuevo = action.payload;
    //   const a = { ...state.user, ...nuevo };
    //   sessionStorage.setItem("user", JSON.stringify(a));
    //   return {
    //     ...state,
    //     user: { ...state.user, ...nuevo },
    //   };
    // },
    logout: (state) => {
      sessionStorage.clear();
      return {
        ...state,
        token: null,
        loading: false,
        error: false,
        isLogged: false,
        message: null,
      };
    },
  },
});

export default authSlice.reducer;

export const { authStart, loginSuccess, authFail, updateData, logout } =
  authSlice.actions;
