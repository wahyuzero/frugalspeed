export default function Header() {
  return (
    <header class="w-full py-6 px-4 backdrop-blur-md bg-slate-900/30 border-b border-neon-blue/30">
      <div class="max-w-4xl mx-auto flex items-center justify-center gap-3">
        <i class="fas fa-wifi text-3xl text-neon-blue animate-pulse"></i>
        <h1 class="text-2xl md:text-4xl font-bold glow-text">
          ⚡ FrugalSpeed
        </h1>
      </div>
      <p class="text-center text-sm md:text-base text-slate-400 mt-2">
        Tes Internet Frugal Style
      </p>
    </header>
  );
}