import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";

//
const auth = createSlice({
  name: "auth",
  initialState: {
    auth: {
      login: null,
      register: null,
    },
  },
  reducers: {
    registerUserStarted: (state, action) => {
      state.auth = { login: state.auth.login, register: action.payload };
    },
    registerUserSuccess: (state, action) => {
      state.auth = { login: state.auth.login, register: action.payload };
    },
    registerUserFailed: (state, action) => {
      state.auth = { login: state.auth.login, register: action.payload };
    },
    loginUserStarted: (state, action) => {
      state.auth = { login: action.payload, register: state.auth.register };
    },
    loginUserSuccess: (state, action) => {
      state.auth = { login: action.payload, register: state.auth.register };
    },
    loginUserFailed: (state, action) => {
      state.auth = { login: action.payload, register: state.auth.register };
    },
  },
});

export const {
  registerUserStarted,
  registerUserFailed,
  registerUserSuccess,
  loginUserStarted,
  loginUserSuccess,
  loginUserFailed,
} = auth.actions;

export function registerUser(registrationData) {
  return async (dispatch) => {
    dispatch(registerUserStarted("Loading"));
    console.log("blaaa");
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/register",
        data: {
          data: registrationData,
        },
      });

      console.log(response);
      if (response.data.status === "Success") {
        message.success(response.data.message);
        dispatch(registerUserSuccess(null));
      } else {
        message.error(response.data.message);
        dispatch(registerUserFailed(null));
      }
    } catch (error) {
      //dispatch(loginUserFailed());
      message.error(error.message);
      dispatch(registerUserFailed(null));
      console.log("blaaaa");
    }
  };
}

export function loginUser(loginData) {
  return async (dispatch) => {
    dispatch(loginUserStarted("Loading"));
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/login",
        data: {
          data: loginData,
        },
      });

      console.log(response);
      if (response.data.status === "Success") {
        dispatch(loginUserSuccess({user : response.data.user}));
        message.success(response.data.message);
        localStorage.setItem("token", response.data.token);
      } else {
        message.error(response.data.message);
        dispatch(loginUserFailed(null));
      }

    } catch (error) {
      console.log(error.message);
      dispatch(loginUserFailed(null));
      message.error(error.message);
    }
  };
}

export default auth.reducer;
