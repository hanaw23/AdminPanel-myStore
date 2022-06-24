import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";

import style from "./Modal.module.css";

const ContentDeleteModal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex  justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
        <OutsideClickHandler onOutsideClick={props.onClose}>
          <div className="bg-gray-400 flex align-center justify-center">
            <div>
              <div className="w-50 h-50 bg-white rounded-[8px] px-6 py-6">
                <div>
                  <div>Are you sure want to delete this {props.deleteCommand}?</div>
                </div>
                <div className="flex gap-10 mt-8 justify-center">
                  <button className="border border-transparent bg-[#3CA6A6] text-sm w-20 h-8 rounded text-white text-semibold" type="submit">
                    Delete
                  </button>
                  <button className="border border-[#3CA6A6] bg-white-700 text-sm w-20 h-8 rounded text-gray-800 text-semibold" onClick={props.onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </>,
    document.body
  );
};

export default ContentDeleteModal;
