import { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
//MUI
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
//Components
import Layout from '../components/Layout';
import Copyright from '../components/Copyright/Copyright';
//Outside Components
import GoogleButton from 'react-google-button';
//Context
import { useAuth } from '../context/auth/AuthContext';
import AlertContext from '../context/alert/AlertContext';
//Hooks
import useMounted from '../hooks/useMounted/useMounted';

export interface ILocationState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { login, signInWithGoogle } = useAuth();

  const location = useLocation<ILocationState>();

  //ref used to check if current component is still mounted for setIsSubmitting(false) in onSubmit fn call to avoid setting state on an unmounted component
  const mounted = useMounted();

  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    if (email === '' || password === '') {
      setAlert('Please fill in all Fields', 'error');
    } else {
      setIsSubmitting(true);
      login(email, password)
        .then((response) => history.push(location.state?.from ?? './profile'))
        .catch((error) => {
          setAlert(error.message, 'error');
        })
        .finally(() => mounted.current && setIsSubmitting(false));
    }
  };

  return (
    <Layout>
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
            Sign in
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
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <LoadingButton
              loading={isSubmitting}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <GoogleButton
              onClick={() => {
                signInWithGoogle()
                  .then((user) => console.log(user))
                  .catch((error) => console.log(error));
              }}
            />
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Layout>
  );
};

export default LoginPage;
