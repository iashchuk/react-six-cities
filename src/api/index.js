import axios from "axios";

const FORBIDDEN_STATUS = 403;

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.status === FORBIDDEN_STATUS) {
      onLoginFail(); // setAuthRequired
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
