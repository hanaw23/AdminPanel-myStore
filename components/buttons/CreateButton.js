import { useState } from "react";

import ContentCreateModal from "../modals/ContentCreateModal";
import CreateIcon from "../svg/CreateIcon";

const CreateButton = (props) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(!openCreateModal);
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenCreateModal}>
          <CreateIcon />
        </button>
      </div>
      {openCreateModal ? <ContentCreateModal onClose={handleCloseCreateModal} content={props.content} /> : null}
    </>
  );
};

export default CreateButton;
