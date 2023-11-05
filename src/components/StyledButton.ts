import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  variant: 'outlined',
  color: 'white',
  my: 2,
  padding: '12px 20px',
  lineHeight: 1.2,
  borderRadius: '100px',
  whiteSpace: 'nowrap',
  alignSelf: 'center',
}));
