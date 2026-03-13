import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SidebarProvider } from './context/SidebarContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoginPage from './components/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import RidersLayout from './components/RidersLayout';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          // <PrivateRoute>
          <SidebarProvider>
            <DashboardLayout />
          </SidebarProvider>
          // </PrivateRoute>
        }
      >
        <Route path="riders" element={<RidersLayout />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
