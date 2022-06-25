import axios from "axios";

import { secondaryEdit, secondaryDelete, secondaryCreate, secondaryGet } from "../../../Reducers/Content/Secondary";
import { UrlWebAdmin } from "../../../../static";

export const axiosGetSecondary = (setSecondary) => {
  return (dispatch) => {
    axios
      .get(`${UrlWebAdmin()}secondaryContent`)
      .then((response) => {
        setSecondary(response.data);
        dispatch(secondaryGet(response.data.result));
      })
      .catch((error) => {
        return error;
      });
  };
};

// export const axiosCreateSecondary = (name, imageUrl, description, router, setSuccess) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       formData.append("imageUrl", imageUrl);
//       formData.append("name", name);
//       formData.append("description", description);

//       const response = await axios.post(`${UrlWebAdmin}secondaryContent/create`, formData);

//       router.push("/contentManagement");
//       window.location.reload(true);
//       setSuccess(`Content Name : ${name}`);
//       dispatch(SecondaryCreate(response.data.content));
//     } catch (error) {
//       console.log(error);
//       // setFailed(error);
//     }
//   };
// };

export const axiosEditSecondary = (idContent, name, description, router, setSuccess, setFailed) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}secondaryContent/update/${idContent}`, {
        name: name,
        description: description,
      });

      if (response) {
        router.push("/contentManagement");
        window.location.reload(true);
        setSuccess(`Content Name : ${name}`);
        dispatch(secondaryEdit(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const axiosDeleteSecondary = (idContent, name, router, setSuccess, setFailed) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}secondaryContent/delete/${idContent}`);
      console.log(response);

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
};
