

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
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        
        console.log('AuthContext: Initializing auth', { storedUser, storedToken });
        
        if (storedUser && storedToken) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
          console.log('AuthContext: User loaded from storage', parsedUser);
        } else {
          console.log('AuthContext: No stored auth data found');
        }
      } catch (error) {
        console.error("AuthContext: Error parsing stored user:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (userData, jwtToken) => {
    console.log('AuthContext login called with:', userData, jwtToken);
    
    if (!userData || !jwtToken) {
      console.error('AuthContext: Invalid login data', { userData, jwtToken });
      return;
    }
    
    try {
      setUser(userData);
      setToken(jwtToken);
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log('AuthContext: User logged in successfully');
    } catch (error) {
      console.error('AuthContext: Error during login', error);
    }
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

