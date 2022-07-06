import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import style from "./Modal.module.css";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

import { deleteUserAxios } from "../../store/Action/UserManagement";

function UserDeleteModal(props) {
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const userId = props.userId;
  const username = props.username;

  const router = useRouter();
  const dispatch = useDispatch();

  const DeleteUserSubmit = () => {
    dispatch(deleteUserAxios(userId, username, router, setFailed, setSuccess));
  };

  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-auto flex  justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
        <OutsideClickHandler onOutsideClick={props.onClose}>
          <div className="bg-gray-400 flex align-center justify-center">
            <div>
              <div className="w-50 h-50 bg-white rounded-[8px] px-6 py-6">
                <div>
                  <div>Are you sure want to delete {props.username} ?</div>
                </div>
                <div className="flex gap-10 mt-8 justify-center">
                  <button className="border border-transparent bg-indigo-700 text-sm w-20 h-8 rounded text-white text-semibold" type="submit" onClick={DeleteUserSubmit}>
                    Delete
                  </button>
                  <button className="border border-indigo-700 bg-white-700 text-sm w-20 h-8 rounded text-indigo-400 text-semibold" onClick={props.onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle={`Delete ${props.username}`} />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle={`Delete ${props.username}`} />}
    </>,
    document.body
  );
}

export default UserDeleteModal;
