import {
  Box,
  Container,
  Typography,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';

import TouchAppIcon from '@mui/icons-material/TouchApp';

const PropertyDetailsSection = () => {
  const StyledText = styled('p')(({}) => ({
    color: '#FFF',
    fontFamily: 'Satoshi',
    fontSize: '14px',
    lineHeight: '140%',
    margin: 0,
  }));

  const list = [
    {
      id: '01',
      area: '7.534 Sq. Ft.',
      feature: 'Big Garden',
      state: 'NEW Listing',
      name: 'Woodland Retreat',
      address: `
      1234 Greenway Blvd, 
      Harmony Heights, New City
      `,
      price: '$ 304.300,00',
    },
    {
      id: '02',
      area: '6.832 Sq. Ft',
      feature: 'Green Terrace',
      state: 'NEW Listing',
      name: 'Forest Retreat',
      address: `
      5678 Nature's Edge 
      Lane, Forest Ridge, Oakville
      `,
      price: '$ 234.343,00',
    },
    {
      id: '03',
      area: '7.970 Sq. Ft.',
      feature: 'Big Garden',
      state: 'NEW Listing',
      name: 'Harmony House',
      address: `
      9101 Modern Avenue, 
      The Greens, Park City
      `,
      price: '$ 304.300,00',
    },
  ];

  const StyledBar = styled('div')(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    height: '150%',
    width: '100%',
    background: '#05060B',

    opacity: 0,
    transition: '0.3s ease-out',

    '&:hover': {
      opacity: 1,
      height: '100%',
      transition: '0.3s ease-out',
    },
  }));

  return (
    <Container sx={{ paddingBottom: '100px' }}>
      <div id='listing' />

      {list.map((item) => {
        return (
          <Box
            key={item.id}
            borderBottom={'1px solid rgba(255, 255, 255, 0.20)'}>
            <Box display={'flex'} gap={'75px'} padding={'60px 0'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                padding={'0 60px 10px 0'}>
                <StyledText
                  sx={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    whiteSpace: 'nowrap',
                  }}>
                  {item.area}
                </StyledText>
                <Typography variant='h5' fontFamily={'Satoshi'}>
                  {item.id}
                </Typography>
                <StyledText sx={{ whiteSpace: 'nowrap' }}>
                  {item.feature}
                </StyledText>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'62px'}
                width={'100%'}>
                <StyledText>{item.state}</StyledText>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography variant='h5'>{item.name}</Typography>
                  <Box
                    overflow={'hidden'}
                    paddingLeft={'20px'}
                    height={'100%'}
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'flex',
                      },
                    }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        width: '200px',
                      }}>
                      <TouchAppIcon
                        sx={{
                          alignSelf: 'center',
                        }}
                      />
                      <StyledBar>
                        <Typography variant='body2' whiteSpace={'nowrap'}>
                          {item.price}
                        </Typography>
                      </StyledBar>
                    </Box>
                  </Box>
                </Box>
                <StyledText sx={{ maxWidth: '170px' }}>
                  {item.address}
                </StyledText>
              </Box>
            </Box>
            <Box
              overflow={'hidden'}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
              justifyContent={'center'}
              paddingBottom={'20px'}>
              <Typography
                variant='body2'
                whiteSpace={'nowrap'}
                paddingLeft={'20px'}>
                {item.price}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default PropertyDetailsSection;
