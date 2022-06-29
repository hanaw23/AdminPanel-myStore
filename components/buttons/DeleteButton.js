import { useState } from "react";

import ContentDeleteModal from "../modals/ContentDeleteModal";
import ProductDeleteModal from "../modals/ProductDeleteModal";
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

  const switchModalCase = () => {
    switch (props.title) {
      case "Content":
        return <ContentDeleteModal onClose={handleCloseDeleteModal} idContent={props.idContent} nameContent={props.nameContent} content={props.content} />;
      case "Product":
        return <ProductDeleteModal onClose={handleCloseDeleteModal} productId={props.productId} productName={props.productName} />;

      default:
    }
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </button>
      </div>
      {openDeleteModal ? switchModalCase() : null}
    </>
  );
};

export default DeleteButton;
