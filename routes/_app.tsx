import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="FrugalSpeed - Tes kecepatan internet dengan style roasting yang kocak!" />
        <meta name="keywords" content="speedtest, internet speed, bandwidth test, ping test" />
        <title>⚡ FrugalSpeed - Internet Speed Test & Roast Analyzer</title>
        
        {/* Google Fonts - Orbitron */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap" rel="stylesheet" />
        
        {/* FontAwesome Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        <style dangerouslySetInnerHTML={{__html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Orbitron', sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            min-height: 100vh;
            color: #e2e8f0;
            overflow-x: hidden;
          }
          
          /* Animated background particles */
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(2px 2px at 20% 30%, #0ea5e9, transparent),
              radial-gradient(2px 2px at 60% 70%, #a855f7, transparent),
              radial-gradient(1px 1px at 50% 50%, #06b6d4, transparent),
              radial-gradient(1px 1px at 80% 10%, #ec4899, transparent);
            background-size: 200px 200px;
            animation: particle-float 20s linear infinite;
            opacity: 0.3;
            z-index: -1;
          }
          
          @keyframes particle-float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-200px); }
          }
          
          .glow-text {
            text-shadow: 0 0 10px rgba(14, 165, 233, 0.8),
                         0 0 20px rgba(14, 165, 233, 0.5),
                         0 0 30px rgba(14, 165, 233, 0.3);
          }
          
          .neon-border {
            border: 2px solid #0ea5e9;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.5),
                        inset 0 0 10px rgba(14, 165, 233, 0.2);
          }
        `}} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}