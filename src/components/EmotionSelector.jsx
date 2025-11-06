const EMOTIONS = [
  { id: 'neutral', label: 'Neutral', color: 'bg-slate-200 text-slate-800' },
  { id: 'happy', label: 'Happy', color: 'bg-yellow-200 text-yellow-900' },
  { id: 'sad', label: 'Sad', color: 'bg-blue-200 text-blue-900' },
  { id: 'angry', label: 'Angry', color: 'bg-red-200 text-red-900' },
  { id: 'fear', label: 'Fear', color: 'bg-purple-200 text-purple-900' },
  { id: 'surprise', label: 'Surprise', color: 'bg-pink-200 text-pink-900' },
];

export default function EmotionSelector({ value = 'neutral', onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">Emotion</label>
      <div className="flex flex-wrap gap-2">
        {EMOTIONS.map((e) => {
          const active = value === e.id;
          return (
            <button
              key={e.id}
              type="button"
              onClick={() => onChange(e.id)}
              className={`rounded-full px-3 py-1 text-sm transition-all ${
                active
                  ? `${e.color} ring-2 ring-offset-2 ring-violet-300`
                  : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
              }`}
            >
              {e.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
