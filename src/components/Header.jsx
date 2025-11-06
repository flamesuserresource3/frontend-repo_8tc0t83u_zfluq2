import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
        <span className="text-lg font-semibold tracking-tight text-slate-900">Auraline</span>
      </Link>
      <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
        <NavLink
          to="/studio"
          className={({ isActive }) =>
            `hover:text-slate-900 ${isActive ? 'text-slate-900 font-medium' : ''}`
          }
        >
          Studio
        </NavLink>
        <a href="#voices" className="hover:text-slate-900">Voices</a>
        <a href="#pricing" className="hover:text-slate-900">Pricing</a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Log in</button>
        <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
