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
  const [empty, setEmpty] = useState("");
  const [alertImageSize, setAlertImageSize] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const createContentCarouselSubmit = async (event) => {
    event.preventDefault();
    dispatch(axiosCreateCarousel(name, imageUrl, description, router, setSuccess, setFailed, setEmpty));
  };

  const imageHandlerPreview = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    const fileSize = file.size;
    const fileSizeRound = Math.round(fileSize / 1024);

    reader.onload = () => {
      if (fileSizeRound > 2000) {
        setAlertImageSize("File too Big, please select a file less than 2 MB");
      } else {
        if (reader.readyState === 2) {
          setimageUrlPreview(reader.result);
          setImageUrl(event.target.files[0]);
          setAlertImageSize("");
        }
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setEmpty("");
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setEmpty("");
  };

  return (
    <>
      <div className="text-sm bg-white ">
        <div className="mt-4">
          <label htmlFor="photo" className={` ${alertImageSize ? "text-red-500" : "text-indigo-700"}`}>
            Upload Carousel Photo
          </label>
          <div className="ml-80 mb-2 h-[100px] w-[100px] mt-2">
            {imageUrlPreview !== null && alertImageSize.length === 0 ? (
              <img src={imageUrlPreview} alt="preview product" id="frame" height={100} width={100} />
            ) : (
              <ImageIcon height={100} width={100} className={`mb-4 ${alertImageSize ? "fill-red-500" : "fill-indigo-500"} `} />
            )}
          </div>
          <input type="file" accept=".jpeg, .jpg, .png" className="text-gray-700 mt-2" id="photo" onChange={imageHandlerPreview} />
          {alertImageSize ? <p className="text-rose-500 text-xs mt-1">{alertImageSize}</p> : <p className="text-rose-500 text-xs mt-1">Upload .jpeg, .jpg, or .png format only</p>}
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="name" className={` ${empty ? "text-red-500" : "text-indigo-700"}`}>
            Name
          </label>
          <input
            id="name"
            className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 ${empty ? "border-red-500" : "border-gray-300"}`}
            placeholder="Input Carousel Name"
            value={name}
            onChange={handleChangeName}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="description" className={` ${empty ? "text-red-500" : "text-indigo-700"}`}>
            Description
          </label>
          <textarea
            id="description"
            className={`text-gray-700 px-3 border rounded w-[500px] h-[100px] mt-2 focus:outline-blue-500 pt-8 ${empty ? "border-red-500" : "border-gray-300"}`}
            placeholder="Type Carousel Description"
            value={description}
            onChange={handleChangeDescription}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div>
          <div className="flex gap-8 mt-14 justify-center">
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
