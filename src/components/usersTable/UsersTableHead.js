import PropTypes from 'prop-types';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableCell from '@mui/material/TableCell';

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

function UsersTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#cfe8fc' }}>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={'normal'}
            sx={{ fontSize: 18, fontWeight: '600', textTransform: 'uppercase' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align={'center'} padding={'normal'}></TableCell>
      </TableRow>
    </TableHead>
  );
}

// UsersTableHead.propTypes = {
//   onRequestSort: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
// };

export default UsersTableHead;
