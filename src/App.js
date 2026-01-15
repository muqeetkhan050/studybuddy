
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Register from './pages/Register';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='signin' element={<Signup />} />
        <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
