import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
          AI Voice Agent • Multi-voice • Emotion aware
        </span>
        <h1 className="text-balance bg-gradient-to-br from-slate-900 via-slate-900 to-slate-600 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Craft lifelike speech with emotions per line
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
          Mix multiple voices, direct emotions for each sentence, and preview instantly — a clean, modern studio inspired by ElevenLabs.
        </p>
      </div>
    </section>
  );
}
