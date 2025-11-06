import Hero from './components/Hero';
import Studio from './components/Studio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Auraline</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a href="#" className="hover:text-slate-900">Studio</a>
          <a href="#" className="hover:text-slate-900">Voices</a>
          <a href="#" className="hover:text-slate-900">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Log in</button>
          <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">Sign up</button>
        </div>
      </header>

      <Hero />
      <Studio />
      <Footer />
    </div>
  );
}

export default App;
