import { ReactNode } from 'react';

import { Box, styled } from '@mui/material';

import { CSSProperties } from '@mui/styled-engine';

interface StyledBarWindowProps {
  header?: string;
  text?: string;
  styleBox?: CSSProperties;
  children?: ReactNode;
}

const StyledBarWindow = ({
  header,
  text,
  styleBox,
  children,
}: StyledBarWindowProps) => {
  const StyledSubText = styled('p')(({ theme }) => ({
    color: '#ACACAC',
    fontSize: '1.2rem',
    fontFamily: 'Satoshi',
    lineHeight: '140%',
    margin: 0,
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
    },
  }));

  const StyledText = styled('p')(({ theme }) => ({
    fontFamily: 'Satoshi',
    lineHeight: '140%',
    margin: 0,
    color: '#000',
    fontSize: '2.5rem',
    fontWeight: 600,
    [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down(1000)]: {
      fontSize: '1.8rem',
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    padding: '20px 10px',
    ...styleBox,

    [theme.breakpoints.down(1000)]: {
      padding: '20px 10px',
      ...styleBox,
    },
  }));

  return (
    <StyledBox>
      <Box>
        <StyledSubText>{header}</StyledSubText>
        <StyledText>{text}</StyledText>
      </Box>
      <Box>{children}</Box>
    </StyledBox>
  );
};

export default StyledBarWindow;
