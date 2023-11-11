import { Box, styled } from '@mui/material';

const StyledTypography = styled('p')(({ theme }) => ({
  fontSize: '8rem',
  color: '#FF6E00',
  fontFamily: 'Satoshi',
  lineHeight: '115%',
  margin: 0,
  [theme.breakpoints.between('xs', 'xl')]: {
    fontSize: '8rem',
  },
}));

const SupportEmailBanner = () => {
  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.20)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.20)',
      }}>
      <Box
        display={'flex'}
        width={'831px'}
        sx={{
          animation: 'slide 5s infinite',
          animationTimingFunction: 'linear',
          paddingY: '25px',
          '@keyframes slide': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-100%)',
            },
          },
        }}>
        {[0, 0, 0, 0, 0].map((elem, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '38px',
                alignItems: 'center',
              }}>
              <StyledTypography>support@crest.estate</StyledTypography>
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  background: '#FFF',
                  borderRadius: '50%',
                }}></Box>
              <Box></Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SupportEmailBanner;
