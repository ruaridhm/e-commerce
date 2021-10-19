import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navlink from './navlink/Navlink';

function Navbar() {
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
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Ecommerce
          </Typography>
          <Navlink to='/' name='Ecommerce' size='large' />
          <Navlink to='/login' name='Login' />
          <Navlink to='/register' name='Register' />
          <Navlink to='/profile' name='Profile' />
          <Navlink to='/protected-page' name='Protected' />
          <Navlink
            to='/logout'
            name='Logout'
            onClick={async (e: { preventDefault: () => void }) => {
              e.preventDefault();
              // handle logout
              alert('logout user');
            }}
          />
          {/* <IconButton
          variant='outline'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
