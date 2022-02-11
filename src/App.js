import { Container } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FilterSection from 'components/filterSection/FilterSection.styled';
import Header from 'components/header/Header';
import UserNameFilter from 'components/filterSection/UserNameFilter';
import FilteredUsersTable from 'components/usersTable/FilteredUsersTable';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <FilterSection>
          <LoadingButton
            // onClick={() => onDelete(id)}
            loading={false}
            disabled={false}
            loadingIndicator="Adding..."
            variant="outlined"
          >
            Add new user
          </LoadingButton>
          <UserNameFilter />
        </FilterSection>
        <FilteredUsersTable />
      </Container>
    </>
  );
};

export default App;
