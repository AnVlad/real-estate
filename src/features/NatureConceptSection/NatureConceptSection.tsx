import { Container, Box, Typography, styled } from '@mui/material';

import bedRoomImg from '../../assets/bedroom-with-green-wall-that-has-plant-it 2.png';

const NatureConceptSection = () => {
  const CustomImage = styled('img')(({}) => ({
    borderRadius: '340px',
    filter: 'brightness(1.05)',
  }));
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'space-between',
        paddingTop: '50px',
      }}>
      <Box
        borderRight={'1px solid rgba(255, 255, 255, 0.20)'}
        sx={{
          width: {
            xs: '100%',
            sm: '47%',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography
          sx={{
            maxWidth: '400px',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: '2rem',
            padding: '4rem',
          }}>
          As you step inside, you'll be struck by the warmth and comfort of the
          interior woods. The natural textures and materials create a sense of
          harmony with the surrounding environment. The large windows offer
          breathtaking views of the forest, bringing the beauty of nature
          inside.
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '47%',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '100px', md: '160px' },
        }}>
        <Box
          sx={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.20)',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <CustomImage src={bedRoomImg} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center',
              px: '20px',
              marginTop: '-140px',
              zIndex: '1',
              marginBottom: '30px',
            }}>
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontWeight: 600,
                width: '18rem',
                textAlign: 'center',
                color: '#000000',
              }}>
              NATURE BASED CONCEPT BEDROOM
            </Typography>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>
              FOREST RETREAT
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.60)',
              fontSize: '1.6rem',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '140%',
            }}>
            Nestled in the heart of a lush green forest, this property is a true
            nature lover's paradise. With its eco-friendly features and stunning
            design, it's the perfect escape from the hustle and bustle of city
            life.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NatureConceptSection;
