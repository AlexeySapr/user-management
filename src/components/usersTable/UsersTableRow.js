import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import LoadingButton from '@mui/lab/LoadingButton';
// import { useDeleteContactMutation } from 'services/contactsAPI';

// const customColumnStyle = {
//   wordWrap: 'break-word',
//   maxWidth: '1px',
// };

const UsersTableRow = ({
  id,
  name,
  surname,
  birthday,
  phone,
  email,
  createdAt,
}) => {
  //   const [onDelete, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <TableRow hover role="listitem" tabIndex={-1}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{surname}</TableCell>
      <TableCell align="center" style={{ wordWrap: 'break-word' }}>
        {birthday}
      </TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center" style={{ wordWrap: 'break-word' }}>
        {email}
      </TableCell>
      <TableCell align="center" style={{ wordWrap: 'break-word' }}>
        {createdAt}
      </TableCell>
      <TableCell align="center">
        <LoadingButton
          //   onClick={() => onDelete(id)}
          variant="outlined"
        >
          Update
        </LoadingButton>
        <LoadingButton
          //   onClick={() => onDelete(id)}
          //   disabled={isDeleting}
          //   loading={isDeleting}
          loadingIndicator="Deleting..."
          variant="outlined"
          sx={{ marginLeft: '7px' }}
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
