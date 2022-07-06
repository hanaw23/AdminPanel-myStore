/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Layout from "../../components/Layout";
import UserTable from "../../components/tables/UserTable";

import { ProtectedRoute } from "../../middleware/ProtectedRoute";
import { HasToken } from "../../utility";

export default function userManagement() {
  HasToken();

  useEffect(() => {
    ProtectedRoute();
  }, []);

  return (
    <Layout>
      <div className="z-0">
        <div className="flex justify-between h-14"></div>
        <div>
          <h1 className=" font-semibold text-[30px] text-gray-600 ml-20 -mt-[40px]">User Management</h1>
        </div>
        <div className=" ml-[80px] mt-10 mx-center">
          <UserTable />
        </div>
      </div>
    </Layout>
  );
}
