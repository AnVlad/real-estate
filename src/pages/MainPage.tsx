import React, { CSSProperties } from 'react';
// import house from '../assets/house.png';
import Navbar from '../features/Navigation/Navbar';
import { Box, Container } from '@mui/material';
import style from './MainPage.module.scss';

const MainPage = () => {
  const house =
    'https://s3-alpha-sig.figma.com/img/df1e/0bdb/d037ec1c1a64c9a371e2e0801c1c1702?Expires=1699833600&Signature=oYZGVXP40BfLzrhTjnW3NZyh5w0qS~SSxrmlmP5J~xmKA86kPLC2jW6gKVOpazkdkTzvrnnQzY-nAmdtJjGl~YmvOoS5uE-xczUCo7cDK~kV8fNR2hkANMGLnURuZRubFQMI4Xjkl46fAVx9g1kQR43duoZvMAbcJWfNR2qo9Vt2hvucrM8ekENTkw9kueuhlALNmFCWhsef~wPw9eQgQry17PJTbivii4~Cxaz4tb98tvzymehRuy-juKr1je7CDrhei~Esj0DtalhTLydXcMVvCc77sylsb7hWNuNrkJ90mpQRsE176ZfQTs0C3qjTYBSHOBdJYXQuj-IqTG5p5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const boxStyle = {
    background: `url(${house}) no-repeat`,
    backgroundSize: '1440px 1440px',
    backgroundPosition: 'top',
    height: '1982px',
  };

  return (
    <Box sx={{ ...boxStyle }}>
      <Container disableGutters style={{ position: 'relative' }}>
        <Navbar />
        <div className={style.dataButton}>
          <div className={style['dataButton-lines']}></div>
        </div>
      </Container>
    </Box>
  );
};

export default MainPage;
