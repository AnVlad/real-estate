import { Box, Container, Typography } from '@mui/material';

import InteriorCardsList from './InteriorCardsList';

const HomeInteriors = () => {
  return (
    <Container sx={{ paddingBottom: '150px' }}>
      <Box display={'flex'} justifyContent={'end'}>
        <Typography
          variant='body1'
          width={'400px'}
          sx={{ textTransform: 'uppercase' }}>
          Our properties feature the latest technology, innovative design, and
          eco-friendly features. Experience the home of tomorrow, today.
        </Typography>
      </Box>

      <div id='interiors' />

      <InteriorCardsList />

      <Box display={'flex'}>
        <Typography
          variant='body1'
          width={'400px'}
          sx={{ textTransform: 'uppercase' }}>
          Our properties feature the latest technology, innovative design, and
          eco-friendly features. Experience the home of tomorrow, today.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeInteriors;
