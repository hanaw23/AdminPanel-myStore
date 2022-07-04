/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import SuccessMessage from "../../../modals/SuccessMessage";
import ErrorMessage from "../../../modals/ErrorMessage";

import { axiosEditSecondary } from "../../../../store/Action/Content/Secondary";

function SecondaryEditForm(props) {
  const [name, setName] = useState(props.nameContent);
  const [description, setDescription] = useState(props.descriptionContent);
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const idContent = props.idContent;
  const router = useRouter();
  const dispatch = useDispatch();

  const editContentSubmit = () => {
    dispatch(axiosEditSecondary(idContent, name, description, router, setSuccess, setFailed));
  };

  return (
    <>
      <div className="text-sm bg-white overflow-auto">
        <div className="mt-1 mb-4">
          <div className="ml-[235px]">
            <img src={props.imgContent} alt="Background Secondary" height={80} width={280} />
          </div>
        </div>

        <div>
          <div className="flex justify-center gap-20 mb-1 ">
            <img src={props.logoA} alt="Logo A" height={50} width={50} />
            <img src={props.logoB} alt="Logo B" height={50} width={50} />
            <img src={props.logoC} alt="Logo C" height={50} width={50} />
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className="text-indigo-700">
            Name
          </label>
          <input id="name" className="text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2 focus:outline-blue-500" placeholder="Input Secondary Name" onChange={(event) => setName(event.target.value)} value={name} />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="description" className="text-indigo-700">
            Description
          </label>
          <textarea
            id="description"
            className="text-gray-700 px-3 border border-gray-300 rounded w-[500px] h-[100px] mt-2 focus:outline-blue-500 pt-8"
            placeholder="Type Secondary Description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </div>

        <div>
          <div className="flex gap-8 mt-10 justify-center py-2">
            <button className="border border-transparent bg-indigo-700 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={editContentSubmit}>
              Submit
            </button>
            <button className="border border-indigo-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-400" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Edit Secondary" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Edit Secondary" />}
    </>
  );
}

export default SecondaryEditForm;
