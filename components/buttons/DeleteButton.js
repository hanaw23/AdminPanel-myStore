import { useState } from "react";
import ContentDeleteModal from "../modals/ContentDeleteModal";

import DeleteIcon from "../svg/DeleteIcon";

const DeleteButton = (props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
    window.location.reload(true);
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </button>
      </div>
      {openDeleteModal ? (
        <ContentDeleteModal
          onClose={handleCloseDeleteModal}
          deleteCommand="content"
          idContent={props.idContent}
          nameContent={props.nameContent}
        />
      ) : null}
    </>
  );
};

export default DeleteButton;
