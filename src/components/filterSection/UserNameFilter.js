import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/usersManagement';
import TextField from '@mui/material/TextField';

const UserNameFilter = () => {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      id="standard-basic"
      label="Find user"
      name="filter"
      value={filter}
      onChange={event =>
        dispatch(actions.changeFilter(event.currentTarget.value))
      }
      variant="standard"
    />
  );
};

export default UserNameFilter;
