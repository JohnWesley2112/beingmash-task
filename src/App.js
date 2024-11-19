import './App.css';
import Home from './pages/Home'
import Footer from './components/Footer';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <div className="component-container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
