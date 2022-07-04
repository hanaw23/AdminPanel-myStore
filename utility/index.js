import axios from "axios";

export const GetUser = () => {
  const user = localStorage.getItem("USER_DATA");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

export const GetToken = () => {
  return localStorage.getItem("USER_TOKEN") || null;
};

export const SetUserLocal = (user, token) => {
  return localStorage.setItem("USER_DATA", JSON.stringify(user)), localStorage.setItem("USER_TOKEN", token);
};

export const RemoveUserLocal = () => {
  return localStorage.removeItem("USER_DATA"), localStorage.removeItem("USER_TOKEN");
};

export const HasToken = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = GetToken();
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
