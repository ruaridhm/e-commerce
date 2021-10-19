import { NavLink as Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Navlink({ to, name, ...rest }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        component='a'
        variant={isActive ? 'outlined' : 'text'}
        color={isActive ? 'primary' : 'secondary'}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}
