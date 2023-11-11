import ArrowForward from '@mui/icons-material/ArrowForward';
import { Box, Container, IconButton, Typography } from '@mui/material';
import Map from './Map';
import LocationBanner from './LocationBanner';

const LocationSection = () => {
  return (
    <Container>
      <Typography
        variant='h1'
        color={'primary'}
        whiteSpace={'nowrap'}
        textTransform={'uppercase'}>
        Nature inspired
      </Typography>
      <Box display={'flex'} flexDirection={'column'} gap={'100px'}>
        <Typography
          variant='body1'
          maxWidth={'450px'}
          textTransform={'uppercase'}>
          The interior of each property is designed to evoke a sense of calm and
          relaxation, with natural colors and textures used throughout.
        </Typography>
        <IconButton
          aria-label='go to the details'
          sx={{
            p: '20px',
            outline: '1px solid #212122',
            alignSelf: 'flex-start',
          }}>
          <ArrowForward
            sx={{
              color: '#FFF',
              height: { xs: '20px', sm: '40px' },
              width: { xs: '20px', sm: '40px' },
            }}
          />
        </IconButton>
      </Box>

      <div id='territory' />

      <Map />

      <LocationBanner />
    </Container>
  );
};

export default LocationSection;
