import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const FilterSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#cfe8fc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

export default FilterSection;
