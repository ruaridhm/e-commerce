//Mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Components
import Navbar from './navbar/Navbar';
import Alerts from './alerts/Alerts';
import { CssBaseline } from '@mui/material';
import AnnouncementBar from './announcementBar/AnnouncementBar';

interface ILayout {
  children: any;
}

const theme = createTheme();

const Layout = ({ children }: ILayout) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnnouncementBar text='Free Shipping on all orders within Ireland' />
      <Navbar />
      <Alerts />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
