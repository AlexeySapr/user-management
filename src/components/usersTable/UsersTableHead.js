import PropTypes from 'prop-types';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import { UserTableHeadCell } from './UserTableHeadCell.styled';

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'surname',
    label: 'Surname',
  },
  {
    id: 'birthday',
    label: 'Birthday',
  },
  {
    id: 'phone',
    label: 'Phone',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'create',
    label: 'Created At',
  },
];

const UsersTableHead = props => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#cfe8fc' }}>
        {headCells.map(headCell => (
          <UserTableHeadCell key={headCell.id} width={'70px'}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </UserTableHeadCell>
        ))}
        <UserTableHeadCell width={'100px'} />
      </TableRow>
    </TableHead>
  );
};

UsersTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default UsersTableHead;
