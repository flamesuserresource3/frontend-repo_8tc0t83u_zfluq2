import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function StudioShell() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <div className="mx-auto w-full max-w-6xl px-6">
        <Outlet />
      </div>
    </div>
  );
}
