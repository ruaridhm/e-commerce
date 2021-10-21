import AppRouter from './components/appRouter/AppRouter';
import AlertState from './context/alert/AlertState';
import AuthContextProvider from './context/auth/AuthContext';
import CartState from './context/cart/CartState';

const App = () => {
  return (
    <AuthContextProvider>
      <CartState>
        <AlertState>
          <AppRouter />
        </AlertState>
      </CartState>
    </AuthContextProvider>
  );
};

export default App;
