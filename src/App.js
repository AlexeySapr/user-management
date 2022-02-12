import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/usersManagement';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Header from 'components/header/Header';
import UserNameFilter from 'components/filterSection/UserNameFilter';
import FilteredUsersTable from 'components/usersTable/FilteredUsersTable';
import UserModal from 'components/modal/UserModal';

import FilterSection from 'components/filterSection/FilterSection.styled';

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Toaster />
      <Header />
      <Container maxWidth="lg">
        <FilterSection>
          <Button
            onClick={() => dispatch(actions.openModalAddUser(true))}
            variant="outlined"
          >
            Add new user
          </Button>
          <UserNameFilter />
        </FilterSection>
        <FilteredUsersTable />
        <UserModal />
      </Container>
    </>
  );
};

export default App;
