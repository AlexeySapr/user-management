import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';
import LoadingButton from '@mui/lab/LoadingButton';

export const UserTableHeadCell = styled(TableCell)(() => ({
  textAlign: 'center',
  padding: '5px',
  fontSize: 18,
  fontWeight: '600',
  textTransform: 'uppercase',
}));

export const DeleteButton = styled(LoadingButton)(() => ({
  margin: '5px',
  color: 'red',
  borderColor: 'red',

  '&:hover': {
    backgroundColor: 'rgba(210, 25, 25, 0.04)',
    borderColor: 'red',
  },
}));
