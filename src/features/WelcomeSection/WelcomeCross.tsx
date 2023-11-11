import { useState } from 'react';

import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  ClickAwayListener,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import style from './WelcomeSection.module.scss';
import { HandIcon } from '../../assets/icons';

const WelcomeCross = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SvgIcon = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <HandIcon sx={{ width: 38, height: 38 }} />
    </Box>
  );

  const StyledWhiteTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FFFFFF',
      maxWidth: 260,
      fontSize: '1.4rem',
      padding: 20,
      paddingBottom: 0,
      color: 'black',
      border: '1px solid #dadde9',
      borderRadius: '10px',
      margin: 0,
    },
  }));

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <StyledWhiteTooltip
          disableTouchListener
          open={open}
          onOpen={handleOpen}
          title={
            <>
              {SvgIcon}
              <>
                Welcome to Crest website! We're excited to offer you a glimpse
                into the next generation of homes and properties, designed to
                push the boundaries of modern living. Our listings showcase
                cutting-edge technology and design, from smart homes that
                anticipate your every need to eco-friendly houses that harness
                the power of nature.
              </>
            </>
          }
          placement={isSmallScreen ? 'top' : 'right'}
          sx={{ padding: '20px', backgroundColor: 'white' }}>
          <Button
            variant='contained'
            color='black'
            sx={{
              borderRadius: '50%',
              backgroundColor: 'black',
              width: '8rem',
              height: '8rem',
              position: 'absolute',
              top: '740px',
              left: '60%',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={style.dataButton}
            onClick={handleOpen}>
            <div className={style['dataButton-lines']}></div>
          </Button>
        </StyledWhiteTooltip>
      </div>
    </ClickAwayListener>
  );
};

export default WelcomeCross;
