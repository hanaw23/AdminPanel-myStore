/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import Select from "react-select";

import SuccessMessage from "../../modals/SuccessMessage";
import ErrorMessage from "../../modals/ErrorMessage";
import { Categories } from "../../../common/Categories";

import { editProductAxios } from "../../../store/Action/ProductManagement";

function ProductEditForm(props) {
  const [name, setName] = useState(props.name);
  const [category, setCategory] = useState(props.category);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const productId = props.productId;
  const router = useRouter();
  const dispatch = useDispatch();

  const editProductSubmit = () => {
    dispatch(editProductAxios(productId, name, category, description, price, router, setFailed, setSuccess));
  };

  const handleChangeCategory = (event) => {
    setCategory(event.value);
    return category;
  };

  return (
    <>
      <div className="text-sm bg-gray-100 text-gray-700 ">
        <div className="mt-4">
          <label htmlFor="photo" className="mb-2">
            Product Photo :
          </label>
          <div className="flex justify-center align-center ml-[150px] h-[160px] w-[175px] mt-2 mb-2">
            <img src={props.image} alt="Product Photo" height={130} width={165} />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="name">Product Name :</label>
          <input
            id="name"
            className="ext-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2  text-gray-700 focus:outline-blue-500"
            placeholder="Input Product Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="category">Category :</label>
          <Select id="selectbox" instanceId="selectbox" options={Categories} onChange={handleChangeCategory} defaultInputValue={category} className="w-[320px] h-10 mt-2  text-gray-700 focus:outline-blue-500" placeholder="Select Category" isClearable />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="description">Description :</label>
          <input
            id="description"
            className="ext-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2 focus:outline-blue-500 text-gray-700"
            placeholder="Input Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col ">
          <label htmlFor="price">Price (Rp.) :</label>
          <NumberFormat id="price" placeholder="Input Price" className=" text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2 focus:outline-blue-500" value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>

        <div>
          <div className="flex gap-8 mt-12 justify-center">
            <button className="border border-transparent bg-indigo-500 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" onClick={editProductSubmit} type="submit">
              Submit
            </button>
            <button className="border border-indigo-400 bg-white-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-700" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Edit Product" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Edit Product" />}
    </>
  );
}

export default ProductEditForm;
