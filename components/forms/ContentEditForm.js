// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import Select from "react-select";

import ImageIcon from "../svg/ImageIcon";
// import ModalSuccess from "../Modals/SuccessMessage";
// import ModalError from "../Modals/ErrorMessage";

function ContentEditForm(props) {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  //   const [price, setPrice] = useState(0);
  //   const [success, setSuccess] = useState("");
  //   const [failed, setFailed] = useState("");

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const addProductSubmit = (event) => {
  //     event.preventDefault();

  //     dispatch(addProductAxios(imageUrl, name, category, description, price, navigate, setFailed, setSuccess));
  //   };

  //   const handleChangeCategory = (event) => {
  //     setCategory(event.value);
  //     return category;
  //   };

  //   const imageHandlerPreview = (event) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setimageUrlPreview(reader.result);
  //         setImageUrl(event.target.files[0]);
  //       }
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   };

  return (
    <>
      <div className="text-sm bg-white ">
        <div className="mt-4">
          <label htmlFor="photo" className="mb-4">
            Carousel Photo :
          </label>
          {/* <img src={props.image} alt="Product Photo" height={130} width={165} /> */}
          <div className="ml-80 mb-2 h-[80px] w-[80px] mt-2">
            <ImageIcon height={80} width={80} className="ml-[100px] mb-4" />
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input id="name" className="text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2  text-gray-700 focus:outline-blue-500" placeholder="Input Carousel Name" />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="description">Description :</label>
          <textarea id="description" className="text-gray-700 px-3 border border-gray-300 rounded w-[500px] h-[100px] mt-2  text-gray-700 focus:outline-blue-500" placeholder="Type Carousel Description" />
        </div>

        <div>
          <div className="flex gap-8 mt-20 justify-center">
            <button className="border border-transparent bg-[#3CA6A6] text-sm w-[255px] h-12 rounded text-white font-bold" type="submit">
              Submit
            </button>
            <button className="border border-[#3CA6A6] text-sm w-[255px] h-12 rounded font-bold text-[#3CA6A6]" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* {success.length !== 0 && <ModalSuccess message={success} actionTitle="Add Product" />}
      {failed.length !== 0 && <ModalError message={failed} actionTitle="Add Product" />} */}
    </>
  );
}

export default ContentEditForm;
