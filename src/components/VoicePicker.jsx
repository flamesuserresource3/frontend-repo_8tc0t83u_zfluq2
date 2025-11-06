import { useMemo } from 'react';

const DEFAULT_VOICES = [
  { id: 'ava', name: 'Ava (Warm)' },
  { id: 'leo', name: 'Leo (Neutral)' },
  { id: 'mia', name: 'Mia (Bright)' },
  { id: 'sam', name: 'Sam (Deep)' },
];

export default function VoicePicker({ value, onChange }) {
  const voices = useMemo(() => DEFAULT_VOICES, []);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">Voice</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
      >
        {voices.map((v) => (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
}
