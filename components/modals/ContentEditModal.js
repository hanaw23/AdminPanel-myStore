import ReactDOM from "react-dom";

import ContentEditForm from "../forms/ContentEditForm";
import style from "./Modal.module.css";

const ContentEditModal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center overflow-auto`} style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="bg-gray-400 flex align-center justify-center">
          <div>
            <div className="w-[800px] h-[650px] bg-white rounded-[8px] px-6 py-6">
              <div>
                <div className="text-xl font-bold">Edit {props.content}</div>
                <div className="mt-6">
                  <ContentEditForm onClose={props.onClose} idContent={props.idContent} nameContent={props.nameContent} descriptionContent={props.descriptionContent} imgContent={props.imgContent} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ContentEditModal;
