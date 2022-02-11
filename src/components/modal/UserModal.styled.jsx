import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const FormContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  width: 600,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(2),
}));
