import './styles/App.css';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import BlogCustomization from './pages/BlogCustomization/BlogCustomization';
import BlogView from './pages/BlogView/BlogView';
import Authentication from './pages/Authentication/Authentication';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<main><Landing/></main>} />
            <Route path="/about" element={<main><About/></main>} />
            <Route path="/contact" element={<main><Contact/></main>} />
            <Route path="/login" element={<><Authentication/></>} />
            <Route path="/:username/dashboard" element={<main><Dashboard/></main>} />
            <Route path="/blog-customization" element={<main><BlogCustomization/></main>} />
            <Route path="/blog-view" element={<main><BlogView/></main>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
