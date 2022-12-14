import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import SuccessMessage from '../../modals/SuccessMessage';
import ErrorMessage from '../../modals/ErrorMessage';
import { Roles } from '../../../common/Options';

import { editUserAxios } from '../../../store/Action/UserManagement/index';

function UserEditForm(props) {
  const [userRole, setUserRole] = useState('');
  const [success, setSuccess] = useState('');
  const [failed, setFailed] = useState('');
  const [empty, setEmpty] = useState('');

  const { userId } = props;
  const { username } = props;
  const { gender } = props;

  const router = useRouter();
  const dispatch = useDispatch();

  const editUserSubmit = () => {
    dispatch(editUserAxios(userId, username, userRole, router, setFailed, setSuccess, setEmpty));
  };

  const handleChangeRole = (event) => {
    setUserRole(event.value);
    setEmpty('');
  };

  const colourStyles = {
    control: (base) => ({
      ...base,
      border: empty ? '1px solid red' : null,
    }),
  };

  return (
    <>
      <div className="text-sm bg-gray-100 text-gray-700 ">
        <div className="mt-6">
          <div>
            <h2 className="font-bold text-m mb-3">Account User</h2>
            <div className="flex justify-between mr-16">
              <div>
                <h2 className="text-m mb-1">User Id :</h2>
                <h3>{props.userId}</h3>
              </div>
              <div>
                <h2 className="text-m mb-1">Username User :</h2>
                <h3>{props.username}</h3>
              </div>
            </div>
            <div>
              <h2 className="text-m mb-1 mt-4">Email User :</h2>
              <h3>{props.email}</h3>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-m mb-2">Profile User</h2>
          <div>
            <h2 className="text-m mb-3">Gender :</h2>
            <div className="flex justify-between mr-[105px]">
              <div className="flex">
                {gender === 'male' ? (
                  <div className="border border-[#008DEB] bg-[#008DEB] rounded-[10px] w-[80px] h-[24px]">
                    <h3 className="text-white text-sm px-2 text-center ">Male</h3>
                  </div>
                ) : (
                  <div className="border border-rose-600 bg-rose-600  rounded-[10px] w-[80px] h-[24px]">
                    <h3 className="text-white text-sm px-2 text-center ">Female</h3>
                  </div>
                )}
              </div>
              <div className="-mt-[30px]">
                <h2 className="text-m mb-1">Address :</h2>
                <h3>{props.address}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="font-bold text-m">Role</h2>
          <div className="mt-2">
            <Select
              className="text-gray-700 w-[320px] h-10 mt-2 focus:outline-blue-500"
              placeholder="Change Role"
              isClearable
              options={Roles}
              id="selectbox"
              instanceId="selectbox"
              onChange={handleChangeRole}
              defaultInputValue={props.role}
              styles={colourStyles}
            />
            {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>}
          </div>
        </div>

        <div>
          <div className="flex gap-8 mt-20 justify-center">
            <button className="border border-transparent bg-indigo-500 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={editUserSubmit}>
              Submit
            </button>
            <button className="border border-indigo-400 bg-white-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-700" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessMessage message={success} actionTitle="Edit User Role" />}
      {failed.length !== 0 && <ErrorMessage message={failed} actionTitle="Edit User Role" />}
    </>
  );
}

export default UserEditForm;
