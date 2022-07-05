import axios from "axios";

import {
  getProduct,
  deleteProduct,
  addProduct,
  editProduct,
} from "../../Reducers/ProductManagement";
import { WebUrl } from "../../../static";
import { HasToken } from "../../../utility";

export const getProductAxios = (setproducts) => {
  return (dispatch) => {
    axios
      .get(`${WebUrl}store`)
      .then((response) => {
        setproducts(response.data);
        dispatch(getProduct(response.data.result));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const addProductAxios = (
  imageUrl,
  name,
  category,
  description,
  price,
  router,
  setFailed,
  setSuccess
) => {
  return async (dispatch) => {
    try {
      HasToken();
      const formData = new FormData();
      formData.append("imageUrl", imageUrl);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);

      const response = await axios.post(`${WebUrl}createProduct`, formData);

      window.location.reload(true);
      dispatch(addProduct(response.data.result));
      setSuccess(
        `Product ID : ${response.data.result.product_id} and Product Name : ${response.data.result.name}`
      );
      router.push("/productManagement");
    } catch (error) {
      setFailed(error);
    }
  };
};

export const editProductAxios = (
  productId,
  name,
  category,
  description,
  price,
  router,
  setFailed,
  setSuccess
) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${WebUrl}editProduct`, {
        product_id: productId,
        name: name,
        category: category,
        description: description,
        price: price,
      });
      if (response) {
        window.location.reload(true);
        setSuccess(`Product ID : ${productId} and Product Name : ${name}`);
        dispatch(editProduct(response.data.result));
        router.push("/productManagement");
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const deleteProductAxios = (
  productId,
  productName,
  router,
  setFailed,
  setSuccess
) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${WebUrl}deleteProduct`, {
        product_id: productId,
      });
      if (response) {
        window.location.reload(true);
        setSuccess(`Product Name : ${productName}`);
        dispatch(deleteProduct(response.data.result));
        router.push("/productManagement");
      }
    } catch (error) {
      setFailed(error);
    }
  };
};
