import { Box } from '@mui/material';
import map from '../../assets/Map.jpg';
import DomainIcon from '@mui/icons-material/Domain';

import PinOnMap from './PinOnMap';

const Map = () => {
  const customTitle = (
    <>
      <DomainIcon
        sx={{
          border: '1px solid black',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          padding: '2px',
          outline: '2px solid black',
          transform: 'translateY(-5px)',
        }}
      />
      <p
        style={{
          margin: 0,
          color: '#2B2B2B',
          fontFamily: 'Satoshi',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '140%',
        }}>
        The project is situated in a vibrant and diverse neighborhood that is
        known for its cultural richness and artistic expression.
      </p>
    </>
  );

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      paddingTop={'60px'}
      paddingBottom={'170px'}>
      <Box position={'relative'}>
        <img src={map} width={'100%'} />

        <PinOnMap
          top={34}
          left={28}
          stylePin={{
            fontSize: 0,
            background: '#FF6E00',
            border: '13px solid #000',
            outline: '2px solid #FF6E00',
          }}
          title={customTitle}
        />

        <PinOnMap top={47} left={59} pinText='1' title={<>School</>} />

        <PinOnMap top={63} left={37} pinText='2' />

        <PinOnMap top={68} left={85} pinText='3' />
      </Box>
    </Box>
  );
};

export default Map;
