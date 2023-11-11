import { Container, Box, Button, Typography, styled } from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

const StyledLinksButton = styled(Button)(({ theme }) => ({
  color: '#B6BDC6',
  textTransform: 'capitalize',
  fontSize: '2rem',
  '&:hover': { backgroundColor: 'transparent' },
  [theme.breakpoints.down('xl')]: {
    fontSize: '2rem',
  },
}));

const Links = () => {
  return (
    <Container sx={{ paddingTop: '100px' }}>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'32px 0'}>
        <Box display={'flex'} gap={'10px'} alignItems={'center'}>
          <MailOutlineIcon
            sx={{
              color: '#000',
              width: '40px',
              height: '40px',
              padding: '7px',
              background: 'white',
              borderRadius: '50%',
            }}
          />
          <Typography variant='body1' color={'#EEF6FD'}>
            support@crest.estate
          </Typography>
        </Box>
        <Box display={'flex'} gap={'32px'}>
          <StyledLinksButton aria-label='go to the Twitter'>
            Twitter
          </StyledLinksButton>
          <StyledLinksButton aria-label='go to the LinkedIn'>
            LinkedIn
          </StyledLinksButton>
          <StyledLinksButton aria-label='go to the Dribble'>
            Dribbble
          </StyledLinksButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Links;
