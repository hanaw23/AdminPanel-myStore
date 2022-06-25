import ReactDOM from "react-dom";

import style from "./Modal.module.css";
import ContentCreateForm from "../forms/Content/Carousel/ContentCreateForm";
import SecondaryCreateForm from "../forms/Content/Secondary/SecondaryCreateForm";

const ContentCreateModal = (props) => {
  const switchModalCase = () => {
    switch (props.content) {
      case "Carousel":
        return <ContentCreateForm onClose={props.onClose} />;
      case "Secondary":
        return <SecondaryCreateForm onClose={props.onClose} />;

      default:
    }
  };
  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center overflow-auto`} style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="bg-gray-400 flex align-center justify-center">
          <div>
            <div className="w-[800px] h-[650px] bg-white rounded-[8px] px-6 py-6">
              <div>
                <div className="text-xl font-bold">Create {props.content}</div>
                <div className="mt-6">{switchModalCase()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ContentCreateModal;
