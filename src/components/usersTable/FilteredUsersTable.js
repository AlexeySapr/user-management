// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
// import { selectors } from 'redux/phonebook';
// import { useGetContactsQuery } from 'services/contactsAPI';

// import ContactTable from 'components/contactList/ContactTable';
import initData from '../../tempData/tempData.json';
import UsersTable from './UsersTable';

const FilteredUsersTable = () => {
  //   const filter = useSelector(selectors.getFilter);
  //   const { data: contacts, error } = useGetContactsQuery();

  //   const normalizedFilter = filter.toLowerCase();

  //   let filteredContacts = [];
  //   if (contacts) {
  //     filteredContacts = contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase()),
  //     );
  //   }

  //   useEffect(() => {
  //     if (error) {
  //       toast.error(`Сan't get contacts info from server`);
  //     }
  //   }, [error]);

  console.log('initData: ', initData);

  return (
    <>
      {/* {error && <Toaster />}
      {!error && contacts && <ContactTable contacts={filteredContacts} />} */}
      <UsersTable users={initData} />
    </>
  );
};

export default FilteredUsersTable;
