/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import Select from "react-select";

import ImageIcon from "../../svg/ImageIcon";
import SuccessMessage from "../../modals/SuccessMessage";
import ErrorMessage from "../../modals/ErrorMessage";
import { Categories } from "../../../common/Options";

import { addProductAxios } from "../../../store/Action/ProductManagement";

function ProductAddForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlPreview, setimageUrlPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");
  const [empty, setEmpty] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const addProductSubmit = async (event) => {
    event.preventDefault();
    dispatch(addProductAxios(imageUrl, name, category, description, price, router, setFailed, setSuccess, setEmpty));
  };

  const imageHandlerPreview = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setimageUrlPreview(reader.result);
        setImageUrl(event.target.files[0]);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.value);
    setEmpty("");
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setEmpty("");
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setEmpty("");
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    setEmpty("");
  };

  const colourStyles = {
    control: (base) => ({
      ...base,
      border: empty ? "1px solid red" : null,
    }),
  };

  return (
    <>
      <div className="text-sm bg-gray-100 text-gray-700">
        <div className="mt-4">
          <label htmlFor="photo" className="mb-2 text-indigo-700">
            Upload Product Photo
          </label>
          <div className="flex justify-center align-center ml-[150px] h-[160px] w-[175px] mt-2">
            {imageUrlPreview !== null ? <img src={imageUrlPreview} alt="preview product" id="frame" height={130} width={165} /> : <ImageIcon height={100} width={130} className="fill-indigo-500" />}
          </div>
          <input type="file" accept=".jpeg, .jpg" className="text-gray-700" onChange={imageHandlerPreview} id="photo" />
          <p className="text-rose-500 text-xs mt-1">Upload .jpeg or .jpg format only</p>
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className={` ${empty ? "text-red-500" : "text-indigo-700"}`}>
            Product Name
          </label>
          <input
            id="name"
            className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 ${empty ? "border-red-500" : "border-gray-300"}`}
            placeholder="Input Product Name"
            value={name}
            onChange={handleChangeName}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="category" className={` ${empty ? "text-red-500" : "text-indigo-700"}`}>
            Category
          </label>
          <Select
            id="selectbox"
            instanceId="selectbox"
            options={Categories}
            onChange={handleChangeCategory}
            className={`text-gray-700 w-[320px] h-10 mt-2 focus:outline-blue-500 `}
            placeholder="Select Category"
            isClearable
            styles={colourStyles}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="description" className={` ${empty ? "text-red-500" : "text-indigo-700"}`}>
            Description
          </label>
          <input
            id="description"
            className={`px-3 border ${empty ? "border-red-500" : "border-gray-300"} rounded w-[320px] h-10 mt-2 focus:outline-blue-500 text-gray-700`}
            placeholder="Input Description"
            value={description}
            onChange={handleChangeDescription}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-4 flex flex-col ">
          <label htmlFor="price" className={` ${empty ? "text-red-500" : "text-indigo-700"}`}>
            Price (Rp.)
          </label>
          <NumberFormat
            id="price"
            placeholder="Input Price"
            className={` px-3 border text-gray-700 ${empty ? "border-red-500" : "border-gray-300"} rounded w-[320px] h-10 mt-2 focus:outline-blue-500`}
            value={price}
            onChange={handleChangePrice}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div>
          <div className="flex gap-8 mt-4 justify-center">
            <button className="border border-transparent bg-indigo-500 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" onClick={addProductSubmit} type="submit">
              Submit
            </button>
            <button className="border border-indigo-400 bg-white-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-700" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Add Product" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Add Product" />}
    </>
  );
}

export default ProductAddForm;
