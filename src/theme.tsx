import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
  }
}

declare module '@mui/material/Icon' {
  interface SvgIconPropsColorOverrides {
    black: true;
    white: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6E00',
    },
    secondary: {
      main: '#121628',
    },
    black: {
      main: '#05060B',
    },
    white: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#05060B',
    },
    background: {
      default: '#05060B',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: 'Satoshi',
    h1: {
      fontSize: '19rem',
      letterSpacing: '-0.4rem',
      lineHeight: 1.2,
      fontFamily: 'Nohemi',
    },
    h2: {
      fontSize: '14rem',
      lineHeight: 1.2,
      fontFamily: 'Nohemi',
    },
    h3: {
      fontSize: '10rem',
      lineHeight: 1.05,
      fontFamily: 'Nohemi',
    },
    h4: {
      fontSize: '8ren',
      lineHeight: 1.2,
      fontFamily: 'Nohemi',
    },
    h5: {
      fontSize: '7rem',
      lineHeight: 1.1,
      fontFamily: 'Nohemi',
    },
    h6: {
      fontSize: '6rem',
      lineHeight: 1.2,
      fontFamily: 'Nohemi',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
