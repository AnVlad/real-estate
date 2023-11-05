import { Box, Button, Container, Typography } from '@mui/material';
import Car from './Car';
import { StyledButton } from '../../components/StyledButton';

const CarSection = () => {
  return (
    <Container>
      <Box paddingTop={'100px'} display={'flex'} justifyContent={'center'}>
        <Typography variant='h3' width={'950px'} textAlign={'center'}>
          IDEAL LOCATION FOR LIVING IN HARMONY WITH NATURE
        </Typography>
      </Box>

      <Car />

      <Box padding={'100px 0 200px'} display={'flex'} justifyContent={'center'}>
        <Box
          maxWidth={'610px'}
          width={'100%'}
          display={'flex'}
          flexDirection={'column'}>
          <Typography variant='body1' marginBottom={'46px'}>
            Residents can enjoy the best of both worlds: a stylish and
            contemporary living space, surrounded by trees, gardens, and parks.
          </Typography>

          <p
            style={{
              marginBottom: '32px',
            }}>
            The drive TO NEWEST TOWN takes around 4 minutes with car, and you'll
            be rewarded with charming shops, cafes, and galleries to explore.
          </p>

          <StyledButton>Experience more</StyledButton>
        </Box>
      </Box>
    </Container>
  );
};

export default CarSection;
