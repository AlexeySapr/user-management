import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/usersManagement';
import { useDeleteUserMutation } from 'redux/usersAPI';
import { DeleteButton } from './UsersTable.styled';

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
        <Button
          onClick={() =>
            dispatch(actions.openModalUdateUser({ id, isModalopen: true }))
          }
          variant="outlined"
        >
          Update
        </Button>
        <DeleteButton
          onClick={() => {
            onDelete(id);
            if (!isDeleting) {
              toast.success(`User ${name} ${surname} successfully deleted`);
            }
          }}
          disabled={isDeleting}
          loading={isDeleting}
          loadingIndicator="Deleting..."
          variant="outlined"
        >
          Delete
        </DeleteButton>
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
