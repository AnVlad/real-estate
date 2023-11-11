import { Container } from '@mui/material';

import Links from './Links';
import SupportEmailBanner from './SupportEmailBanner';
import InfoBox from './InfoBox';
import SiteCredits from './SiteCredits';

const Footer = () => {
  return (
    <>
      <Links />

      <SupportEmailBanner />

      <Container
        sx={{
          padding: '50px 0 25px',
          display: 'flex',
          flexDirection: {
            md: 'row',
            xs: 'column',
          },
          gap: {
            sm: '50px',
            xs: '30px',
          },
        }}>
        <InfoBox />
        <SiteCredits />
      </Container>
    </>
  );
};

export default Footer;
