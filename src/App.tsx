import AppRouter from './components/appRouter/AppRouter';
import AlertState from './context/alert/AlertState';
import AuthContextProvider from './context/auth/AuthContext';
function App() {
  return (
    <AuthContextProvider>
      <AlertState>
        <AppRouter />
      </AlertState>
    </AuthContextProvider>
  );
}

export default App;
