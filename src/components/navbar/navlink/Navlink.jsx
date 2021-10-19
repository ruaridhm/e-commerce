import { NavLink as Link, useLocation } from 'react-router-dom';
//MUI
import { Button } from '@mui/material';

const Navlink = ({ to, name, ...rest }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        // component='a'
        variant={isActive ? 'outlined' : 'text'}
        color={isActive ? 'primary' : 'secondary'}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
};

export default Navlink;
