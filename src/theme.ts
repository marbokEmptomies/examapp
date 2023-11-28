// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // your primary color
    },
    secondary: {
      main: '#f50057', // your secondary color
    },
    background: {
      default: '#f8f8f8', // your background color
    },
    text: {
      primary: '#333', // your primary text color
      secondary: '#777', // your secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // your preferred font family
    fontSize: 16, // default font size
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

export default theme;
