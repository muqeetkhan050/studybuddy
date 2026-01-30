
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext({
//   user: null,
//   token: null,
//   login: () => {},
//   logout: () => {}
// });

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);   // {id, name, email}
//   const [token, setToken] = useState(null); // JWT token

//   // Initialize user from localStorage on app load
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token");
    
//     if (storedUser && storedToken) {
//       try {
//         setUser(JSON.parse(storedUser));
//         setToken(storedToken);
//       } catch (error) {
//         console.error("Error parsing stored user:", error);
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//       }
//     }
//   }, []);

//   const login = (userData, jwtToken) => {
//     console.log('AuthContext login called with:', userData, jwtToken);
//     setUser(userData);
//     setToken(jwtToken);
//     localStorage.setItem("token", jwtToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     console.log('AuthContext logout called');
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   const value = {
//     user,
//     token,
//     login,
//     logout
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  token: null,
  loading: true, // Add loading state
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Initialize user from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    
    setLoading(false); // Done loading
  }, []);

  const login = (userData, jwtToken) => {
    console.log('AuthContext login called with:', userData, jwtToken);
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    console.log('AuthContext logout called');
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    token,
    loading, // Expose loading state
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);