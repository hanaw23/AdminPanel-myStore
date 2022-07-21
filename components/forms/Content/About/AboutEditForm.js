import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';

import SuccessMessage from '../../../modals/SuccessMessage';
import ErrorMessage from '../../../modals/ErrorMessage';
import VideoIcon from '../../../svg/VideoIcon';

import { axiosEditAbout } from '../../../../store/Action/Content/About';

function AboutEditForm(props) {
  const [name, setName] = useState(props.nameContent);
  const [description, setDescription] = useState(props.descriptionContent);
  const [videoUrl, setVideoUrl] = useState(props.videoContent);
  const [success, setSuccess] = useState('');
  const [failed, setFailed] = useState('');
  const [empty, setEmpty] = useState('');

  const { idContent } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const editContentSubmit = () => {
    dispatch(axiosEditAbout(idContent, name, description, videoUrl, router, setSuccess, setFailed, setEmpty));
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setEmpty('');
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setEmpty('');
  };

  const handleChangeVideoUrl = (event) => {
    setVideoUrl(event.target.value);
    setEmpty('');
  };

  return (
    <>
      <div className=" mt-6 text-sm bg-white overflow-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className={` ${empty ? 'text-red-500' : 'text-indigo-700'}`}>
            Name
          </label>
          <input id="name" className={`text-gray-700 px-3 border ${empty ? 'border-red-500' : 'border-gray-300'} rounded w-[320px] h-10 mt-2 focus:outline-blue-500`} placeholder="Input About Name" onChange={handleChangeName} value={name} />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="description" className={` ${empty ? 'text-red-500' : 'text-indigo-700'}`}>
            Description
          </label>
          <textarea
            id="description"
            className={`px-3 border ${empty ? 'border-red-500' : 'border-gray-300'} rounded w-[320px] h-[60px] mt-2  text-gray-700 focus:outline-blue-500 pt-4`}
            onChange={handleChangeDescription}
            value={description}
            placeholder="Type About Description"
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="videoUrl" className={` ${empty ? 'text-red-500' : 'text-indigo-700'} mb-2`}>
            Video Url
          </label>
          <div className="mb-2 flex justify-center">
            {videoUrl === '' ? (
              <div className={`border ${empty ? 'border-red-500' : 'border-indigo-500'} rounded-[10px] w-[380px] flex justify-center`}>
                <VideoIcon height={150} width={80} className={`${empty ? 'fill-red-500' : 'fill-indigo-500'}`} />
              </div>
            ) : (
              <ReactPlayer playing url={videoUrl} width="50%" height="50%" />
            )}
          </div>
          <input
            id="videoUrl"
            type="text"
            className={`text-gray-700 px-3 border  rounded w-[320px] h-10 mt-2 focus:outline-blue-500 ${empty ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Input The Video URL"
            onChange={handleChangeVideoUrl}
            value={videoUrl}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div>
          <div className="flex gap-8 mt-14 justify-center py-2">
            <button className="border border-transparent bg-indigo-700 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={editContentSubmit}>
              Submit
            </button>
            <button className="border border-indigo-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-400" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Edit About" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Edit About" />}
    </>
  );
}

export default AboutEditForm;
