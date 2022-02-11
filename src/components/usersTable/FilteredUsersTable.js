import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectors } from 'redux/usersManagement';
import { useGetUsersQuery } from 'redux/usersAPI';
import UsersTable from './UsersTable';

const FilteredUsersTable = () => {
  const filter = useSelector(selectors.getFilter);
  const { data: users, error } = useGetUsersQuery();

  const normalizedFilter = filter.toLowerCase();

  let filteredUsers = [];
  if (users) {
    filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(normalizedFilter),
    );
  }

  useEffect(() => {
    if (error) {
      toast.error(`Сan't get contacts info from server`);
    }
  }, [error]);

  return (
    <>
      {error && <Toaster />}
      {!error && users && <UsersTable users={filteredUsers} />}
    </>
  );
};

export default FilteredUsersTable;
