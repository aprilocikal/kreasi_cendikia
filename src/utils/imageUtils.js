/**
 * Utility untuk konversi gambar ke format WebP di sisi klien (browser)
 * dan upload ke Firebase Storage / Firestore.
 */
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebase";

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
 * dengan kompresi dan resizing otomatis.
 *
 * @param {File} file
 * @param {Object} options
 * @param {number} options.maxWidth
 * @param {number} options.maxHeight
 * @param {number} options.quality (0.1 - 1.0)
 * @returns {Promise<{ dataUrl: string, blob: Blob, originalSize: number, webpSize: number, width: number, height: number, filename: string }>}
 */
export function convertFileToWebP(
  file,
  { maxWidth = 1600, maxHeight = 1600, quality = 0.82 } = {}
) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
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

        // Resize proporsional jika melebihi batas maksimum
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        // Latar belakang putih halus jika ada transparansi PNG
        ctx.fillStyle = "#ffffff";
        ctx.drawImage(img, 0, 0, width, height);

        // Konversi ke WebP Data URL
        const webpDataUrl = canvas.toDataURL("image/webp", quality);

        // Buat Blob untuk keperluan upload ke Firebase Storage jika didukung
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              return reject(new Error("Browser tidak mendukung konversi ke WebP."));
            }

            const cleanName = file.name
              .replace(/\.[^/.]+$/, "")
              .toLowerCase()
              .replace(/[^a-z0-9_-]/g, "_");
            const webpFilename = `${cleanName}.webp`;

            resolve({
              dataUrl: webpDataUrl,
              blob,
              originalSize: file.size,
              webpSize: blob.size,
              width,
              height,
              filename: webpFilename,
            });
          },
          "image/webp",
          quality
        );
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Proses upload gambar:
 * 1. Konversi ke WebP
 * 2. Coba upload ke Firebase Storage
 * 3. Jika Firebase Storage tidak aktif / ada kendala aturan akses, fallback ke WebP DataURL
 */
export async function processAndUploadImage(file, folder = "portofolio") {
  const converted = await convertFileToWebP(file);

  try {
    if (storage) {
      const timestamp = Date.now();
      const storagePath = `${folder}/${timestamp}_${converted.filename}`;
      const storageRef = ref(storage, storagePath);

      // Upload Blob WebP
      const uploadResult = await uploadBytes(storageRef, converted.blob, {
        contentType: "image/webp",
      });

      const downloadUrl = await getDownloadURL(uploadResult.ref);
      return {
        url: downloadUrl,
        storageType: "firebase_storage",
        originalSize: converted.originalSize,
        webpSize: converted.webpSize,
        width: converted.width,
        height: converted.height,
        filename: converted.filename,
      };
    }
  } catch (err) {
    console.warn(
      "Firebase Storage tidak dapat diakses atau diblokir rule. Menggunakan WebP base64 langsung ke database:",
      err
    );
  }

  // Fallback: simpan langsung DataURL WebP (hemat & langsung masuk Firestore / state)
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
