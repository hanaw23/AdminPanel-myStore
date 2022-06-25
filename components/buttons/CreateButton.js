import { useState } from "react";

import ContentCreateModal from "../modals/ContentCreateModal";
import CreateIcon from "../svg/CreateIcon";

const CreateButton = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(!openCreateModal);
    window.location.reload(true);
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenCreateModal}>
          <CreateIcon />
        </button>
      </div>
      {openCreateModal ? (
        <ContentCreateModal
          onClose={handleCloseCreateModal}
          content="Carousel"
        />
      ) : null}
    </>
  );
};

export default CreateButton;
