/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player";

import SuccessMessage from "../../../modals/SuccessMessage";
import ErrorMessage from "../../../modals/ErrorMessage";
import VideoIcon from "../../../svg/VideoIcon";

import { axiosCreateAbout } from "../../../../store/Action/Content/About";

function AboutCreateForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const createContentSubmit = () => {
    dispatch(axiosCreateAbout(name, videoUrl, description, router, setSuccess, setFailed));
  };

  return (
    <>
      <div className="text-sm bg-white overflow-auto">
        <div className=" flex flex-col">
          <label htmlFor="name" className="text-indigo-700">
            Name
          </label>
          <input id="name" className="text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2 focus:outline-blue-500" placeholder="Input About Name" onChange={(event) => setName(event.target.value)} />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="description" className="text-indigo-700">
            Description
          </label>
          <textarea
            id="description"
            className="px-3 border border-gray-300 rounded w-[320px] h-[60px] mt-2  text-gray-700 focus:outline-blue-500 pt-4"
            placeholder="Type About Description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="videoUrl" className="text-indigo-700 mb-2">
            Video Url
          </label>
          <div className="mb-2 flex justify-center">
            {videoUrl === "" ? (
              <div className="border border-indigo-500 rounded-[10px] w-[380px] flex justify-center">
                <VideoIcon height={150} width={80} />
              </div>
            ) : (
              <ReactPlayer playing url={videoUrl} width="50%" height="50%" />
            )}
          </div>

          <input id="videoUrl" type="text" className="text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2 focus:outline-blue-500" placeholder="Input The Video URL" onChange={(event) => setVideoUrl(event.target.value)} />
        </div>

        <div>
          <div className="flex gap-8 mt-8 justify-center py-2">
            <button className="border border-transparent bg-indigo-700 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={createContentSubmit}>
              Submit
            </button>
            <button className="border border-indigo-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-400" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Create About" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Create About" />}
    </>
  );
}

export default AboutCreateForm;
