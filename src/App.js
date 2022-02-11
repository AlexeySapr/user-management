import { useDispatch } from 'react-redux';
import { actions } from 'redux/usersManagement';

import { Container } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FilterSection from 'components/filterSection/FilterSection.styled';
import Header from 'components/header/Header';
import UserNameFilter from 'components/filterSection/UserNameFilter';
import FilteredUsersTable from 'components/usersTable/FilteredUsersTable';
import UserModal from 'components/modal/UserModal';

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <FilterSection>
          <LoadingButton
            onClick={() => dispatch(actions.openModalAddUser(true))}
            variant="outlined"
          >
            Add new user
          </LoadingButton>
          <UserNameFilter />
        </FilterSection>
        <FilteredUsersTable />
        <UserModal />
      </Container>
    </>
  );
};

export default App;
