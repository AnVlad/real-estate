import { useState } from 'react';

import {
  Box,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  ClickAwayListener,
  SxProps,
  Theme,
} from '@mui/material';

interface PinOnMapProps {
  top?: number;
  left?: number;

  pinText?: string;

  stylePin?: SxProps<Theme>;
  title?: React.ReactNode;
}

const PinOnMap = ({ top, left, stylePin, pinText, title }: PinOnMapProps) => {
  const StyledBox = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    background: '#000',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    outline: '2px solid #FFF',
  }));

  const StyledWhiteTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FFFFFF',
      maxWidth: 280,
      fontSize: '1.4rem',
      padding: '30px 20px 20px 20px',
      color: 'black',
      border: '1px solid #dadde9',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      transform: 'translateX(-15px)',
      marginLeft: '-60px !important',
    },
  }));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <StyledWhiteTooltip
          disableTouchListener
          open={open}
          onOpen={handleOpen}
          placement='right'
          title={title}>
          <StyledBox
            onClick={handleOpen}
            position={'absolute'}
            sx={{
              top: `${top}%`,
              left: `${left}%`,
              ...stylePin,
            }}>
            {pinText}
          </StyledBox>
        </StyledWhiteTooltip>
      </div>
    </ClickAwayListener>
  );
};

export default PinOnMap;
