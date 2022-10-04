import axios, { AxiosRequestConfig } from "axios";
import { createUserParams, User, userLoginParams } from "./types";

const { REACT_APP_API_URI } = process.env;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterAsync = async (data: createUserParams) => {
  axios.post(`${REACT_APP_API_URI}/auth/register`, data, config);
};

export const postLoginAsync = async (data: userLoginParams) => {
  axios.post(`${REACT_APP_API_URI}/auth/login`, data, config);
};

export const getAuthUser = () =>
  axios.get<User>(`${REACT_APP_API_URI}/auth/status`, config);
