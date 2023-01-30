import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: JSON.parse(sessionStorage.getItem("token")),
    loading: false,
    error: false,
    isLogged: Boolean(JSON.parse(sessionStorage.getItem("token"))),
    // user: JSON.parse(sessionStorage.getItem("user")),
  },
  reducers: {
    loginSuccess: (state, action) => {
      sessionStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: false,
        isLogged: true,
      };
    },
    // registerSuccess: (state, action) => {
    //   const nuevo = action.payload;
    //   sessionStorage.setItem("user", JSON.stringify(nuevo));
    //   return {
    //     ...state,
    //     user: nuevo,
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
        // user: null,
      };
    },
  },
});

export default authSlice.reducer;

export const { loginSuccess, registerSuccess, updateData, logout } =
  authSlice.actions;
