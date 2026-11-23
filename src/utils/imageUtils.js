/**
 * Utility untuk konversi gambar ke format WebP di sisi klien (browser)
 * secara instan dan langsung tersimpan ke database.
 */

/**
 * Format bytes ke ukuran yang mudah dibaca (KB / MB)
 */
export function formatBytes(bytes, decimals = 1) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

/**
 * Konversi File gambar apapun (JPG, PNG, WebP, dll.) menjadi format WebP
 * secara instan di browser dengan ukuran sangat hemat dan tajam.
 *
 * @param {File} file
 * @param {Object} options
 * @param {number} options.maxWidth
 * @param {number} options.maxHeight
 * @param {number} options.quality (0.1 - 1.0)
 */
export function convertFileToWebP(
  file,
  { maxWidth = 1200, maxHeight = 1200, quality = 0.8 } = {}
) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith("image/")) {
      return reject(new Error("File yang dipilih bukan gambar yang valid."));
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Gagal membaca file gambar."));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Gagal memuat gambar ke memori."));
      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        // Resize proporsional jika resolusi terlalu besar (agar hemat & cepat)
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        // Background putih jika gambar sumber transparan
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        try {
          // Konversi instan ke WebP Data URL (hemat, tajam, langsung siap masuk database)
          const webpDataUrl = canvas.toDataURL("image/webp", quality);

          // Hitung perkiraan ukuran byte dari base64
          const head = "data:image/webp;base64,";
          const base64Len = webpDataUrl.length - head.length;
          const approxWebpBytes = Math.round((base64Len * 3) / 4);

          const cleanName = file.name
            .replace(/\.[^/.]+$/, "")
            .toLowerCase()
            .replace(/[^a-z0-9_-]/g, "_");

          resolve({
            dataUrl: webpDataUrl,
            originalSize: file.size,
            webpSize: approxWebpBytes,
            width,
            height,
            filename: `${cleanName}.webp`,
          });
        } catch (convErr) {
          reject(new Error("Browser gagal mengonversi gambar ke WebP: " + convErr.message));
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Proses instan gambar:
 * Konversi ke WebP dan langsung kirimkan data URL untuk disimpan ke database Firestore.
 * Proses hanya membutuhkan ~0.1 - 0.3 detik (tanpa delay atau antrean storage).
 */
export async function processAndUploadImage(file) {
  const converted = await convertFileToWebP(file);

  return {
    url: converted.dataUrl,
    storageType: "data_url",
    originalSize: converted.originalSize,
    webpSize: converted.webpSize,
    width: converted.width,
    height: converted.height,
    filename: converted.filename,
  };
}
