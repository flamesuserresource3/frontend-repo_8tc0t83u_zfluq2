import { useEffect, useRef } from 'react';
import VoicePicker from './VoicePicker';
import EmotionSelector from './EmotionSelector';

export default function LineEditor({ line, onUpdate, onRemove, autoFocus = false }) {
  const ref = useRef(null);
  useEffect(() => {
    if (autoFocus && ref.current) ref.current.focus();
  }, [autoFocus]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-slate-700">Text</label>
          <textarea
            ref={ref}
            value={line.text}
            onChange={(e) => onUpdate({ ...line, text: e.target.value })}
            rows={2}
            className="mt-1 w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
            placeholder="Type the line to speak..."
          />
        </div>
        <VoicePicker
          value={line.voice}
          onChange={(voice) => onUpdate({ ...line, voice })}
        />
        <EmotionSelector
          value={line.emotion}
          onChange={(emotion) => onUpdate({ ...line, emotion })}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
          onClick={() => onUpdate({ ...line, text: '' })}
        >
          Clear
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
            onClick={onRemove}
          >
            Remove line
          </button>
          <button
            type="button"
            className="rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-violet-700"
            onClick={() => alert('This would preview TTS for this line in a full build.')}
          >
            Preview line
          </button>
        </div>
      </div>
    </div>
  );
}
