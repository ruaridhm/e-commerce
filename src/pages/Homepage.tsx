import { Link } from 'react-router-dom';
//MUI
import { Typography, List, ListItem } from '@mui/material';
//Components
import Layout from '../components/Layout';
//Context
import { useAuth } from '../context/auth/AuthContext';

const Homepage = () => {
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
};
export default Homepage;
