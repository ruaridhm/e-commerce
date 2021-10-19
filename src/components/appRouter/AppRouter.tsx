import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import Homepage from '../../pages/Homepage';
import Loginpage, { LocationStateInterface } from '../../pages/Loginpage';
import NotfoundPage from '../../pages/NotfoundPage';
import Profilepage from '../../pages/Profilepage';
import ProtectedPage from '../../pages/ProtectedPage';
import Registerpage from '../../pages/Registerpage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute
            exact
            path='/protected-page'
            component={ProtectedPage}
          />
          <ProtectedRoute
            exact
            path='/forgot-password'
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path='/reset-password'
            component={ResetPasswordPage}
          />
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  );
}

interface ProtectedRouteInterface {
  path: string;
  exact: boolean;
  component: () => JSX.Element;
}

const ProtectedRoute = (props: ProtectedRouteInterface) => {
  const { currentUser } = useAuth();
  const location = useLocation<LocationStateInterface>();
  const { path } = props;

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: './login', state: { from: path } }} />
  );
};
