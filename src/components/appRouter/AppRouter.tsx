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
import HomePage from '../../pages/HomePage';
import LoginPage, { ILocationState } from '../../pages/LoginPage';
import NotfoundPage from '../../pages/NotfoundPage';
import ProfilePage from '../../pages/ProfilePage';
import RegisterPage from '../../pages/RegisterPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import PaymentSuccess from '../../pages/PaymentSuccess';
import FaqPage from '../../pages/FaqPage';
import ShopPage from '../../pages/ShopPage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import TermsConditionsPage from '../../pages/TermsConditionsPage';
import PrivacyPage from '../../pages/PrivacyPage';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/paymentSuccessful' component={PaymentSuccess} />
          <Route exact path='/faq' component={FaqPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/privacy' component={PrivacyPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/terms' component={TermsConditionsPage} />
          <Route exact path='*' component={NotfoundPage} />
          <Route exact path='/forgot-password' component={ForgotPasswordPage} />
          <ProtectedRoute exact path='/login' component={LoginPage} />
          <ProtectedRoute exact path='/register' component={RegisterPage} />
          <ProtectedRoute exact path='/profile' component={ProfilePage} />
          <ProtectedRoute
            exact
            path='/reset-password'
            component={ResetPasswordPage}
          />
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

  if (path === '/login' || path === '/register' || path === '/reset-password') {
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
