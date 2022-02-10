import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
// import { selectors } from 'redux/phonebook';
import { useGetUsersQuery } from 'redux/usersAPI';

// import ContactTable from 'components/contactList/ContactTable';
import initData from '../../tempData/tempData.json';
import UsersTable from './UsersTable';

const FilteredUsersTable = () => {
  //   const filter = useSelector(selectors.getFilter);
  const { data: users, error, isLoading, isFetching } = useGetUsersQuery();

  //   const normalizedFilter = filter.toLowerCase();

  //   let filteredContacts = [];
  //   if (contacts) {
  //     filteredContacts = contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase()),
  //     );
  //   }

  useEffect(() => {
    if (error) {
      toast.error(`Сan't get contacts info from server`);
    }
  }, [error]);

  return (
    <>
      {error && <Toaster />}
      {/*{!error && contacts && <ContactTable contacts={filteredContacts} />} */}
      {!error && users && <UsersTable users={users} />}
    </>
  );
};

export default FilteredUsersTable;
