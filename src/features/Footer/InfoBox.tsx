import { Box, Typography } from '@mui/material';

import DomainIcon from '@mui/icons-material/Domain';
import { StyledButton } from '../../components/StyledButton';

const InfoBox = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      gap={'30px'}
      flex={2}
      padding={{
        xs: '10px 0 0 0',
        md: '10px 30px 0 0',
      }}
      borderRight={{
        xs: 'none',
        md: '1px solid rgba(255, 255, 255, 0.20)',
      }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        gap={'50px'}>
        <Box
          maxWidth={{
            xs: 'auto',
            md: '265px',
          }}>
          <Typography variant='body1'>+5 (389) 734-51-10</Typography>
          <Typography
            variant='body1'
            textTransform={'uppercase'}
            sx={{
              color: 'rgba(255, 255, 255, 0.50)',
            }}>
            Modern Homes That Connect with Nature
          </Typography>
        </Box>
        <Box
          display={{
            xs: 'flex',
            md: 'block',
          }}
          gap={'50px'}>
          <p>Office:</p>
          <p>9101 Modern Avenue</p>
        </Box>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}>
        <StyledButton
          aria-label='click to check the details'
          variant='outlined'
          color='white'>
          Visit us
        </StyledButton>
        <DomainIcon
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            outline: '2px solid black',
            border: '1px solid rgba(255, 255, 255, 0.60)',
            padding: '10px',
            alignSelf: 'flex-end',
          }}
        />
      </Box>
    </Box>
  );
};

export default InfoBox;
