interface RoastingResultProps {
  ping: number;
  download: number;
  upload: number;
  onReset: () => void;
}

export default function RoastingResult({ ping, download, upload, onReset }: RoastingResultProps) {
  // Determine roasting message based on download speed
  const getRoastingData = (speed: number) => {
  if (speed < 1) {
    return {
      icon: "🐌",
      emoji: "fa-snail",
      title: "Internet Keong Detected!",
      message:
        "Speed-nya kayak keong lagi nenteng karung pasir. Buka Google aja bisa sempet ngopi dulu!",
      color: "text-red-500",
      bgGradient: "from-red-500/20 to-orange-500/20",
    };
    } else if (speed < 5) {
      return {
        icon: "🐢",
        emoji: "fa-turtle",
        title: "Lumayan Lambat",
        message: "Masih mending, tapi jangan buka YouTube 4K deh... 360p aja bersyukur!",
        color: "text-orange-500",
        bgGradient: "from-orange-500/20 to-yellow-500/20",
      };
    } else if (speed < 30) {
      return {
        icon: "🚗",
        emoji: "fa-car",
        title: "Standar Buat Nonton",
        message: "Lumayan, bisa nonton Netflix tanpa buffering. Tapi jangan harap bisa download genshin impact dengan cepat ya...",
        color: "text-yellow-500",
        bgGradient: "from-yellow-500/20 to-green-500/20",
      };
    } else if (speed < 100) {
      return {
        icon: "🚀",
        emoji: "fa-rocket",
        title: "Udah Mulai Ngebut!",
        message: "Udah mulai ngebut bro, bisa lah buat download genshin... Tapi belum bisa pamer ke tongkronganmu si...",
        color: "text-green-500",
        bgGradient: "from-green-500/20 to-cyan-500/20",
      };
    } else {
      return {
        icon: "🛸",
        emoji: "fa-shuttle-space",
        title: "Alien Technology!",
        message: "Kamu pakai jaringan alien ya?! NASA aja kalah! Tethering dong bree...",
        color: "text-cyan-400",
        bgGradient: "from-cyan-500/20 to-blue-500/20",
      };
    }
  };

  const roastData = getRoastingData(download);

// Ping roasting
const getPingQuality = (ping) => {
  if (ping < 20) return { text: "Dewa 🔥", color: "text-green-400" };
  if (ping < 50) return { text: "Aman 😎", color: "text-lime-400" };
  if (ping < 100) return { text: "Nanggung 😐", color: "text-yellow-400" };
  if (ping < 200) return { text: "Seret 🐢", color: "text-orange-400" };
  return { text: "Mati Rasa 💀", color: "text-red-500" };
};

  const pingQuality = getPingQuality(ping);

  return (
    <div class="w-full max-w-3xl mx-auto p-6 animate-slide-up">
      {/* Main Result Card */}
      <div class={`neon-border rounded-3xl p-8 backdrop-blur-md bg-gradient-to-br ${roastData.bgGradient} bg-slate-900/70`}>
        {/* Icon & Title */}
        <div class="text-center mb-6">
          <div class="text-8xl mb-4 animate-bounce">
            {roastData.icon}
          </div>
          <h2 class={`text-3xl md:text-4xl font-bold mb-2 ${roastData.color} glow-text`}>
            {roastData.title}
          </h2>
          <p class="text-lg md:text-xl text-slate-300 italic">
            "{roastData.message}"
          </p>
        </div>

        {/* Speed Stats */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {/* Download Speed */}
          <div class="text-center">
            <i class="fas fa-download text-4xl text-neon-blue mb-3"></i>
            <p class="text-sm text-slate-400 mb-1">Download</p>
            <p class="text-4xl font-bold text-neon-blue glow-text">
              {download/8}
            </p>
            <p class="text-lg text-slate-400">MB/s</p>
          </div>

          {/* Upload Speed */}
          <div class="text-center">
            <i class="fas fa-upload text-4xl text-neon-purple mb-3"></i>
            <p class="text-sm text-slate-400 mb-1">Upload</p>
            <p class="text-4xl font-bold text-neon-purple glow-text">
              {upload/8}
            </p>
            <p class="text-lg text-slate-400">MB/s</p>
          </div>

          {/* Ping */}
          <div class="text-center">
            <i class="fas fa-signal text-4xl text-neon-cyan mb-3"></i>
            <p class="text-sm text-slate-400 mb-1">Ping</p>
            <p class="text-4xl font-bold text-neon-cyan glow-text">
              {ping}
            </p>
            <p class={`text-lg font-semibold ${pingQuality.color}`}>
              {pingQuality.text}
            </p>
          </div>
        </div>

        {/* Speed Comparison */}
        <div class="bg-slate-800/50 rounded-xl p-4 mb-6">
          <p class="text-center text-sm text-slate-400 mb-2">
            Dengan kecepatan ini, kamu bisa:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-300">
            <div class="flex items-center gap-2">
              <i class={`fas fa-${download >= 5 ? 'check' : 'times'} ${download >= 5 ? 'text-green-400' : 'text-red-400'}`}></i>
              <span>Streaming HD</span>
            </div>
            <div class="flex items-center gap-2">
              <i class={`fas fa-${download >= 25 ? 'check' : 'times'} ${download >= 25 ? 'text-green-400' : 'text-red-400'}`}></i>
              <span>Download Badak</span>
            </div>
            <div class="flex items-center gap-2">
              <i class={`fas fa-${download >= 10 ? 'check' : 'times'} ${download >= 10 ? 'text-green-400' : 'text-red-400'}`}></i>
              <span>Video Call</span>
            </div>
            <div class="flex items-center gap-2">
              <i class={`fas fa-${download >= 100 ? 'check' : 'times'} ${download >= 100 ? 'text-green-400' : 'text-red-400'}`}></i>
              <span>4K Streaming</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onReset}
            class="flex-1 py-4 px-6 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-redo mr-2"></i>
            Tes Lagi
          </button>
          <button
            onClick={() => {
              const text = `⚡ FrugalSpeed Test Result:\n\n${roastData.icon} ${roastData.title}\n"${roastData.message}"\n\n⬇️ Download: ${download} Mbps\n⬆️ Upload: ${upload} Mbps\n📡 Ping: ${ping}ms (${pingQuality.text})\n\nTested on FrugalSpeed.deno.dev`;
              navigator.clipboard.writeText(text);
              alert("Hasil disalin! Siap pamer di grup WhatsApp 😎");
            }}
            class="flex-1 py-4 px-6 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-share mr-2"></i>
            Share Hasil
          </button>
        </div>
      </div>

{/* Fun Facts */}
<div className="mt-6 text-center text-sm text-slate-500">
  <p>
    <i className="fas fa-lightbulb text-yellow-400 mr-2"></i>
    Fun Fact: Dengan kecepatan {download/8} MB/s, kamu butuh sekitar{" "}
    <span className="font-semibold text-slate-300">
      {download > 0 ? Math.ceil((8000 / download)) : "∞"}
    </span>{" "}
    detik buat download file 1GB 😅
  </p>
</div>

    </div>
  );
}