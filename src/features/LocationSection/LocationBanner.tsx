import { Box, Typography } from '@mui/material';
import { StyledButton } from '../../components/StyledButton';

const LocationBanner = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
      <Typography variant='h3'>INTERESTED?</Typography>
      <Box
        display={'flex'}
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent={'space-between'}
        py={'100px'}
        borderTop={'1px solid rgba(255, 255, 255, 0.15)'}
        gap={'40px'}>
        <Typography
          variant='body1'
          maxWidth={{
            xs: 'auto',
            md: '430px',
          }}
          textTransform={'uppercase'}>
          Browse our listings and discover homes that seamlessly blend natural
          design with modern technology.
        </Typography>
        <Box
          display={'flex'}
          flexDirection={{
            xs: 'column',

            sm: 'row',
            md: 'column',
          }}
          justifyContent={'space-between'}
          gap={'20px'}>
          <p
            style={{
              fontSize: '12px',
              maxWidth: '380px',
              color: 'rgba(255, 255, 255, 0.50)',
              fontWeight: '400',
              lineHeight: '140%',
              textTransform: 'uppercase',
              margin: 0,
            }}>
            properties that feature green energy technology and natural design
            elements, you'll experience a new level of harmony between your home
            and the environment.
          </p>
          <StyledButton
            aria-label='go to search more'
            sx={{
              padding: '7px 15px',
              alignSelf: {
                xs: 'center',
                md: 'flex-start',
              },
              minInlineSize: 'fit-content',
            }}>
            Search more
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationBanner;
