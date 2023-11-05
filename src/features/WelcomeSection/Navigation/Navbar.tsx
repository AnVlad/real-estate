import {
  AppBar,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  styled,
} from '@mui/material';
import DomainIcon from '@mui/icons-material/Domain';
import { useState } from 'react';
import { StyledButton } from '../../../components/StyledButton';
// import { CSSProperties } from '@mui/material/styles/createMixins';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const pages = ['home', 'projects', 'interiors', 'territory', 'listing'];

  const SelectMenuItem = styled(MenuItem)({
    backgroundColor: 'transparent',
  });

  return (
    <AppBar
      color='transparent'
      position='static'
      elevation={0}
      sx={{ paddingTop: '34px' }}>
      <Grid container>
        <Grid item xs={3}>
          <DomainIcon sx={{ my: 2, color: '#FFF' }} />
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  color='white'
                  disableRipple
                  disabled={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                  sx={{
                    my: 2,
                    display: 'block',
                    textAlign: 'start',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                  }}>
                  {page}
                </Button>
              );
            })}
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              textTransform: 'uppercase',
            }}>
            <Select
              value={currentPage}
              sx={{
                border: 'none',
                width: '15rem',
              }}>
              {pages.map((page) => {
                return (
                  <SelectMenuItem
                    key={page}
                    value={page}
                    onClick={() => setCurrentPage(page)}
                    sx={{
                      display: 'block',
                      textAlign: 'start',
                      fontSize: '1.4rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      backgroundColor: 'transparent',
                    }}>
                    {page}
                  </SelectMenuItem>
                );
              })}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <StyledButton
            variant='outlined'
            color='white'
            sx={{
              my: 2,
              padding: '1.2rem 2rem',
              lineHeight: 1.2,
              borderRadius: '100px',
              whiteSpace: 'nowrap',
            }}>
            Let's talk
          </StyledButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
