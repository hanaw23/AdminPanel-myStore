import axios from 'axios';

import {
  carouselEdit, carouselDelete, carouselCreate, carouselGet,
} from '../../../Reducers/Content/Carousel';
import { WebUrl } from '../../../../static';

import { HasToken } from '../../../../utility';

export const axiosGetCarousel = (setCarousel) => (dispatch) => {
  axios
    .get(`${WebUrl}primaryContent`)
    .then((response) => {
      setCarousel(response.data);
      dispatch(carouselGet(response.data.result));
    })
    .catch((error) => error);
};

export const axiosCreateCarousel = (name, imageUrl, description, router, setSuccess, setFailed, setEmpty) => async (dispatch) => {
  try {
    HasToken();
    const formData = new FormData();
    formData.append('imageUrl', imageUrl);
    formData.append('name', name);
    formData.append('description', description);

    const response = await axios.post(`${WebUrl}primaryContent/create`, formData);

    router.push('/contentManagement');
    window.location.reload(true);
    setSuccess(`Content Name : ${name}`);
    dispatch(carouselCreate(response.data.content));
  } catch (error) {
    if (error.response.status === 400) {
      setEmpty(error.response.data.message);
    } else {
      setFailed(error);
    }
  }
};

export const axiosEditCarousel = (idContent, name, description, router, setSuccess, setFailed, setEmpty) => async (dispatch) => {
  try {
    const response = await axios.post(`${WebUrl}primaryContent/update/${idContent}`, {
      name,
      description,
    });

    if (response) {
      router.push('/contentManagement');
      window.location.reload(true);
      setSuccess(`Content Name : ${name}`);
      dispatch(carouselEdit(response.data.result));
    }
  } catch (error) {
    if (error.response.status === 400) {
      setEmpty(error.response.data.message);
    } else {
      setFailed(error);
    }
  }
};

export const axiosDeleteCarousel = (idContent, name, router, setSuccess, setFailed) => async (dispatch) => {
  try {
    const response = await axios.post(`${WebUrl}primaryContent/delete/${idContent}`);

    if (response) {
      router.push('/contentManagement');
      window.location.reload(true);
      setSuccess(`Content Name : ${name}`);
      dispatch(carouselDelete(response.data.result));
    }
  } catch (error) {
    setFailed(error);
  }
};
