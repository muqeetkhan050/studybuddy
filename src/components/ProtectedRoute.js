// import { useAuth } from '../context/authContext';
// import { Navigate, Outlet } from 'react-router-dom';

// export default function ProtectedRoute() {
//   const { user } = useAuth();
  
//   // Add anti-logout protection
//   const [lastUserCheck, setLastUserCheck] = useState(Date.now());
  
//   useEffect(() => {
//     const now = Date.now();
//     const timeSinceLastCheck = now - lastUserCheck;
    
//     if (timeSinceLastCheck > 1000) {
//       setLastUserCheck(now);
//     }
//   }, [user]);
  
//   console.log('ProtectedRoute: checking user:', user); // Debug
  
//   if (!user) {
//     console.log('ProtectedRoute: no user found, redirecting to signin'); // Debug
//     return <Navigate to="/signin" replace />;
//   }
  
//   console.log('ProtectedRoute: user found, allowing access'); // Debug
//   return <Outlet />;
// }
  
//   console.log('ProtectedRoute: user found, rendering children'); // Debug
//   return <Outlet />;


import { useAuth } from '../context/authContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  
  console.log('ProtectedRoute: loading =', loading, ', user =', user);
  
  // Wait for auth to initialize
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5dc'
      }}>
        <div style={{ fontSize: '20px', color: '#2c3e50' }}>Loading...</div>
      </div>
    );
  }
  
  if (!user) {
    console.log('ProtectedRoute: no user found, redirecting to signin');
    return <Navigate to="/signin" replace />;
  }
  
  console.log('ProtectedRoute: user found, allowing access');
  return <Outlet />;
}