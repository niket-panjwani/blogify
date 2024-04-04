import './styles/App.css';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
import Features from './components/Features/Features';
import Login from './pages/Login/Login';
import { AuthProvider } from './config/Auth/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<main><HeroSection /><Features /></main>} />
            <Route path="/login" element={<><Login/></>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
