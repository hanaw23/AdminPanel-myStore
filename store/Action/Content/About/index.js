import axios from "axios";

import { aboutEdit, aboutDelete, aboutCreate, aboutGet } from "../../../Reducers/Content/About";
import { UrlWebAdmin } from "../../../../static";
import { HasToken } from "../../../../utility";

export const axiosGetAbout = (setAbout) => {
  return (dispatch) => {
    axios
      .get(`${UrlWebAdmin()}aboutContent`)
      .then((response) => {
        setAbout(response.data);
        dispatch(aboutGet(response.data.result));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const axiosCreateAbout = (name, videoUrl, description, router, setSuccess, setFailed) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${UrlWebAdmin()}aboutContent/create`, {
        name: name,
        description: description,
        videoUrl: videoUrl,
      });

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        setSuccess(`Content Name : ${name}`);
        dispatch(aboutCreate(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const axiosEditAbout = (idContent, name, description, videoUrl, router, setSuccess, setFailed) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}aboutContent/update/${idContent}`, {
        name: name,
        description: description,
        videoUrl: videoUrl,
      });

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        setSuccess(`Content Name : ${name}`);
        dispatch(aboutEdit(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const axiosDeleteAbout = (idContent, name, router, setSuccess, setFailed) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}aboutContent/delete/${idContent}`);

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        setSuccess(`Content Name : ${name}`);
        dispatch(aboutDelete(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};
