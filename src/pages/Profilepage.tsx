//MUI
import { Typography } from '@mui/material';
//Components
import Layout from '../components/Layout';
//Context
import { useAuth } from '../context/auth/AuthContext';

const Profilepage = () => {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <Typography variant='h2'>Profile page</Typography>
      <Typography variant='body1'>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      </Typography>
    </Layout>
  );
};

export default Profilepage;
