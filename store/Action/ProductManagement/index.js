import axios from "axios";

import { getProduct, deleteProduct, addProduct, editProduct } from "../../Reducers/ProductManagement";
import { UrlWebAdmin } from "../../../static";
import { HasToken } from "../../../utility";

export const getProductAxios = (setproducts) => {
  return (dispatch) => {
    axios
      .get(`${UrlWebAdmin()}store`)
      .then((response) => {
        setproducts(response.data);
        dispatch(getProduct(response.data.result));
      })
      .catch((error) => {
        return error;
      });
  };
};

export const addProductAxios = (imageUrl, name, category, description, price, router, setFailed, setSuccess) => {
  return async (dispatch) => {
    try {
      HasToken();
      const formData = new FormData();
      formData.append("imageUrl", imageUrl);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);

      const response = await axios.post(`${UrlWebAdmin()}createProduct`, formData);

      router.push("/productManagement");
      window.location.reload(true);
      dispatch(addProduct(response.data.result));
      setSuccess(`Product ID : ${response.data.result.product_id} and Product Name : ${response.data.result.name}`);
    } catch (error) {
      setFailed(error);
    }
  };
};

export const editProductAxios = (productId, name, category, description, price, router, setFailed, setSuccess) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${UrlWebAdmin()}editProduct`, {
        product_id: productId,
        name: name,
        category: category,
        description: description,
        price: price,
      });
      if (response) {
        router.push("/productManagement");
        window.location.reload(true);
        setSuccess(`Product ID : ${productId} and Product Name : ${name}`);
        dispatch(editProduct(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};

export const deleteProductAxios = (productId, productName, router, setFailed, setSuccess) => {
  return async (dispatch) => {
    try {
      HasToken();
      const response = await axios.post(`${UrlWebAdmin()}deleteProduct`, {
        product_id: productId,
      });
      if (response) {
        router.push("/productManagement");
        window.location.reload(true);
        setSuccess(`Product Name : ${productName}`);
        dispatch(deleteProduct(response.data.result));
      }
    } catch (error) {
      setFailed(error);
    }
  };
};
