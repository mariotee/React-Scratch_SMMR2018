import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Product Sans, sans-serif',
  },
  dimensions: {
    sidebar: 192,
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#990606',
      light: '#ee3333',
      dark: '#630000',
    },
    secondary: {
      main: '#00c0ee',
      light: '#66c0ff',
      dark: '#0090cc',
    },
  },
});
