type AppLoaderProps = {
  progress: number;
  is3DEnabled: boolean;
};

const AppLoader = ({ progress, is3DEnabled }: AppLoaderProps) => {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className="fixed inset-0 z-999 flex min-h-screen items-center justify-center overflow-hidden bg-black"
      id="app-loader-background"
    >
      <div
        className="pointer-events-none absolute left-0 top-[18%] h-20 w-[36vw] overflow-hidden motion-reduce:hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-y-0 left-0 whitespace-nowrap text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-none tracking-[0.08em] text-royal/10 animate-loader-slide will-change-transform"
          style={{ animationDuration: '9s' }}
        >
          LOADING LOADING LOADING LOADING
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 top-[66%] h-20 w-[36vw] overflow-hidden motion-reduce:hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-y-0 right-0 whitespace-nowrap text-right text-[clamp(2.5rem,5.5vw,5.5rem)] font-black uppercase leading-none tracking-[0.08em] text-lavender/10 animate-loader-slide will-change-transform"
          style={{ animationDuration: '7s', animationDirection: 'reverse' }}
        >
          LOADING LOADING LOADING LOADING
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center"
        id="dragon-container"
      >
        <video
          src="/video/loaderdragon.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="mb-4 h-48 w-48"
        />
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
          {is3DEnabled ? `Loading ${safeProgress}%` : 'Light mode'}
        </p>
      </div>
    </div>
  );
};

export default AppLoader;
