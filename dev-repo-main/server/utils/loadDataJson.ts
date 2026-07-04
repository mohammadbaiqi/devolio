import path from "path";
import fs from "fs/promises";
import fsSync from "fs";

function getBaseDir(): string {
    // 1. Coba import.meta.url (kalau berhasil dijalankan sebagai ESM)
    try {
        // @ts-ignore - hanya valid di ESM
        if (typeof import.meta !== "undefined" && import.meta.url) {
            const { fileURLToPath } = require("url");
            return path.dirname(fileURLToPath(import.meta.url));
        }
    } catch {
        // ignore, lanjut ke fallback berikutnya
    }

    // 2. Coba __dirname (kalau di-bundle sebagai CJS)
    // @ts-ignore
    if (typeof __dirname !== "undefined") {
        // @ts-ignore
        return __dirname;
    }

    // 3. Fallback terakhir: cari relatif dari cwd
    return process.cwd();
}

export const loadDataJson = async (name: string) => {
    const baseDir = getBaseDir();

    // Coba beberapa kandidat lokasi, karena struktur bundling Netlify
    // bisa menempatkan folder "data" di level yang berbeda-beda
    const candidates = [
        path.join(baseDir, "data", name, "data.json"),
        path.join(process.cwd(), "dist", "server", "data", name, "data.json"),
        path.join(process.cwd(), "data", name, "data.json"),
    ];

    const filePath = candidates.find((p) => fsSync.existsSync(p));

    if (!filePath) {
        throw new Error(
            `data.json untuk "${name}" tidak ditemukan. Dicoba di:\n${candidates.join("\n")}`
        );
    }

    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
};