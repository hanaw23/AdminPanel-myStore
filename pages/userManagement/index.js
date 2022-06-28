import Layout from "../../components/Layout";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";

export default function userManagement() {
  return (
    <Layout>
      <div className="z-0">
        <div className="flex justify-between h-14"></div>
        <div>
          <h1 className=" font-semibold text-[30px] text-gray-600 ml-20 -mt-[40px]">User Management</h1>
        </div>
        <div className=" -ml-[70px] mt-20 mx-center">
          <LoadingSkeleton />
        </div>
      </div>
    </Layout>
  );
}
