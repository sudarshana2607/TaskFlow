import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Team from './components/Team';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './AuthProvider';

function AppContent() {
  const location = useLocation();
  const showSideNav = !['/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {showSideNav && <SideNav />}
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/team"
            element={
              <ProtectedRoute>
                <Team />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
