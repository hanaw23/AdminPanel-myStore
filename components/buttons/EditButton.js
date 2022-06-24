import { useState } from "react";

import EditIcon from "../svg/EditIcon";
import ContentEditModal from "../modals/ContentEditModal";

const EditButton = () => {
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
      {openEditModal ? <ContentEditModal onClose={handleCloseEditModal} content="Carousel" /> : null}
    </>
  );
};

export default EditButton;
