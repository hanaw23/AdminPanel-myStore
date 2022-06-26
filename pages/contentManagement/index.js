import ContentGrid from "../../components/grids/ContentGrid";
import Layout from "../../components/Layout";

import { HasToken } from "../../utility";

const contentManagement = () => {
  HasToken();
  return (
    <Layout>
      <div className="z-0">
        <div className="flex justify-between h-14"></div>
        <div>
          <h1 className=" font-semibold text-[30px] text-gray-600 ml-20 -mt-[40px]">Contents Management</h1>
        </div>
        <div className="ml-20 mt-20 mx-center">
          <ContentGrid />
        </div>
      </div>
    </Layout>
  );
};

export default contentManagement;
