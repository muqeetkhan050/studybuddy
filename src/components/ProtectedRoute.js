import { useAuth } from '../context/authContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { user } = useAuth();
  
  console.log('ProtectedRoute: current user =', user); // Debug
  
  if (!user) {
    console.log('ProtectedRoute: no user found, redirecting to signin'); // Debug
    return <Navigate to="/signin" replace />;
  }
  
  console.log('ProtectedRoute: user found, rendering children'); // Debug
  return <Outlet />;
}