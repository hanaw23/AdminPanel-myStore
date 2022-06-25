import axios from "axios";

import {
  carouselEdit,
  carouselDelete,
  carouselCreate,
  carouselGet,
} from "../../../Reducers/Content/Carousel";
import { UrlWebAdmin } from "../../../../static";

import { HasToken } from "../../../../utility";

export const axiosGetCarousel = (setCarousel) => {
  return (dispatch) => {
    axios
      .get(`${UrlWebAdmin()}primaryContent`)
      .then((response) => {
        setCarousel(response.data);
        dispatch(carouselGet(response.data.result));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const axiosCreateCarousel = (
  name,
  imageUrl,
  description,
  router,
  setSuccess,
  setFailed
) => {
  return async (dispatch) => {
    try {
      HasToken();
      const formData = new FormData();
      formData.append("imageUrl", imageUrl);
      formData.append("name", name);
      formData.append("description", description);
      const response = await axios.post(
        `${UrlWebAdmin()}primaryContent/create`,
        formData
      );
      router.push("/contentManagement");
      window.location.reload(true);
      setSuccess(`Content Name : ${name}`);
      dispatch(carouselCreate(response.data.content));
    } catch (error) {
      setFailed(error);
    }
  };
};

export const axiosEditCarousel = (
  idContent,
  name,
  description,
  router,
  setSuccess,
  setFailed
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${UrlWebAdmin()}primaryContent/update/${idContent}`,
        {
          name: name,
          description: description,
        }
      );

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        setSuccess(`Content Name : ${name}`);
        dispatch(carouselEdit(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const axiosDeleteCarousel = (
  idContent,
  name,
  router,
  setSuccess,
  setFailed
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${UrlWebAdmin()}primaryContent/delete/${idContent}`
      );
      console.log(response);

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        setSuccess(`Content Name : ${name}`);
        dispatch(carouselDelete(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};
