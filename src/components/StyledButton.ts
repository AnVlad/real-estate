import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  my: 2,
  padding: '12px 20px',
  lineHeight: 1.2,
  borderRadius: '100px',
  whiteSpace: 'nowrap',
  alignSelf: 'center',
  border: '1px solid rgba(255, 255, 255, 0.40)',
}));
