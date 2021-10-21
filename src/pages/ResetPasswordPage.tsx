import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Components
import Layout from '../components/Layout';
import Copyright from '../components/copyright/Copyright';
//Context
import { useAuth } from '../context/auth/AuthContext';
import AlertContext from '../context/alert/AlertContext';
//Hooks
import useQuery from '../hooks/useQuery/useQuery';

const theme = createTheme();

const ResetPasswordPage = () => {
  const alertContext = useContext(AlertContext);
  const history = useHistory();
  const { setAlert } = alertContext;
  const { resetPassword } = useAuth();
  const query = useQuery();
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const oobCode = query.get('oobCode');
    resetPassword(oobCode!, newPassword)
      .then(() => {
        setAlert('Your password has been changed', 'success');
        history.push('/login');
      })
      .catch((error) => setAlert(error.message, 'error'));
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Reset Password
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                name='newPassword'
                label='New Password'
                type='newPassword'
                id='newPassword'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Layout>
  );
};
export default ResetPasswordPage;
