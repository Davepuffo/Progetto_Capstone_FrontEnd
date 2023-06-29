import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/StaticParts/NavBar';
import Footer from './component/StaticParts/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/DinamicParts/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
