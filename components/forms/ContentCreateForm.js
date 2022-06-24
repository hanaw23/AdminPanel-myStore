/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import ImageIcon from "../svg/ImageIcon";
import { UrlWebAdmin } from "../../statics/URL/urlDatabase";
// import ModalSuccess from "../Modals/SuccessMessage";
// import ModalError from "../Modals/ErrorMessage";

function ContentCreateForm(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlPreview, setimageUrlPreview] = useState(null);
  const [description, setDescription] = useState("");

  //   const [success, setSuccess] = useState("");
  //   const [failed, setFailed] = useState("");

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const addContentCarouselSubmit = async (event) => {
    event.preventDefault();
    try {
      HasToken();
      const formData = await new FormData();
      formData.append("imageUrl", imageUrl);
      formData.append("name", name);
      formData.append("description", description);

      const response = await axios.post(`${UrlWebAdmin}primaryContent/create`, formData);

      // navigate("/admin");
      window.location.reload(true);
      dispatch(addProduct(response.data.result));
      console.log(response);
      // setSuccess(`Product ID : ${response.data.result.product_id} and Product Name : ${response.data.result.name}`);
    } catch (error) {
      console.log(error);
      // setFailed(error);
    }
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

  return (
    <>
      <div className="text-sm bg-white ">
        <div className="mt-4">
          <label htmlFor="photo" className="mb-4">
            Upload Carousel Photo :
          </label>
          <div className="ml-80 mb-2 h-[80px] w-[80px] mt-2">
            {imageUrlPreview !== null ? <img src={imageUrlPreview} alt="preview product" id="frame" height={80} width={80} /> : <ImageIcon height={80} width={80} className="ml-[100px] mb-4" />}
          </div>
          <input type="file" accept="image/*" className="text-gray-700 mt-2" id="photo" onChange={imageHandlerPreview} />
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input id="name" className="text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2  text-gray-700 focus:outline-blue-500" placeholder="Input Carousel Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            className="text-gray-700 px-3 border border-gray-300 rounded w-[500px] h-[100px] mt-2  text-gray-700 focus:outline-blue-500"
            placeholder="Type Carousel Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <div className="flex gap-8 mt-20 justify-center">
            <button className="border border-transparent bg-[#3CA6A6] text-sm w-[255px] h-12 rounded text-white font-bold" type="submit" onSubmit={addContentCarouselSubmit}>
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

export default ContentCreateForm;
