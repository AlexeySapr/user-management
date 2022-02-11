import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/usersManagement';
import { useDeleteUserMutation } from 'redux/usersAPI';

const customColumnStyle = {
  wordWrap: 'break-word',
};

const UsersTableRow = ({
  id,
  name,
  surname,
  birthday,
  phone,
  email,
  createdAt,
}) => {
  const [onDelete, { isLoading: isDeleting }] = useDeleteUserMutation();
  const dispatch = useDispatch();

  return (
    <TableRow hover role="listitem" tabIndex={-1}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{surname}</TableCell>
      <TableCell align="center" style={customColumnStyle}>
        {birthday}
      </TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center" style={customColumnStyle}>
        {email}
      </TableCell>
      <TableCell align="center" style={customColumnStyle}>
        {createdAt}
      </TableCell>
      <TableCell align="center">
        <LoadingButton
          onClick={() => dispatch(actions.openModalUdateUser(true))}
          variant="outlined"
        >
          Update
        </LoadingButton>
        <LoadingButton
          onClick={() => onDelete(id)}
          disabled={isDeleting}
          loading={isDeleting}
          loadingIndicator="Deleting..."
          variant="outlined"
          sx={{ ml: '7px' }}
        >
          Delete
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

UsersTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default UsersTableRow;
