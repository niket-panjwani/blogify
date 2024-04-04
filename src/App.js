import './styles/App.css';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { AuthProvider } from './config/Auth/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<main><Landing/></main>} />
            <Route path="/about" element={<main><About/></main>} />
            <Route path="/contact" element={<main><Contact/></main>} />
            <Route path="/login" element={<><Login/></>} />
            <Route path="/dashboard" element={<main><Dashboard/></main>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
