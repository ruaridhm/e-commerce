import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import { useAuth } from '../context/auth/AuthContext';

export default function Profilepage() {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <Typography variant='h2'>Profile page</Typography>
      <Typography variant='body1'>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      </Typography>
    </Layout>
  );
}
