import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Motorsports from './pages/Motorsports';
import Fleets from './pages/Fleets';
import Drones from './pages/Drones';
import Residential from './pages/Residential';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
    // In React Router v6, ScrollRestoration handles this usually, 
    // but explicit effect often safer for hash routing
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-lux-bg text-white font-sans selection:bg-lux-accent selection:text-black">
        <Navbar />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/motorsports" element={<Motorsports />} />
                <Route path="/fleets" element={<Fleets />} />
                <Route path="/drones" element={<Drones />} />
                <Route path="/residential" element={<Residential />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;