import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullMapPage from './pages/FullMapPage';
import { DataPage } from './pages/DataPage';
import { Preloader } from './components/Preloader';

import { AboutPage } from './pages/AboutPage';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/map" element={<FullMapPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
