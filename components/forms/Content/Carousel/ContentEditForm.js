/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { axiosEditCarousel } from '../../../../store/Action/Content/Carousel';
import SuccessMessage from '../../../modals/SuccessMessage';
import ErrorMessage from '../../../modals/ErrorMessage';

function ContentEditForm(props) {
  const [name, setName] = useState(props.nameContent);
  const [description, setDescription] = useState(props.descriptionContent);
  const [success, setSuccess] = useState('');
  const [failed, setFailed] = useState('');
  const [empty, setEmpty] = useState('');

  const { idContent } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const editContentSubmit = () => {
    dispatch(axiosEditCarousel(idContent, name, description, router, setSuccess, setFailed, setEmpty));
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setEmpty('');
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setEmpty('');
  };

  return (
    <>
      <div className="text-sm bg-white ">
        <div className="mt-4">
          <label htmlFor="photo" className="mb-4 text-indigo-700">
            Carousel Photo :
          </label>
          <div className="ml-80 mb-2 mt-2">
            <img src={props.imgContent} alt="Product Photo" height={200} width={200} />
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="name" className={` ${empty ? 'text-red-500' : 'text-indigo-700'}`}>
            Name
          </label>
          <input
            id="name"
            className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 ${empty ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Input Carousel Name"
            onChange={handleChangeName}
            value={name}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="description" className={` ${empty ? 'text-red-500' : 'text-indigo-700'}`}>
            Description
          </label>
          <textarea
            id="description"
            className={`text-gray-700 px-3 border rounded w-[500px] h-[100px] mt-2 focus:outline-blue-500 pt-8 ${empty ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Type Carousel Description"
            onChange={handleChangeDescription}
            value={description}
          />
          {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
        </div>

        <div>
          <div className="flex gap-8 mt-14 justify-center">
            <button className="border border-transparent bg-indigo-700 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={editContentSubmit}>
              Submit
            </button>
            <button className="border border-indigo-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-400" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Edit Carousel" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Edit Carousel" />}
    </>
  );
}

export default ContentEditForm;
