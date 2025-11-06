import Hero from '../components/Hero';
import Studio from '../components/Studio';
import Footer from '../components/Footer';
import Header from '../components/Header';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <Hero />
      <Studio />
      <Footer />
    </div>
  );
}

export default HomePage;
