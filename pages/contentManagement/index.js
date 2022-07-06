/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

import ContentGrid from "../../components/grids/ContentGrid";
import Layout from "../../components/Layout";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";

import { ProtectedRoute } from "../../middleware/ProtectedRoute";
import { HasToken } from "../../utility";

function contentManagement() {
  const [loading, setLoading] = useState(true);

  HasToken();

  useEffect(() => {
    ProtectedRoute();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      <div className="z-0">
        <div className="flex justify-between h-14"></div>
        <div>
          <h1 className=" font-semibold text-[30px] text-gray-600 ml-20 -mt-[40px]">Content Management</h1>
        </div>
        <div className="ml-20 mt-20 mx-center">{loading ? <LoadingSpinner /> : <ContentGrid />}</div>
      </div>
    </Layout>
  );
}

export default contentManagement;
