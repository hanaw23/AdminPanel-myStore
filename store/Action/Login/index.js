import { login } from "../../Reducers/Login";
import { SetUserLocal } from "../../../utility";
import { WebUrl } from "../../../static";
import axios from "axios";

export const axiosLogin = (email, password, router, setError) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${WebUrl}login`, {
        email: email,
        password: password,
      });
      SetUserLocal(response.data.user, response.data.token);
      dispatch(login(response.data.user));
      router.push("/productManagement");
    } catch (error) {
      if (
        error.response.status === 400 ||
        error.response.status === 401 ||
        error.response.status === 404
      ) {
        setError(error.response.data.message);
      } else {
        setError("Internal server error !");
      }
    }
  };
};
