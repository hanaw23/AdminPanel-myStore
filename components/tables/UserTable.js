/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";

import UserTableHeader from "../../common/TableHeader/UserTableHeader";
import LoadingSpinner from "../Loading/LoadingSpinner";
import SearchFilter from "../filters/SearchFilter";

import { getUserAxios } from "../../store/Action/UserManagement";

function UserTable() {
  const [pending, setPending] = useState(true);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAxios(setUsers));
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
    }
    const filteredItems = rowData.filter((item) => JSON.stringify(item).toLowerCase().indexOf(query.toLowerCase()) !== -1);
    return filteredItems;
  };

  return (
    <div className="lg:text-base text-sm">
      <SearchFilter filterValue={query} filterChange={(e) => setQuery(e.target.value)} />
      <div className="block min-w-full shadow rounded-lg overflow-x-auto whitespace-nowrap -ml-4 py-3 w-80 mt-6 xl:text-base 2xl:text-base text-sm">
        <DataTable columns={UserTableHeader.columns} data={handleData(users.user)} pagination progressPending={pending} progressComponent={<LoadingSpinner />} highlightOnHovers />
      </div>
    </div>
  );
}

export default UserTable;
