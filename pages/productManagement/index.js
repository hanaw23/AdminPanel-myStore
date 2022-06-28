/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import ProductTable from "../../components/tables/ProductTable";

import AddButton from "../../components/buttons/AddButton";
import ProductDrawer from "../../components/drawers/ProductDrawer";

import { ProtectedRoute } from "../../middleware/ProtectedRoute";

export default function productManagement() {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(!openAdd);
    window.location.reload(true);
  };

  ProtectedRoute();
  
  return (
    <Layout>
      <div className="z-0">
        <div className="flex justify-between h-14"></div>
        <div>
          <h1 className=" font-semibold text-[30px] text-gray-600 ml-20 -mt-[40px]">Product Management</h1>
        </div>
        <div className=" ml-[80px] mt-10 mx-center">
          <div className="flex justify-end mr-16">
            <AddButton titleButton="Add Product" setOpen={handleOpenAdd} />
          </div>
          <ProductTable />
        </div>
      </div>
      <ProductDrawer isOpen={openAdd} title="Add" onClose={handleCloseAdd} />
    </Layout>
  );
}
