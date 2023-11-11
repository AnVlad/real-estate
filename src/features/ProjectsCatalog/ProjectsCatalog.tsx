import {
  Container,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  styled,
} from '@mui/material';
import StyledBarWindow from '../../components/StyledBarWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

const ProjectsCatalog = () => {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const itemData = [
    {
      name: 'The Woodland Retreat',
      header: 'READY TO MOVE',
      text: '234.343,00 $',
      img: 'https://s3-alpha-sig.figma.com/img/df1e/0bdb/d037ec1c1a64c9a371e2e0801c1c1702?Expires=1699833600&Signature=oYZGVXP40BfLzrhTjnW3NZyh5w0qS~SSxrmlmP5J~xmKA86kPLC2jW6gKVOpazkdkTzvrnnQzY-nAmdtJjGl~YmvOoS5uE-xczUCo7cDK~kV8fNR2hkANMGLnURuZRubFQMI4Xjkl46fAVx9g1kQR43duoZvMAbcJWfNR2qo9Vt2hvucrM8ekENTkw9kueuhlALNmFCWhsef~wPw9eQgQry17PJTbivii4~Cxaz4tb98tvzymehRuy-juKr1je7CDrhei~Esj0DtalhTLydXcMVvCc77sylsb7hWNuNrkJ90mpQRsE176ZfQTs0C3qjTYBSHOBdJYXQuj-IqTG5p5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'The Woodland Retreat',
      rows: 1,
      cols: 1,
      aspectRatio: '1/1.1',
    },
    {
      name: 'Harmony House',

      header: 'READY TO MOVE',
      text: '200.543,00 $',
      img: 'https://s3-alpha-sig.figma.com/img/fead/4dbe/458317447675b5f9dc7526b963d71cf3?Expires=1699833600&Signature=AZhPSMhbQhQMlDMSXxM2HcbBZYYd9B4CvImc~X5caG5v6ilGuWD-PPJvZaiePmlEyzW14LMk~SfSBh5bzVklwEq71RteNF5iduiHieJ7UNleKQOHoPuMs6xmo0rtebQ-Bvwt4qYwmSG7E1izD08UJYiaNL4DqSbkZ~c0M4wkX7m~bNZ75JwvvrZMNFfEjZ201pst2sLzr5XQTGe4hTWbPZw5VBgaAIEMyAps0vzRt-3WU9zaGDvwpPwZ2dO9xLCKeKDeydEPdqgwcB6UzFms4EJKM81OvstV243mlBediXFnHk6t8-efJPSHWTkfitJ3zQOqjMyGMmFByaj21jRf7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Harmony House',
      rows: 1,
      cols: 1,
      aspectRatio: '1/1.1',
    },
    {
      name: 'Modern House',

      header: 'READY TO MOVE',
      text: '304.333,00 $',
      img: 'https://s3-alpha-sig.figma.com/img/170c/5078/30fcc46f171fe275141e12fd00e75024?Expires=1699833600&Signature=Bhb49tUJqdhCSfF~2ZCZoD32FVj~iS8P0m4PycbQ4Hd51RsyvnQAlnUXl1LJZdZ2GJEcpuxOW5mO6Td7brH3juxOw-7PApT2Za-NVOxCrCX3o1QwS19L2LDh6n~bVJJvbkgbXt7o7TQT7N9yG4tzT9DdvzJkeXjao~sbJ97Yfr0tIOFnliVCjtc2CNcYl-ueUVQzGy0Q0BiyUYgSrTEyEoqwthjeZMNPEw~Si7x136q-LNAnR656F2MhJlKeqygsZ4taJdOEZG8xF6rB6dtdPfebZBiyNLFilo3n462BjFancOLQGu-9dhX8VwEjAPgGiGSb20veoYz~RSsZgtbXiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Black House',
      rows: 1,
      cols: 1,
      aspectRatio: '1/1.1',
    },
  ];

  const bigImg = {
    name: '',
    header: 'SOLARIS HOUSE',
    text: 'Discover more',
    img: 'https://s3-alpha-sig.figma.com/img/c3e6/2eb7/2523da6ed75db349b80c3255a2e072db?Expires=1699833600&Signature=D1OnjtZt4FAHrIRQmcd~T85bAmmEZEHHIfga3P4k4BRIz6tLb-t0U61JGyxzfy7vuLRZpIUONyhE6RIH-9ljBJwJzSgnMYtAnTu46RdgUNiXPA~jxX4Ty2~46BYlv5AyHt-3GSnG4Xb1TfEkp~DFT0HVi~jO2lcTGkFRF2YiYIAHhz54bqves2cP~r-qVQOzrR~Fajpc2UaNgMU9eTHB1UZ7sYokfGaKNGvb~gzn61OtbIouuXox32B~FRkJxHgmfdQYe7w12z7gp4O6r2aN9vxj75YThTWL5qptpX-ljI2KpCGQDTOfk2kQ-lasEStju8puY0KFnpaenhrbHKhvpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Discover more',
    rows: 2,
    cols: 3,
    aspectRatio: '2/1.6',
  };

  const StyledBar = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    height: '130%',
    width: '100%',
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
    padding: '20px',

    opacity: 0,
    transition: '0.3s ease-out',

    '&:hover': {
      opacity: 1,
      height: '100%',
      transition: '0.3s ease-out',
    },

    '&:focus': {
      opacity: 1,
      height: '100%',
      transition: '0.3s ease-out',
    },

    [theme.breakpoints.down(1000)]: {
      padding: '20px 10px',
    },
  }));

  const ChangedButton = styled(Button)(({ theme }) => ({
    color: 'black',
    fontSize: '1.2rem',
    '&:hover': {
      backgroundColor: '#00000012',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  }));

  return (
    <Container sx={{ py: '150px' }}>
      <div id='projects' />
      <ImageList variant='quilted' cols={3} gap={20}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={isSmallScreen ? 3 : item.cols || 1}
            sx={{ overflow: 'hidden' }}>
            <img
              style={{
                borderRadius: 8,
                aspectRatio: isSmallScreen ? '2/1' : item.aspectRatio,
              }}
              src={item.img}
              alt={item.title}
              loading='lazy'
            />
            <StyledBar
              sx={{
                opacity: isFocused ? 1 : 0,
                height: isFocused ? 1 : 0,
              }}>
              <Typography
                variant='body2'
                sx={{
                  paddingTop: {
                    xs: '0',
                    sm: '100px',
                  },
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '3rem',
                  lineHeight: '140%',
                  letterSpacing: '-0.9px',
                }}>
                {item.name}
              </Typography>
              <StyledBarWindow text={item.text} header={item.header}>
                <ChangedButton
                  aria-label='click to check the details'
                  onFocus={() => setIsFocused(true)}>
                  Open now <ArrowForwardIcon />
                </ChangedButton>
              </StyledBarWindow>
            </StyledBar>
          </ImageListItem>
        ))}
        <ImageListItem
          key={bigImg.img}
          cols={isSmallScreen ? 3 : bigImg.cols || 1}
          sx={{ overflow: 'hidden' }}>
          <img
            style={{
              borderRadius: 8,
              aspectRatio: isSmallScreen ? '2/1' : bigImg.aspectRatio,
            }}
            src={bigImg.img}
            alt={bigImg.title}
            loading='lazy'
          />
          <StyledBar
            sx={{ justifyContent: 'center', height: '100%', opacity: 1 }}>
            <StyledBarWindow
              text={bigImg.text}
              header={bigImg.header}
              styleBox={{ maxWidth: '30rem', padding: '0 0 0 30px' }}>
              <ChangedButton
                aria-label='click to check the details'
                sx={{
                  padding: '50px 40px',
                  borderLeft: '1px solid rgba(20, 22, 21, 0.10)',
                }}>
                <ArrowForwardIcon />
              </ChangedButton>
            </StyledBarWindow>
          </StyledBar>
        </ImageListItem>
      </ImageList>
    </Container>
  );
};

export default ProjectsCatalog;
