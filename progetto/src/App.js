import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/StaticParts/NavBar';
import Footer from './component/StaticParts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/DinamicParts/HomePage';
import Register from './component/DinamicParts/Register';
import Dettaglio from './component/DinamicParts/Dettaglio';
import NotFound from './component/DinamicParts/NotFound';
import Profilo from './component/DinamicParts/Profilo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path='/profile' element={<Profilo />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dettaglio' element={<Dettaglio />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
