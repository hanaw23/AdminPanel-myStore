import ReactDOM from "react-dom";

import ContentEditForm from "../forms/Content/Carousel/ContentEditForm";
import SecondaryEditForm from "../forms/Content/Secondary/SecondaryEditForm";
import AboutEditForm from "../forms/Content/About/AboutEditForm";
import style from "./Modal.module.css";

const ContentEditModal = (props) => {
  const switchModalCase = () => {
    switch (props.content) {
      case "Carousel":
        return <ContentEditForm onClose={props.onClose} idContent={props.idContent} nameContent={props.nameContent} descriptionContent={props.descriptionContent} imgContent={props.imgContent} />;
      case "Secondary":
        return (
          <SecondaryEditForm
            onClose={props.onClose}
            idContent={props.idContent}
            nameContent={props.nameContent}
            descriptionContent={props.descriptionContent}
            imgContent={props.imgContent}
            logoA={props.logoA}
            logoB={props.logoB}
            logoC={props.logoC}
          />
        );
      case "About":
        return <AboutEditForm onClose={props.onClose} idContent={props.idContent} nameContent={props.nameContent} descriptionContent={props.descriptionContent} videoContent={props.videoContent} />;

      default:
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 flex justify-center items-center overflow-auto`} style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="bg-gray-400 flex align-center justify-center">
          <div>
            <div className="w-[800px] h-[685px] bg-white rounded-[8px] px-6 py-6">
              <div>
                <div className="text-xl font-bold text-gray-800">Edit {props.content}</div>
                <div className="mt-2">{switchModalCase()}</div>
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
