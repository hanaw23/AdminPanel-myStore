import axios from "axios";

import { secondaryEdit, secondaryDelete, secondaryCreate, secondaryGet } from "../../../Reducers/Content/Secondary";
import { WebUrl } from "../../../../static";

export const axiosGetSecondary = (setSecondary) => (dispatch) => {
  axios
    .get(`${WebUrl}secondaryContent`)
    .then((response) => {
      setSecondary(response.data);
      dispatch(secondaryGet(response.data.result));
    })
    .catch((error) => error);
};

export const axiosCreateSecondary = (name, imageUrl, logoA, logoB, logoC, description, router, setSuccess, setFailed, setEmpty) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("imageUrl", imageUrl);
    formData.append("logoA", logoA);
    formData.append("logoB", logoB);
    formData.append("logoC", logoC);
    formData.append("name", name);
    formData.append("description", description);

    const response = await axios.post(`${WebUrl}secondaryContent/create`, formData);

    router.push("/contentManagement");
    window.location.reload(true);
    setSuccess(`Content Name : ${name}`);
    dispatch(secondaryCreate(response.data.content));
  } catch (error) {
    if (error.response.status === 400) {
      setEmpty(error.response.data.message);
    } else {
      setFailed(error);
    }
  }
};

export const axiosEditSecondary = (idContent, name, description, router, setSuccess, setFailed, setEmpty) => async (dispatch) => {
  try {
    const response = await axios.post(`${WebUrl}secondaryContent/update/${idContent}`, {
      name,
      description,
    });

    if (response) {
      router.push("/contentManagement");
      window.location.reload(true);
      setSuccess(`Content Name : ${name}`);
      dispatch(secondaryEdit(response.data.result));
    }
  } catch (error) {
    if (error.response.status === 400) {
      setEmpty(error.response.data.message);
    } else {
      setFailed(error);
    }
  }
};

export const axiosDeleteSecondary = (idContent, name, router, setSuccess, setFailed) => async (dispatch) => {
  try {
    const response = await axios.post(`${WebUrl}secondaryContent/delete/${idContent}`);

    if (response) {
      router.push("/contentManagement");
      window.location.reload(true);
      setSuccess(`Content Name : ${name}`);
      dispatch(secondaryDelete(response.data.result));
    }
  } catch (error) {
    setFailed(error);
  }
};
