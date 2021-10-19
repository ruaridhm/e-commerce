import { Typography, List, ListItem } from '@mui/material';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/auth/AuthContext';

export default function Homepage() {
  const { currentUser } = useAuth();
  return (
    <Layout>
      <Typography>Ecommerce</Typography>
      <Typography>{`The current user is : ${currentUser}`}</Typography>
      <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
      </List>
    </Layout>
  );
}
