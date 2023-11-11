import { useState, useEffect, useRef } from 'react';

import { Box, Typography, styled } from '@mui/material';

const Car = () => {
  const carImg =
    'https://s3-alpha-sig.figma.com/img/0054/e3ea/1fe4d3f7e5245fa61c952df4987d7745?Expires=1699833600&Signature=E36Lhwtd4H6tFCm5Zj705uGTP6HgZXx-2KU9UHhOc8Ec6Ei8sZ7OTJPsle-YLydJ-jqjzJR50G2gs65yc9etnCgb0Ntlm98iNxNG3OLdlFjQKep0sBXLolMC0jdmMbE9tFkaps0kWzvoCCoYodlz9XUl8o6Y6PWGEF7fBaF1Et5ds6raMdzxitN4pwlLhw4JXCT1EB6rDNHZf~ddjyLAp88S2IRaEK2fE2RXM41qmfBn~gYdRdVhtdARJKkOrrNl1qv-uNbhjYJbcM2HjMbNdm62ViSgyMi1bPSBgDv3vKOYqiNfl4C46EmzVoCY1rnjT1PtismKfE6ZVz5yTIxBgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const CarImage = styled('img')(({ theme }) => ({
    width: '400px',
    height: '200px',
    transform: 'rotate(90deg) translateX(25%)',
    [theme.breakpoints.down('md')]: {
      width: '300px',
      height: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      height: '100px',
    },
  }));

  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef) return;
      if (!containerRef?.current) return;

      const scrollPosition = window.scrollY;
      const containerOffset = containerRef?.current.offsetTop;
      const containerBottom =
        containerOffset + containerRef?.current.offsetHeight - 400;

      if (
        scrollPosition >= containerOffset &&
        scrollPosition < containerBottom &&
        !isSticky
      ) {
        setIsSticky(true);
        setIsScrolled(false);
      }

      if (scrollPosition >= containerBottom && isSticky) {
        setIsSticky(false);
        setIsScrolled(true);
      }

      if (scrollPosition < containerOffset && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  const list = [
    {
      imgUrl:
        'https://images.unsplash.com/photo-1531581147762-5961e6e2e6b1?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgText: `The Newest Town
  and local stores`,
      min: 4,
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgText: `Sports facilities 
      and classes`,
      min: 10,
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1611320467727-76b56cfa3481?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgText: `Lakeview Conserv. Area`,
      min: 15,
    },
  ];

  return (
    <Box
      ref={containerRef}
      height={'1500px'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: '200px',
      }}>
      <Box
        sx={{
          position: 'absolute',
          height: '1175px',
          width: '1px',
          marginTop: '100px',
          background: '#21263F',
          zIndex: 1,
        }}></Box>
      <CarImage
        src={carImg}
        sx={{
          position: isSticky ? 'fixed' : 'absolute',
          top: isSticky ? '0%' : '',
          bottom: {
            xs: isScrolled ? 'calc(0% + 300px)' : '',
            sm: isScrolled ? 'calc(0% + 250px)' : '',
            md: isScrolled ? 'calc(0% + 200px)' : '',
          },
          zIndex: 2,
          transition: '1s ease-out',
        }}
      />
      <Box
        sx={{
          height: '1250px',
          aspectRatio: '1/1',
          position: 'absolute',
          background: 'rgba(18, 22, 40, 0.50)',
          top: `50%`,
          borderRadius: '50%',
          transform: 'translateY(-50%)',
        }}></Box>

      <Box
        display={'flex'}
        justifyContent={'center'}
        position={'relative'}
        height={'100%'}
        width={'100%'}
        zIndex={1}>
        <p
          style={{
            transform: `translateX(-100%)`,
          }}>
          FOREST RETREAT
        </p>
        {list.map((elem) => {
          return (
            <Box
              key={elem.imgText}
              display={'flex'}
              alignItems={'center'}
              sx={{
                gap: { xs: '50px', sm: '100px', md: '180px' },
              }}
              position={'absolute'}
              top={`calc(${(elem.min / 15) * 100}% - 100px )`}>
              <Box>
                <Box
                  sx={{
                    width: '100px',
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    borderRadius: '50%',
                    outline: '2px solid #FF6E00',
                    padding: '5px',
                    margin: '0 15px',
                  }}>
                  <Box
                    sx={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                    }}>
                    <img src={elem.imgUrl} width={'100px'} height={'100px'} />
                  </Box>
                </Box>
                <p
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: '16px',
                    lineHeight: '140%',
                    margin: '0',
                    maxWidth: '130px',
                  }}>
                  {elem.imgText}
                </p>
              </Box>
              <Box
                sx={{
                  width: '18px',
                  height: '18px',
                  background: '#FF6E00',
                  outline: '2px solid #F00',
                  borderRadius: '50%',
                }}></Box>
              <Box display={'flex'} width={'130px'}>
                <Typography variant='h4'>{elem.min}</Typography>
                <p
                  style={{
                    color: '#FFF',
                    fontSize: '12px',
                    lineHeight: '140%',
                    textTransform: 'uppercase',
                  }}>
                  min <br /> WITH CAR
                </p>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Car;
