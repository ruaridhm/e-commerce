//Mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Components
import Navbar from './navbar/Navbar';
import Alerts from './alerts/Alerts';
import { CssBaseline } from '@mui/material';

interface ILayout {
  children: any;
}

const theme = createTheme();

const Layout = ({ children }: ILayout) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Alerts />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
