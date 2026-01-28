
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='signin' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
