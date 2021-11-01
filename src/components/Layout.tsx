//Mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Components
import Navbar from './Navbar/Navbar';
import Alerts from './Alerts/Alerts';
import { CssBaseline } from '@mui/material';
import AnnouncementBar from './AnnouncementBar/AnnouncementBar';
import Footer from './Footer/Footer';

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
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
