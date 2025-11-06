import { useMemo, useState } from 'react';
import { Play, Plus, Download } from 'lucide-react';
import LineEditor from './LineEditor';

const newLine = (idx) => ({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + idx), text: '', voice: 'ava', emotion: 'neutral' });

export default function Studio() {
  const [lines, setLines] = useState([newLine(0)]);

  const canRender = useMemo(() => lines.some((l) => l.text.trim().length > 0), [lines]);

  const updateLine = (id, next) => setLines((prev) => prev.map((l) => (l.id === id ? next : l)));
  const removeLine = (id) => setLines((prev) => prev.filter((l) => l.id !== id));
  const addLine = () => setLines((prev) => [...prev, newLine(prev.length)]);

  const handleRender = () => {
    // Placeholder for backend call. The UI is prepared for integration.
    alert('Rendering multi-voice, emotion-aware speech. Backend integration comes next.');
  };

  const handleExport = () => {
    // Placeholder export – would download the stitched audio.
    alert('Exporting synthesized audio...');
  };

  return (
    <section className="relative mx-auto -mt-10 w-full max-w-6xl px-6 pb-24">
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Studio</h2>
            <p className="text-sm text-slate-600">Direct voices and emotions line-by-line. Preview and export when ready.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={addLine}
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-black"
            >
              <Plus size={16} /> Add line
            </button>
            <button
              onClick={handleRender}
              disabled={!canRender}
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Play size={16} /> Render preview
            </button>
            <button
              onClick={handleExport}
              disabled={!canRender}
              className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download size={16} /> Export
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {lines.map((line, idx) => (
            <LineEditor
              key={line.id}
              line={line}
              autoFocus={idx === lines.length - 1}
              onUpdate={(next) => updateLine(line.id, next)}
              onRemove={() => removeLine(line.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
