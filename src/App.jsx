import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Studio from './components/Studio';
import StudioMode from './pages/StudioMode';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Studio />
            </>
          }
        />
        <Route path="/studio" element={<StudioMode />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
