import DeleteButton from "../../components/Buttons/DeleteButton";
import DetailButton from "../../components/buttons/DetailButton";
import style from "./User.module.css";

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
        <>
          {row.gender === "male" ? (
            <div className={`${style.border}  `} key={row.gender}>
              <p className={` ${style.male} `}>{row.gender}</p>
            </div>
          ) : (
            <div className={`${style.border} `} key={row.gender}>
              <p className={` ${style.female}`}>{row.gender}</p>
            </div>
          )}
        </>
      ),
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
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
