# ⚡ FrugalSpeed - Internet Speed Test & Roast Analyzer

Web app speedtest dengan tema **futuristik neon** yang bisa mengukur kecepatan internet kamu sekaligus ngasih **roasting** lucu berdasarkan hasil test! 🔥

![Deno](https://img.shields.io/badge/deno-000000?style=for-the-badge&logo=deno&logoColor=white)
![Fresh](https://img.shields.io/badge/Fresh-FFDB1E?style=for-the-badge&logo=deno&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Preview

[Live Demo](https://frugalspeed.deno.dev/)

## 🎯 Fitur Utama

- ⚡ **Real-time Speed Test** - Ukur download, upload, dan ping secara akurat
- 🔥 **Roasting** - Hasil test dengan Roasting
- 🎨 **UI Futuristik** - Tema neon dengan animasi smooth
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **No Database** - Semua proses di client & memory
- 🦕 **Pure Deno** - Tanpa Node.js atau npm

## 🛠️ Teknologi Stack

- **Runtime**: Deno
- **Framework**: Fresh (Deno)
- **Styling**: Tailwind CSS (Twind)
- **UI Components**: Preact
- **Icons**: FontAwesome 6.4
- **Font**: Orbitron (Google Fonts)

## 🚀 Quick Start

### Prerequisites
- Deno 1.37 atau lebih baru

### Installation & Running

1. Clone repository ini
```bash
git clone https://github.com/wahyuzero/frugalspeed.git
cd frugalspeed
```

2. Jalankan development server
```bash
deno task start
```

3. Buka browser di `http://localhost:8000`

### Build untuk Production
```bash
deno task build
```

### Preview Production Build
```bash
deno task preview
```

## 🎨 Customization

### Mengubah Tema Warna
Edit `twind.config.ts`:
```typescript
colors: {
  neon: {
    blue: '#0ea5e9',    // Ubah warna sesuai keinginan
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
  },
}
```

### Mengubah Pesan Roasting
Edit `components/RoastingResult.tsx` di fungsi `getRoastingData()`:
```typescript
if (speed < 1) {
  return {
    message: "Pesan custom kamu di sini!",
    // ...
  };
}
```

### Mengubah Logika Speed Test
Edit `components/SpeedMeter.tsx` di fungsi `testDownload()` dan `testUpload()`.

## 🌐 Deployment

### Deploy ke Deno Deploy

1. Install Deno Deploy CLI
```bash
deno install --global -Arf https://deno.land/x/deploy@1.13.1/deployctl.ts
```

2. Deploy project
```bash
deployctl deploy --project=frugalspeed main.ts
```

3. Akses di `https://frugalspeed.deno.dev`


## 📝 License

MIT License - Feel free to use this project for anything!

## 👨‍💻 Credits
Built with:
- [Deno](https://deno.land/) 🦕
- [Fresh Framework](https://fresh.deno.dev/) 🍋
- [Tailwind CSS](https://tailwindcss.com/) 🎨
- [FontAwesome](https://fontawesome.com/) 🎭

## 🤝 Contributing

Contributions welcome! Silakan buat PR atau issue jika ada bug atau saran fitur baru.

## 📞 Support

Ada masalah? Buka issue di repository ini atau hubungi [FrugalDev](https://frugaldev.biz.id/).

---

**⚡ FrugalSpeed** - Karena internet lemot itu biasa, yang penting punya mental kuat! 💪