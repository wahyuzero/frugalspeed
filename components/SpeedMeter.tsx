import { useState } from "preact/hooks";

interface SpeedMeterProps {
  onTestComplete: (result: SpeedTestResult) => void;
}

interface SpeedTestResult {
  ping: number;
  download: number;
  upload: number;
}

export default function SpeedMeter({ onTestComplete }: SpeedMeterProps) {
  const [testing, setTesting] = useState(false);
  const [status, setStatus] = useState("Siap untuk memulai tes");
  const [progress, setProgress] = useState(0);
  const [currentPing, setCurrentPing] = useState(0);
  const [currentDownload, setCurrentDownload] = useState(0);
  const [currentUpload, setCurrentUpload] = useState(0);

  const startTest = async () => {
    setTesting(true);
    setProgress(0);
    setCurrentPing(0);
    setCurrentDownload(0);
    setCurrentUpload(0);

    try {
      // Step 1: Test Ping
      setStatus("🔍 Mengukur ping...");
      setProgress(10);
      const pingResult = await testPing();
      setCurrentPing(pingResult);
      setProgress(33);

      // Step 2: Test Download
      setStatus("⬇️ Mengukur kecepatan download...");
      const downloadResult = await testDownload();
      setCurrentDownload(downloadResult);
      setProgress(66);

      // Step 3: Test Upload
      setStatus("⬆️ Mengukur kecepatan upload...");
      const uploadResult = await testUpload();
      setCurrentUpload(uploadResult);
      setProgress(100);

      setStatus("✅ Tes selesai!");

      // Send results
      setTimeout(() => {
        onTestComplete({
          ping: pingResult,
          download: downloadResult,
          upload: uploadResult,
        });
        setTesting(false);
      }, 500);
    } catch (error) {
      setStatus("❌ Gagal melakukan tes");
      setTesting(false);
      console.error(error);
    }
  };

const testPing = async (): Promise<number> => {
  const url = "https://google.com";
  const samples = 18; // jumlah ping
  const results: number[] = [];

  // Buang ping pertama (warm-up)
  try {
    await fetch(url, { method: "HEAD", cache: "no-cache" });
  } catch (_) {}

  for (let i = 0; i < samples; i++) {
    const start = performance.now();
    try {
      await fetch(url, { method: "HEAD", cache: "no-cache" });
    } catch (_) {}
    const end = performance.now();
    results.push(end - start);
    await new Promise((r) => setTimeout(r, 100)); // jeda antar ping 100ms
  }

  // Ambil median atau average
  results.sort((a, b) => a - b);
  const trimmed = results.slice(2, -2); // buang 2 terendah & 2 tertinggi
  const avg = trimmed.reduce((a, b) => a + b, 0) / trimmed.length;

  return Math.round(avg);
};


  const testDownload = async (): Promise<number> => {
    // Simulate download test dengan mengambil data dari API
    const sizes = [100, 500, 1000]; // KB
    let totalSpeed = 0;

    for (const size of sizes) {
      const start = performance.now();
      try {
        const response = await fetch(`/api/speedtest?size=${size}`);
        await response.arrayBuffer();
        const end = performance.now();
        const duration = (end - start) / 1000; // seconds
        const speedMbps = ((size * 8) / 1000) / duration; // Mbps
        totalSpeed += speedMbps;
        
        // Update real-time display
        setCurrentDownload(Math.round(totalSpeed / sizes.indexOf(size) + 1));
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (e) {
        console.error(e);
      }
    }

    return Math.round(totalSpeed / sizes.length);
  };

  const testUpload = async (): Promise<number> => {
    // Simulate upload test
    const sizes = [50, 100, 200]; // KB
    let totalSpeed = 0;

    for (const size of sizes) {
      const start = performance.now();
      try {
        const data = new Uint8Array(size * 1024).fill(0);
        await fetch("/api/speedtest", {
          method: "POST",
          body: data,
        });
        const end = performance.now();
        const duration = (end - start) / 1000;
        const speedMbps = ((size * 8) / 1000) / duration;
        totalSpeed += speedMbps;
        
        // Update real-time display
        setCurrentUpload(Math.round(totalSpeed / (sizes.indexOf(size) + 1)));
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (e) {
        console.error(e);
      }
    }

    return Math.round(totalSpeed / sizes.length);
  };

  return (
    <div class="w-full max-w-2xl mx-auto p-6 animate-slide-up">
      {/* Main Test Button */}
      {!testing && (
        <button
          onClick={startTest}
          class="w-full py-6 px-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl font-bold text-xl md:text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow-pulse"
        >
          <i class="fas fa-rocket mr-3"></i>
          Mulai Tes Sekarang
        </button>
      )}

      {/* Testing Display */}
      {testing && (
        <div class="space-y-6">
          {/* Status Text */}
          <div class="text-center">
            <p class="text-xl md:text-2xl font-bold text-neon-cyan mb-2">
              {status}
            </p>
            <div class="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Real-time Stats */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Ping */}
            <div class="neon-border rounded-xl p-4 backdrop-blur-sm bg-slate-900/50">
              <div class="flex items-center justify-between mb-2">
                <i class="fas fa-signal text-2xl text-neon-cyan"></i>
                <span class="text-sm text-slate-400">Ping</span>
              </div>
              <p class="text-3xl font-bold text-neon-cyan">
                {currentPing}
                <span class="text-lg ml-1">ms</span>
              </p>
            </div>

            {/* Download */}
            <div class="neon-border rounded-xl p-4 backdrop-blur-sm bg-slate-900/50">
              <div class="flex items-center justify-between mb-2">
                <i class="fas fa-download text-2xl text-neon-blue"></i>
                <span class="text-sm text-slate-400">Download</span>
              </div>
              <p class="text-3xl font-bold text-neon-blue">
                {currentDownload/8}
                <span class="text-lg ml-1">MB/s</span>
              </p>
            </div>

            {/* Upload */}
            <div class="neon-border rounded-xl p-4 backdrop-blur-sm bg-slate-900/50">
              <div class="flex items-center justify-between mb-2">
                <i class="fas fa-upload text-2xl text-neon-purple"></i>
                <span class="text-sm text-slate-400">Upload</span>
              </div>
              <p class="text-3xl font-bold text-neon-purple">
                {currentUpload/8}
                <span class="text-lg ml-1">MB/s</span>
              </p>
            </div>
          </div>

          {/* Loading Animation */}
          <div class="flex justify-center">
            <div class="relative">
              <i class="fas fa-circle-notch fa-spin text-6xl text-neon-blue"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}