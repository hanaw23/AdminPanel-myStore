import { useState } from "react";

import EditIcon from "../svg/EditIcon";
import ContentEditModal from "../modals/ContentEditModal";
import ProductDrawer from "../drawers/ProductDrawer";

const EditButton = (props) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  const switchModalCase = () => {
    switch (props.title) {
      case "Content":
        return (
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
        );
      case "Product":
        return (
          <ProductDrawer isOpen={openEditModal} title="Edit" onClose={handleCloseEditModal} productId={props.productId} name={props.name} category={props.category} description={props.description} price={props.price} image={props.image} />
        );

      default:
    }
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenEditModal}>
          <EditIcon />
        </button>
      </div>
      {openEditModal ? switchModalCase() : null}
    </>
  );
};

export default EditButton;
