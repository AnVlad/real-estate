import Navbar from './Navigation/Navbar';
import {
  Box,
  Container,
  SvgIcon,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import style from './WelcomeSection.module.scss';

const WelcomeSection = () => {
  const house =
    'https://s3-alpha-sig.figma.com/img/df1e/0bdb/d037ec1c1a64c9a371e2e0801c1c1702?Expires=1699833600&Signature=oYZGVXP40BfLzrhTjnW3NZyh5w0qS~SSxrmlmP5J~xmKA86kPLC2jW6gKVOpazkdkTzvrnnQzY-nAmdtJjGl~YmvOoS5uE-xczUCo7cDK~kV8fNR2hkANMGLnURuZRubFQMI4Xjkl46fAVx9g1kQR43duoZvMAbcJWfNR2qo9Vt2hvucrM8ekENTkw9kueuhlALNmFCWhsef~wPw9eQgQry17PJTbivii4~Cxaz4tb98tvzymehRuy-juKr1je7CDrhei~Esj0DtalhTLydXcMVvCc77sylsb7hWNuNrkJ90mpQRsE176ZfQTs0C3qjTYBSHOBdJYXQuj-IqTG5p5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const titleText = `Welcome to Crest website! We're excited to offer you a glimpse into the next generation of homes and properties, designed to push the boundaries of modern living. Our listings showcase cutting-edge technology and design, from smart homes that anticipate your every need to eco-friendly houses that harness the power of nature.`;

  const boxStyle = {
    background: `url(${house}) no-repeat`,
    backgroundSize: '1440px 1440px',
    backgroundPosition: 'top',
    height: '1580px',
  };

  const cvgIcon = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <SvgIcon sx={{ width: 38, height: 38 }}>
        <svg
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g id='button'>
            <rect width='38' height='38' rx='19' fill='white' />
            <path
              id='Vector'
              d='M27.385 13.6982C26.3349 13.9711 25.3826 14.5147 24.6313 15.2702C23.7564 12.3182 21.8713 7.85025 20.033 7.12026C19.8388 7.0333 19.6257 6.99245 19.4116 7.00115C19.1976 7.00985 18.9888 7.06785 18.803 7.17026C17.6532 7.81325 16.9043 9.87923 17.5594 13.7942C15.0327 9.35323 14.1506 9.36023 13.7433 9.35323C13.5474 9.35581 13.3567 9.41382 13.1949 9.52002C13.0332 9.62621 12.9077 9.77586 12.8341 9.95023C12.5602 10.5342 12.0113 12.3562 13.3486 16.2772C11.7384 14.1602 11.2437 13.8902 10.6751 13.9172C10.4935 13.9274 10.3182 13.9846 10.1677 14.0826C10.0171 14.1807 9.89702 14.316 9.81999 14.4742C9.33778 15.3472 9.39298 17.5421 10.8896 20.8141C10.3761 20.3799 9.72612 20.1229 9.04303 20.0841C8.85946 20.0965 8.68203 20.1528 8.52687 20.2478C8.37171 20.3428 8.24375 20.4735 8.15462 20.6281C7.54638 21.7011 8.82327 24.7111 10.4012 26.752C11.6791 28.427 14.2381 31 17.9542 31C18.4745 30.9993 18.9937 30.9521 19.505 30.859C19.6823 30.8258 19.8387 30.7264 19.9396 30.5826C20.0406 30.4387 20.0779 30.2623 20.0434 30.092C20.0089 29.9217 19.9053 29.7716 19.7555 29.6747C19.6057 29.5777 19.4219 29.5419 19.2446 29.575C16.1565 30.153 13.8288 28.523 12.4196 27.06C10.3147 24.8701 9.39089 22.2401 9.33778 21.4381C9.77937 21.6111 11.05 22.3301 13.5225 25.3721C13.6271 25.5125 13.7855 25.6073 13.9628 25.6356C14.1402 25.6639 14.322 25.6234 14.4682 25.5231C14.6145 25.4227 14.7132 25.2706 14.7427 25.1003C14.7722 24.9301 14.7301 24.7555 14.6255 24.6151C11.15 19.5491 10.8094 16.4832 10.9229 15.4492C11.9457 16.4492 14.4984 20.1201 16.4221 22.8941C16.5169 23.0363 16.6663 23.137 16.8378 23.1742C17.0094 23.2115 17.1893 23.1823 17.3386 23.0931C17.4916 23.0085 17.6035 22.8692 17.65 22.7056C17.6964 22.5421 17.6736 22.3676 17.5865 22.2201C13.5767 15.1602 13.7163 11.9522 13.9496 10.8742C14.5505 11.4582 16.1471 13.4922 19.5112 20.5001C19.5831 20.654 19.7151 20.7746 19.8788 20.8358C20.0425 20.897 20.2247 20.8939 20.3861 20.8271C20.5504 20.7654 20.6827 20.6439 20.7541 20.489C20.8255 20.3341 20.8302 20.1584 20.7673 20.0001C17.5053 11.4962 18.9217 8.61524 19.4633 8.28825C20.1653 8.28825 22.1368 11.5352 23.3669 15.7902C23.4398 16.0532 23.5137 16.3102 23.5804 16.5602C23.4079 16.8512 23.2732 17.1616 23.1794 17.4841C22.5128 19.8391 21.8431 25.1841 23.1325 26.654C23.2608 26.8082 23.4269 26.9295 23.6159 27.007C23.8049 27.0844 24.011 27.1157 24.2157 27.098C24.4746 27.071 24.724 26.9891 24.946 26.8581C25.1679 26.7272 25.3567 26.5506 25.4988 26.3411C26.6966 24.6661 25.9935 20.4621 25.0374 16.7842C25.6888 15.9006 26.6303 15.2526 27.711 14.9442C27.9419 14.8742 28.1884 14.8658 28.4239 14.9199C28.6595 14.9739 28.8753 15.0884 29.0483 15.2512C29.5961 15.8412 30.5533 18.0491 27.6527 25.8341C27.6039 25.9944 27.6209 26.1667 27.7002 26.3154C27.7795 26.4641 27.915 26.5781 28.0791 26.6339C28.2431 26.6896 28.4232 26.683 28.5823 26.6154C28.7414 26.5477 28.8675 26.4242 28.9348 26.2701C31.2469 20.0641 31.6093 16.0662 30.0637 14.3842C29.7277 14.0423 29.2989 13.7972 28.8257 13.6763C28.3525 13.5555 27.8536 13.5638 27.385 13.7002V13.6982ZM24.3771 25.6161C24.3272 25.7023 24.2466 25.7683 24.1501 25.8021C23.6502 25.2311 23.6502 21.8491 24.1969 19.0751C25.2332 23.8701 24.6313 25.2761 24.3771 25.6161Z'
              fill='black'
            />
            <rect
              x='0.316667'
              y='0.316667'
              width='37.3667'
              height='37.3667'
              rx='18.6833'
              stroke='#1E1F21'
              strokeOpacity='0.2'
              strokeWidth='0.633333'
            />
          </g>
        </svg>
      </SvgIcon>
    </Box>
  );

  const WhiteTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FFFFFF',
      maxWidth: 260,
      fontSize: '1.4rem',
      padding: 20,
      paddingBottom: 0,
      color: 'black',
      border: '1px solid #dadde9',
      borderRadius: '10px',
    },
  }));

  return (
    <Box
      sx={{ ...boxStyle, borderBottom: '1px solid rgba(255, 255, 255, 0.20)' }}>
      <Container style={{ position: 'relative' }}>
        <Navbar />
        <div>
          <WhiteTooltip
            title={
              <>
                {cvgIcon}
                <p>{titleText}</p>
              </>
            }
            placement='right'
            sx={{ padding: '20px', backgroundColor: 'white' }}>
            <div className={style.dataButton}>
              <div className={style['dataButton-lines']}></div>
            </div>
          </WhiteTooltip>
        </div>
        <Box
          sx={{
            position: 'absolute',
            top: '1120px',
            maxWidth: '400px',
            textTransform: 'uppercase',
            fontSize: '2rem',
            zIndex: 1,
          }}>
          <p>
            Welcome to the future of real estate! Our selection of futuristic
            houses is designed to meet the needs of the modern homeowner.
          </p>
        </Box>

        <Typography
          variant='h1'
          sx={{
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '1340px',
            transform: 'translateX(-20%)',
            zIndex: '1',
          }}>
          THE FUTURE OF LIVING
        </Typography>
        <Box
          sx={{
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '1440px',
            width: '100%',
            boxShadow: '0px 0px 200px 200px #05060B',
          }}></Box>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
