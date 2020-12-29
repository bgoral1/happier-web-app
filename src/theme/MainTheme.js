/* eslint-disable import/prefer-default-export */
export const theme = {
  primary: '#78D3D0',
  primaryDark: '#2DA19E',
  secondary: '#006766',
  accent: '#E91E63',
  white: '#FFFFFF',
  gray100: '#F4F4F4',
  gray200: '#E6E6E6',
  gray500: '#828282',
  gray900: '#262626',
  black: '#000000',

  font: {
    size: {
      xxs: '1rem',
      xs: '1.2rem',
      s: '1.6rem',
      m: '1.8rem',
      l: '2.4rem',
      xl: '2.8rem',
      xxl: '4rem',
    },
    family: {
      montserrat: '"Montserrat", sans-serif',
      libre: '"Libre Baskerville", serif',
    },
    weight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },

  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    large: '@media (min-width: 1366px)',
    veryLarge: '@media (min-width: 1536px)',
  },
};
