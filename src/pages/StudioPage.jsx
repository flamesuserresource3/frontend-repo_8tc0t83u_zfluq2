import Studio from '../components/Studio';

function StudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="mb-4 mt-8 text-2xl font-semibold tracking-tight text-slate-900">Studio</h1>
        <p className="mb-6 text-slate-600">Craft your script with per-line voice and emotion. Preview lines and get ready to render.</p>
      </div>
      <Studio />
    </div>
  );
}

export default StudioPage;
