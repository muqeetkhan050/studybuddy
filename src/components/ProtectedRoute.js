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
  
  console.log('ProtectedRoute: State', { user, loading }); // Debug
  
  // Show loading while checking authentication
  if (loading) {
    console.log('ProtectedRoute: Still loading auth...'); // Debug
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f5f5dc' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #ddd', 
            borderTop: '4px solid #5a8a8a', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p style={{ color: '#666', fontSize: '16px' }}>Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!user) {
    console.log('ProtectedRoute: no user found, redirecting to signin'); // Debug
    return <Navigate to="/signin" replace />;
  }
  
  console.log('ProtectedRoute: user found, allowing access', user); // Debug
  return <Outlet />;
}
  

