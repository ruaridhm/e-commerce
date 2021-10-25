import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
//Context
import { useAuth } from '../../context/auth/AuthContext';
//Pages
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import Homepage from '../../pages/Homepage';
import Loginpage, { ILocationState } from '../../pages/Loginpage';
import NotfoundPage from '../../pages/NotfoundPage';
import Profilepage from '../../pages/Profilepage';
import ProtectedPage from '../../pages/ProtectedPage';
import Registerpage from '../../pages/Registerpage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';
import Cartpage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import PaymentSuccess from '../../pages/PaymentSuccess';
import FaqPage from '../../pages/FaqPage';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/cart' component={Cartpage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/paymentSuccessful' component={PaymentSuccess} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <Route exact path='/create-checkout-session' />
          <Route exact path='/faq' component={FaqPage} />
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
};

interface IProtectedRoute {
  path: string;
  exact: boolean;
  component: () => JSX.Element;
}

const ProtectedRoute = (props: IProtectedRoute) => {
  const { currentUser } = useAuth();
  const location = useLocation<ILocationState>();
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
export default AppRouter;
