import { Box, Grid, Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import Copyright from '../Copyright/Copyright';

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <MailIcon />
            </IconButton>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Support</Box>
              <Box>
                <Link to='/faq'>FAQ</Link>
              </Box>
              <Box>
                <Link to='/terms'>Terms and Conditions</Link>
              </Box>
              <Box>
                <Link to='/contact'>Contact Us</Link>
              </Box>
              <Box>
                <Link to='/forgot-password'>Forgot Password</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Info</Box>
              <Box>
                <Link to='/about'>About</Link>
              </Box>
              <Box>
                <Link to='/contact'>Contact Us</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Legal</Box>
              <Box>
                <Link to='/terms'>Terms and Conditions</Link>
              </Box>
              <Box>
                <Link to='/privacy'>Privacy Policy</Link>
              </Box>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
