import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Layout from '../components/Layout';
import Copyright from '../components/copyright/Copyright';
import LoadingButton from '@mui/lab/LoadingButton';
import { useContext, useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/auth/AuthContext';
import AlertContext from '../context/alert/AlertContext';
import { useHistory } from 'react-router';
import GoogleButton from 'react-google-button';
import useMounted from '../hooks/useMounted/useMounted';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { login, signInWithGoogle } = useAuth();

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
        .then((response) => history.push('./profile'))
        .catch((error) => {
          console.log(error.message);
          setAlert(error.message, 'error');
        })
        .finally(() => mounted.current && setIsSubmitting(false));
    }
  };

  return (
    <Layout>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
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
}
