import { useState } from "react";

import EditIcon from "../svg/EditIcon";
import ContentEditModal from "../modals/ContentEditModal";

const EditButton = (props) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(!openEditModal);
    window.location.reload(true);
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenEditModal}>
          <EditIcon />
        </button>
      </div>
      {openEditModal ? (
        <ContentEditModal
          onClose={handleCloseEditModal}
          content={props.content}
          idContent={props.idContent}
          nameContent={props.nameContent}
          descriptionContent={props.descriptionContent}
          imgContent={props.imgContent}
          videoContent={props.videoContent}
          logoA={props.logoA}
          logoB={props.logoB}
          logoC={props.logoC}
        />
      ) : null}
    </>
  );
};

export default EditButton;
