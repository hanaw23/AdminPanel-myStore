/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import ImageIcon from "../../../svg/ImageIcon";
import SuccessMessage from "../../../modals/SuccessMessage";
import ErrorMessage from "../../../modals/ErrorMessage";
import { axiosCreateSecondary } from "../../../../store/Action/Content/Secondary";
function SecondaryCreateForm(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlPreview, setimageUrlPreview] = useState(null);
  const [logoA, setLogoA] = useState(null);
  const [logoAPreview, setLogoAPreview] = useState(null);
  const [logoB, setLogoB] = useState(null);
  const [logoBPreview, setLogoBPreview] = useState(null);
  const [logoC, setLogoC] = useState(null);
  const [logoCPreview, setLogoCPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const createContentSecondarySubmit = async (event) => {
    event.preventDefault();
    dispatch(axiosCreateSecondary(name, imageUrl, logoA, logoB, logoC, description, router, setSuccess, setFailed));
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

  const logoAHandlerPreview = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogoAPreview(reader.result);
        setLogoA(event.target.files[0]);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const logoBHandlerPreview = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogoBPreview(reader.result);
        setLogoB(event.target.files[0]);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const logoCHandlerPreview = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogoCPreview(reader.result);
        setLogoC(event.target.files[0]);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <>
      <div className="text-sm bg-white ">
        <div className="mt-2">
          <label htmlFor="photo" className="mb-4 text-indigo-700">
            Upload Promo Photo :
          </label>
          <div className="ml-80 mb-2 h-[80px] w-[80px] mt-2">
            {imageUrlPreview !== null ? <img src={imageUrlPreview} alt="preview product" id="frame" height={100} width={100} /> : <ImageIcon height={80} width={80} className="ml-[100px] mb-4" />}
          </div>
          <input type="file" accept="image/*" className="text-gray-700 mt-2" id="photo" onChange={imageHandlerPreview} />
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="mt-4">
            <label htmlFor="logoA" className="mb-4 text-indigo-700">
              Upload Logo A :
            </label>
            <div className="mb-2 h-[50px] w-[50px] mt-2">{logoAPreview !== null ? <img src={logoAPreview} alt="preview product" id="frame" height={50} width={50} /> : <ImageIcon height={50} width={50} className="ml-[100px]" />}</div>
            <input type="file" accept="image/*" className="text-gray-700 mt-2" id="logoA" onChange={logoAHandlerPreview} />
          </div>
          <div className="mt-4">
            <label htmlFor="logoB" className="mb-4 text-indigo-700">
              Upload Logo B :
            </label>
            <div className=" mb-2 h-[50px] w-[50px] mt-2">{logoBPreview !== null ? <img src={logoBPreview} alt="preview product" id="frame" height={50} width={50} /> : <ImageIcon height={50} width={50} className="ml-[100px] " />}</div>
            <input type="file" accept="image/*" className="text-gray-700 mt-2" id="logoB" onChange={logoBHandlerPreview} />
          </div>
          <div className="mt-4">
            <label htmlFor="logoC" className="mb-4 text-indigo-700">
              Upload Logo C :
            </label>
            <div className="mb-2 h-[50px] w-[50px] mt-2">{logoCPreview !== null ? <img src={logoCPreview} alt="preview product" id="frame" height={50} width={50} /> : <ImageIcon height={50} width={50} className="ml-[100px] " />}</div>
            <input type="file" accept="image/*" className="text-gray-700 mt-2" id="logoC" onChange={logoCHandlerPreview} />
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input id="name" className="text-indigo-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2 focus:outline-blue-500" placeholder="Input Secondary Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            className="text-indigo-700 px-3 border border-gray-300 rounded w-[320px] h-[50px] mt-2 focus:outline-blue-500 pt-8"
            placeholder="Type Secondary Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className="flex gap-8 mt-6 justify-center">
            <button className="border border-transparent bg-indigo-700 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={createContentSecondarySubmit}>
              Submit
            </button>
            <button className="border border-indigo-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-400" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Create Secondary" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Create Secondary" />}
    </>
  );
}

export default SecondaryCreateForm;
