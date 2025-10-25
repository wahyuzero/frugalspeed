import { useState } from "preact/hooks";
import SpeedMeter from "../components/SpeedMeter.tsx";
import RoastingResult from "../components/RoastingResult.tsx";

interface SpeedTestResult {
  ping: number;
  download: number;
  upload: number;
}

/**
 * SpeedTestApp Island Component
 * Island adalah komponen interaktif yang bisa menggunakan hooks dan state
 * Komponen ini akan di-hydrate di client-side
 */
export default function SpeedTestApp() {
  const [testResult, setTestResult] = useState<SpeedTestResult | null>(null);

  const handleTestComplete = (result: SpeedTestResult) => {
    setTestResult(result);
  };

  const handleReset = () => {
    setTestResult(null);
  };

  return (
    <div class="w-full">
      {/* Hero Section */}
      {!testResult && (
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
            Mau tau internet kamu secepat apa?
          </h2>
          <p class="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Ukur kecepatan download, upload, dan ping kamu. 
            Bonus: Roasting gratis! 🔥
          </p>

          {/* Feature Cards */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div class="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-neon-blue/20 hover:border-neon-blue/50 transition-all">
              <i class="fas fa-gauge-high text-3xl text-neon-blue mb-2"></i>
              <h3 class="font-bold text-sm mb-1">Akurat</h3>
              <p class="text-xs text-slate-400">Test real-time</p>
            </div>
            <div class="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-neon-purple/20 hover:border-neon-purple/50 transition-all">
              <i class="fas fa-face-laugh-beam text-3xl text-neon-purple mb-2"></i>
              <h3 class="font-bold text-sm mb-1">Roasting</h3>
              <p class="text-xs text-slate-400">Kalo lemot bakal di roasting</p>
            </div>
            <div class="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all">
              <i class="fas fa-bolt text-3xl text-neon-cyan mb-2"></i>
              <h3 class="font-bold text-sm mb-1">Cepat</h3>
              <p class="text-xs text-slate-400">Hanya butuh beberapa detik</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Speed Test or Result */}
      {!testResult ? (
        <SpeedMeter onTestComplete={handleTestComplete} />
      ) : (
        <RoastingResult
          ping={testResult.ping}
          download={testResult.download}
          upload={testResult.upload}
          onReset={handleReset}
        />
      )}

      {/* Info Section */}
      {!testResult && (
        <div class="mt-12 max-w-2xl mx-auto text-center animate-slide-up">
          <div class="bg-slate-800/20 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 class="text-lg font-bold mb-3 text-neon-cyan">
              <i class="fas fa-info-circle mr-2"></i>
              Tips Untuk Hasil Terbaik
            </h3>
            <ul class="text-sm text-slate-400 space-y-2 text-left">
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span>Tutup aplikasi yang menggunakan internet</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span>Matikan download/upload yang sedang berjalan</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span>Gunakan koneksi WiFi atau data yang stabil</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-400 mt-1"></i>
                <span>Jalankan test beberapa kali untuk hasil lebih akurat</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}