/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import ImageIcon from "../../../svg/ImageIcon";
import SuccessMessage from "../../../modals/SuccessMessage";
import ErrorMessage from "../../../modals/ErrorMessage";

import { axiosCreateCarousel } from "../../../../store/Action/Content/Carousel";

function ContentCreateForm(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlPreview, setimageUrlPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const createContentCarouselSubmit = async (event) => {
    event.preventDefault();
    dispatch(axiosCreateCarousel(name, imageUrl, description, router, setSuccess, setFailed));
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
          <label htmlFor="photo" className="mb-4 text-indigo-700">
            Upload Carousel Photo :
          </label>
          <div className="ml-80 mb-2 h-[100px] w-[100px] mt-2">
            {imageUrlPreview !== null ? <img src={imageUrlPreview} alt="preview product" id="frame" height={100} width={100} /> : <ImageIcon height={100} width={100} className="ml-[100px] mb-4" />}
          </div>
          <input type="file" accept="image/*" className="text-gray-700 mt-2" id="photo" onChange={imageHandlerPreview} />
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input id="name" className="text-indigo-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2  text-gray-700 focus:outline-blue-500" placeholder="Input Carousel Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            className="text-indigo-700 px-3 border border-gray-300 rounded w-[500px] h-[100px] mt-2  text-gray-700 focus:outline-blue-500 pt-8"
            placeholder="Type Carousel Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <div className="flex gap-8 mt-20 justify-center">
            <button className="border border-transparent bg-indigo-700 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={createContentCarouselSubmit}>
              Submit
            </button>
            <button className="border border-indigo-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-400" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Create Carousel" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Create Carousel" />}
    </>
  );
}

export default ContentCreateForm;
