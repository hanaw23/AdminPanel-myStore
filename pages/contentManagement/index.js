import { useState } from "react";

import ContentGrid from "../../components/grids/ContentGrid";

export default function contentManagement() {
  return (
    <div className="z-0">
      <div className="flex justify-between h-14">
        {/* <img alt="" src={Logo} width="98" height="50" className="d-inline-block align-top mt-4 ml-16 " />
        <LogoutButton logOut={handleLogOut} /> */}
      </div>
      <div className="ml-16">
        <h1 className=" font-bold text-[30px] text-center text-gray-800 mt-2">Contents Management</h1>
      </div>
      <div className="ml-40 mt-20 mx-center">
        <ContentGrid />
      </div>

      {/* <Drawer isOpen={openAdd} title="Add Product" onClose={handleCloseAdd} />
      <Drawer isOpen={openEdit} title="Edit Product" onClose={handleCloseEdit} /> */}
    </div>
  );
}
