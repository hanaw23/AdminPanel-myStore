import axios from "axios";

import { carouselEdit, carouselDelete } from "../../../Reducers/Content/Carousel";
import { UrlWebAdmin } from "../../../../static";

export const axiosEditCarousel = (idContent, name, description, router, setSuccess, setFailed) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}primaryContent/update/${idContent}`, {
        name: name,
        description: description,
      });

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

export const axiosDeleteCarousel = (idContent, router) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}primaryContent/delete/${idContent}`);

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        alert("sukses delete");
        dispatch(carouselDelete(response.data.result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
