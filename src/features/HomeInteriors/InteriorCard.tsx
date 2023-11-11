import { Box, IconButton, ImageListItem, Typography } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface InteriorCardProps {
  image: {
    src: string;
    text: string;
  };
  id: number;
}

const InteriorCard = ({ image, id }: InteriorCardProps) => {
  return (
    <ImageListItem
      key={image.text}
      sx={{
        transform: id === 1 ? 'translateY(-50px)' : '',
      }}>
      <img
        src={image.src}
        style={{ aspectRatio: '1/1.21', borderRadius: '12px' }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          backgroundColor: '#00000030',
        }}>
        <IconButton
          sx={{
            top: '50%',
            left: '50%',
            backgroundColor: 'rgba(0, 0, 0, 1)',
            p: {
              xs: '2rem',
              md: '2.5rem',
            },
            transform: 'translate(-50%, -50%)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          aria-label={'click to check the details'}>
          <ArrowForwardIcon
            sx={{
              height: { xs: '2rem', sm: '3rem' },
              width: { xs: '2rem', sm: '3rem' },
              color: '#FFF',
            }}
          />
        </IconButton>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            fontFamily: 'Helvetica Neue',
            lineHeight: '26px',
            position: 'absolute',
            margin: 0,
            width: '100%',
            bottom: {
              xs: 0,
              sm: '30px',
              md: '50px',
            },
          }}>
          {image.text}
        </Typography>
      </Box>
    </ImageListItem>
  );
};

export default InteriorCard;
