
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Notes from './components/Notes';
import Planner from './components/Planner';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes - anyone can access */}
          <Route path='/' element={<Main />} />
          <Route path='signin' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='signup' element={<Signup />} />
          
          {/* Protected routes - require login */}
          <Route element={<ProtectedRoute />}>
            <Route path='home' element={<Home />} />
            <Route path='notes' element={<Notes />} />
            <Route path='planner' element={<Planner />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          
          {/* Catch all - redirect to home */}
          <Route path='*' element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
