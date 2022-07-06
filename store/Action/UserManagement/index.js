import axios from "axios";

import { deleteUser, getUser, editUser } from "../../Reducers/UserManagement";
import { UrlWebAdmin } from "../../../static";
import { HasToken } from "../../../utility";

export const getUserAxios = (setUsers) => {
  return (dispatch) => {
    axios
      .get(`${UrlWebAdmin()}userManagement`)
      .then((response) => {
        setUsers(response.data);
        dispatch(getUser(response.data.result));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const editUserAxios = (userId, username, userRole, router, setFailed, setSuccess) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${UrlWebAdmin()}userManagement/update/${userId}`, {
        role: userRole,
      });
      if (response) {
        window.location.reload(true);
        setSuccess(`User ID : ${userId} and Username : ${username}`);
        dispatch(editUser(response.data.result));
        router.push("/userManagement");
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const deleteUserAxios = (userId, username, router, setFailed, setSuccess) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${UrlWebAdmin()}userManagement/delete/${userId}`);
      if (response) {
        window.location.reload(true);
        setSuccess(`Username : ${username}`);
        dispatch(deleteUser(response.data.result));
        router.push("/userManagement");
      }
    } catch (error) {
      setFailed(error);
    }
  };
};
