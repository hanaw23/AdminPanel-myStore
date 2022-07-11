import { useState } from "react";

import DetailIcon from "../svg/DetailIcon";
import UserDrawer from "../drawers/UserDrawer";

const DetailButton = (props) => {
  const [openDetail, setOpenDetail] = useState(false);

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <>
      <div>
        <button onClick={handleOpenDetail}>
          <DetailIcon />
        </button>
      </div>

      {openDetail && (
        <UserDrawer isOpen={openDetail} title="Detail User Information" onClose={handleCloseDetail} userId={props.userId} username={props.username} role={props.role} email={props.email} gender={props.gender} address={props.address} />
      )}
    </>
  );
};

export default DetailButton;
