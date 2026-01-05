import './App.css';
import Login from './login';
import Register from './client/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './client/navbar';

function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
