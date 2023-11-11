import { Box, IconButton, styled } from '@mui/material';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SiteCredits = () => {
  const StyledSmallText = styled('p')(({}) => ({
    fontSize: '1.2rem',
    fontFamily: 'Satoshi',
    lineHeight: '140%',
    margin: 0,
  }));

  const handleToTopClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      gap={{
        md: '50px',
        sm: '150px',
      }}
      flex={1.7}
      paddingTop={'10px'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        gap={'30px'}>
        <StyledSmallText
          sx={{
            maxWidth: {
              xs: 'auto',
              md: '285px',
            },
            color: 'rgba(255, 255, 255, 0.50)',
          }}>
          If you're ready to find your perfect retreat, our real estate landing
          page is the perfect place to start. Browse our listings and discover
          homes that seamlessly blend natural design with modern technology.
          Interested in learning more? Discuss your options with one of our
          agents today.
        </StyledSmallText>
        <StyledSmallText>© Crest Template - Powered by Webflow</StyledSmallText>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        alignItems={'flex-end'}>
        <IconButton aria-label='go to the top' onClick={handleToTopClick}>
          <ArrowUpwardIcon
            sx={{
              backgroundColor: '#FFF',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              outline: '2px solid black',
              border: '1px solid rgba(255, 255, 255, 0.60)',
              padding: '10px',
            }}
          />
        </IconButton>

        <StyledSmallText
          sx={{
            color: 'rgba(255, 255, 255, 0.50)',
            textWrap: 'nowrap',
          }}>
          Developed by Atwww.
        </StyledSmallText>
      </Box>
    </Box>
  );
};

export default SiteCredits;
