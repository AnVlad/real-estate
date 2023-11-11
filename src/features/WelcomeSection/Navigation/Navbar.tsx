import { AppBar, Box, Toolbar, useTheme, useMediaQuery } from '@mui/material';

import DomainIcon from '@mui/icons-material/Domain';

import { StyledButton } from '../../../components/StyledButton';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Navbar = () => {
  const pages = ['home', 'projects', 'interiors', 'territory', 'listing'];

  const handleClick = (value: string) => () => {
    const targetSection = document.getElementById(value);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      color='transparent'
      position={isSmallScreen ? 'fixed' : 'static'}
      elevation={0}
      sx={{ paddingTop: '34px' }}>
      <Toolbar
        sx={{
          alignItems: 'flex-start',
        }}>
        <Box
          sx={{
            flex: 1,
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}>
          <DomainIcon sx={{ my: 2, color: '#FFF' }} />
        </Box>

        <MobileMenu menuList={pages} handleClick={handleClick} />

        {!isSmallScreen && (
          <DesktopMenu menuList={pages} handleClick={handleClick} />
        )}

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignSelf: 'flex-start',
          }}>
          <StyledButton
            aria-label='to send a message'
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
