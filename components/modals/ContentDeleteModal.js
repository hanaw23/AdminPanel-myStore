import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import style from "./Modal.module.css";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

import { axiosDeleteCarousel } from "../../store/Action/Content/Carousel";
import { axiosDeleteSecondary } from "../../store/Action/Content/Secondary";
import { axiosDeleteAbout } from "../../store/Action/Content/About";

function ContentDeleteModal(props) {
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const idContent = props.idContent;
  const name = props.nameContent;

  const router = useRouter();
  const dispatch = useDispatch();

  const DeleteCarouselSubmit = () => {
    dispatch(axiosDeleteCarousel(idContent, name, router, setSuccess, setFailed));
  };

  const DeleteSecondarySubmit = () => {
    dispatch(axiosDeleteSecondary(idContent, name, router, setSuccess, setFailed));
  };

  const DeleteAboutSubmit = () => {
    dispatch(axiosDeleteAbout(idContent, name, router, setSuccess, setFailed));
  };

  const switchModalCase = () => {
    switch (props.content) {
      case "Carousel":
        return (
          <button className="border border-transparent bg-indigo-700 text-sm w-20 h-8 rounded text-white text-semibold" type="submit" onClick={DeleteCarouselSubmit}>
            Delete
          </button>
        );
      case "Secondary":
        return (
          <button className="border border-transparent bg-indigo-700 text-sm w-20 h-8 rounded text-white text-semibold" type="submit" onClick={DeleteSecondarySubmit}>
            Delete
          </button>
        );
      case "About":
        return (
          <button className="border border-transparent bg-indigo-700 text-sm w-20 h-8 rounded text-white text-semibold" type="submit" onClick={DeleteAboutSubmit}>
            Delete
          </button>
        );

      default:
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-auto flex  justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
        <OutsideClickHandler onOutsideClick={props.onClose}>
          <div className="bg-gray-400 flex align-center justify-center">
            <div>
              <div className="w-50 h-50 bg-white rounded-[8px] px-6 py-6">
                <div>
                  <div>Are you sure want to delete {props.nameContent} ?</div>
                </div>
                <div className="flex gap-10 mt-8 justify-center">
                  {switchModalCase()}
                  <button className="border border-indigo-700 bg-white-700 text-sm w-20 h-8 rounded text-indigo-400 text-semibold" onClick={props.onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle={`Delete ${props.content}`} />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle={`Delete ${props.content}`} />}
    </>,
    document.body
  );
}

export default ContentDeleteModal;
