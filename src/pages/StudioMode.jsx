import { useMemo, useState } from 'react';
import { Play, Plus, Download, Save, Trash2 } from 'lucide-react';
import LineEditor from '../components/LineEditor';

const newLine = (idx) => ({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + idx), text: '', voice: 'ava', emotion: 'neutral' });

export default function StudioMode() {
  const [title, setTitle] = useState('Untitled Project');
  const [lines, setLines] = useState([newLine(0)]);

  const canRender = useMemo(() => lines.some((l) => l.text.trim().length > 0), [lines]);

  const updateLine = (id, next) => setLines((prev) => prev.map((l) => (l.id === id ? next : l)));
  const removeLine = (id) => setLines((prev) => prev.filter((l) => l.id !== id));
  const addLine = () => setLines((prev) => [...prev, newLine(prev.length)]);
  const clearAll = () => setLines([newLine(0)]);

  const handleRender = () => {
    alert('Rendering multi-voice, emotion-aware speech for Studio Mode.');
  };

  const handleExport = () => {
    alert('Exporting synthesized audio...');
  };

  const handleSave = () => {
    alert('Saving project (placeholder).');
  };

  return (
    <section className="mx-auto w-full max-w-6xl pb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full max-w-sm rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Project title"
          />
          <div className="ml-4 flex items-center gap-2">
            <button onClick={handleSave} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
              <Save size={16} /> Save
            </button>
            <button onClick={clearAll} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-rose-600 ring-1 ring-inset ring-rose-200 hover:bg-rose-50">
              <Trash2 size={16} /> Clear
            </button>
            <button onClick={handleRender} disabled={!canRender} className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50">
              <Play size={16} /> Render
            </button>
            <button onClick={handleExport} disabled={!canRender} className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-50">
              <Download size={16} /> Export
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Script</h2>
            <p className="text-sm text-slate-600">Better input experience: per-line controls, keyboard friendly, and focused.</p>
          </div>
          <button onClick={addLine} className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">
            <Plus size={16} /> Add line
          </button>
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
