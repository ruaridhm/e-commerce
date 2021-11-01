//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//Components
import Navlink from './Navlink/Navlink';
//Auth
import { useAuth } from '../../context/auth/AuthContext';
//Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Container component='div' sx={{ flexGrow: 1 }}>
            <Link to='./'>
              <Typography variant='h6'>Ecommerce</Typography>
            </Link>
          </Container>
          <Navlink to='/shop' name='Shop' size='large' />
          {!currentUser && <Navlink to='/login' name='Login' />}
          {!currentUser && <Navlink to='/register' name='Register' />}
          {currentUser && <Navlink to='/profile' name='Profile' />}
          {currentUser && <Navlink to='/protected-page' name='Protected' />}
          {currentUser && (
            <Navlink
              to='/logout'
              name='Logout'
              onClick={async (e: { preventDefault: () => void }) => {
                e.preventDefault();
                logout();
              }}
            />
          )}
          <Navlink to='/cart' name={<ShoppingCartIcon />} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
