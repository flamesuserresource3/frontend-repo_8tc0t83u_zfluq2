import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-6 py-24 text-center">
      <div>
        <p className="text-sm font-semibold text-violet-600">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Page not found</h1>
        <p className="mt-2 text-base leading-7 text-slate-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold text-slate-900">
            Contact support <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
