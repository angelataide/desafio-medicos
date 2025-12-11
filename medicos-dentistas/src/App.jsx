import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import Voluntaria from './pages/Voluntaria/Voluntaria'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Usando o novo componente Voluntaria */}
        <Route path="/voluntario" element={<Voluntaria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
