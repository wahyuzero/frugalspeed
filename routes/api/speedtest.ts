import { HandlerContext } from "$fresh/server.ts";

/**
 * API endpoint untuk speedtest
 * GET - Mengirimkan dummy data untuk test download
 * POST - Menerima data untuk test upload
 */

export const handler = {
  /**
   * GET handler - untuk test download speed
   * Query params: size (dalam KB)
   */
  GET: async (req: Request, _ctx: HandlerContext) => {
    const url = new URL(req.url);
    const sizeParam = url.searchParams.get("size");
    const sizeKB = sizeParam ? parseInt(sizeParam) : 10000;

    // Generate dummy data sesuai ukuran yang diminta
    // Ini akan digunakan untuk mengukur kecepatan download
    const dummyData = new Uint8Array(sizeKB * 1024);
    
    // Fill dengan random data untuk mencegah kompresi
    for (let i = 0; i < dummyData.length; i++) {
      dummyData[i] = Math.floor(Math.random() * 256);
    }

    // Return dengan header yang tepat
    return new Response(dummyData, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": dummyData.length.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  },

  /**
   * POST handler - untuk test upload speed
   * Body: Binary data
   */
  POST: async (req: Request, _ctx: HandlerContext) => {
    try {
      // Terima data upload
      const data = await req.arrayBuffer();
      const sizeKB = data.byteLength / 1024;

      // Return response sukses dengan info ukuran
      return new Response(
        JSON.stringify({
          success: true,
          received: sizeKB,
          message: "Upload test completed",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Upload test failed",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};