import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/StaticParts/NavBar';
import Footer from './component/StaticParts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/DinamicParts/HomePage';
import Register from './component/DinamicParts/Register';
import Dettaglio from './component/DinamicParts/Dettaglio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dettaglio' element={<Dettaglio />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
