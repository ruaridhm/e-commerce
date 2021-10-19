//Mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
//Components
import Navbar from './navbar/Navbar';
import Alerts from './alerts/Alerts';

interface LayoutInterface {
  children: any;
}

const theme = createTheme();

const Layout = ({ children }: LayoutInterface) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Alerts />
      <Container component='main'>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
