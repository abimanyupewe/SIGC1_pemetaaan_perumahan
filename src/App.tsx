import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FullMapPage from './pages/FullMapPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/map" element={<FullMapPage />} />
      {/* Add more routes here if needed, e.g., <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}

export default App;
