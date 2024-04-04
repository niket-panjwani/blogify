import './styles/App.css';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
import Features from './components/Features/Features';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<main><HeroSection /><Features /></main>} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
