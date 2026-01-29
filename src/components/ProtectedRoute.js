import { useAuth } from '../context/authContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { user } = useAuth();
  
  console.log('ProtectedRoute checking user:', user); // Debug log
  
  if (!user) {
    console.log('No user found, redirecting to signin'); // Debug log
    return <Navigate to="/signin" replace />;
  }
  
  console.log('User found, allowing access'); // Debug log
  return <Outlet />;
}