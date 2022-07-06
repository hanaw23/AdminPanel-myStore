import DeleteButton from "../../components/Buttons/DeleteButton";
import DetailButton from "../../components/buttons/DetailButton";

class UserTableHeader {
  static columns = [
    {
      name: "User Id",
      selector: (row) => row.user_id,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      cell: (row) => (
        <div className="border border-blue-500 rounded-[10px] w-[80px]" key={row.gender}>
          <h3 className="text-blue-500 text-xm px-1 py-1 text-center ">{row.gender}</h3>
        </div>
      ),
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      cell: (row) => (
        <div className="border border-[#0CB800] bg-transparent rounded-[10px] w-[70px]" key={row.role}>
          <h3 className="text-[#0CB800] text-xm px-1 py-1 text-center ">{row.role}</h3>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-6">
          <DetailButton userId={row.user_id} username={row.username} role={row.role} email={row.email} gender={row.gender} address={row.address} />
          <DeleteButton title="User" userId={row.user_id} username={row.username} />
        </div>
      ),
    },
  ];
}

export default UserTableHeader;
