import './App.css';
import Login from './login';
import Register from './client/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './client/navbar';
import Home from './client/home';
import Contact from './client/contact';


function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
