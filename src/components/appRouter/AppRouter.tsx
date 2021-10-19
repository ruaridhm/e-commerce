import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import Homepage from '../../pages/Homepage';
import Loginpage from '../../pages/Loginpage';
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
          <Route exact path='/login' component={Loginpage} />
          <Route exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute
            exact
            path='/protected-page'
            component={ProtectedPage}
          />
          <Route exact path='/forgot-password' component={ForgotPasswordPage} />
          <Route exact path='/reset-password' component={ResetPasswordPage} />
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
  const { path } = props;

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: './login', state: { from: path } }} />
  );
};
