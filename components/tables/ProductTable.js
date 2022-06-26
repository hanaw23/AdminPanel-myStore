/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DataTable from "react-data-table-component";

import ProductTableHeader from "../../common/TableHeader/ProductTableHeader";
import SearchFilter from "../filters/SearchFilter";

import { getProductAxios } from "../../store/Action/ProductManagement";

function ProductTable() {
  const [pending, setPending] = useState(true);
  const [products, setproducts] = useState([]);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAxios(setproducts));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleData = (rowData) => {
    if (query === "") {
      return rowData;
    } else {
      const filteredItems = rowData.filter((item) => JSON.stringify(item).toLowerCase().indexOf(query.toLowerCase()) !== -1);
      return filteredItems;
    }
  };

  return (
    <>
      <SearchFilter filterValue={query} filterChange={(e) => setQuery(e.target.value)} />
      <div className="block min-w-full shadow rounded-lg overflow-x-auto whitespace-nowrap -ml-4 py-3 w-80 mt-6 xl:text-base 2xl:text-base text-sm">
        <DataTable columns={ProductTableHeader.columns} data={handleData(products.product)} pagination progressPending={pending} highlightOnHovers defaultSortField="name" />
      </div>
    </>
  );
}

export default ProductTable;
