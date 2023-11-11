import Navbar from './Navigation/Navbar';
import { Box, Container, Typography, styled } from '@mui/material';

import House from '../../assets/House.jpg';
import WelcomeCross from './WelcomeCross';

const WelcomeSection = () => {
  const StyledBox = styled(Box)(({}) => ({
    background: `url(${House}) no-repeat`,
    backgroundSize: '1440px 1440px',
    backgroundPosition: 'top',
    height: '1580px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.20)',
  }));

  return (
    <StyledBox>
      <div id='home' />
      <Container style={{ position: 'relative' }}>
        <Navbar />

        <WelcomeCross />

        <Box
          sx={{
            position: 'absolute',
            top: '1120px',
            maxWidth: '400px',
            textTransform: 'uppercase',
            fontSize: '2rem',
            zIndex: 1,
          }}>
          <p>
            Welcome to the future of real estate! Our selection of futuristic
            houses is designed to meet the needs of the modern homeowner.
          </p>
        </Box>

        <Typography
          variant='h1'
          sx={{
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '1340px',
            transform: 'translateX(-20%)',
            zIndex: '1',
          }}>
          THE FUTURE OF LIVING
        </Typography>
        <Box
          sx={{
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '1440px',
            width: '100%',
            boxShadow: '0px 0px 200px 200px #05060B',
          }}></Box>
      </Container>
    </StyledBox>
  );
};

export default WelcomeSection;
