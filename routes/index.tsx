import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import SpeedTestApp from "../islands/SpeedTestApp.tsx";

/**
 * Home Page - Route Component (Server-Side)
 * Route components di Fresh tidak bisa menggunakan hooks seperti useState
 * Untuk interaktivity, kita gunakan Island components
 */
export default function Home() {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />

      <main class="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* SpeedTestApp Island - komponen interaktif */}
        <SpeedTestApp />
      </main>

      <Footer />
    </div>
  );
}