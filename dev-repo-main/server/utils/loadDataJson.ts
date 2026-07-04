import path from "path";
import fs from "fs/promises";
import fsSync from "fs";

export const loadDataJson = async (name: string) => {
    const candidates = [
        path.join(process.cwd(), "dev-repo-main", "server", "data", name, "data.json"),
        path.join(process.cwd(), "server", "data", name, "data.json"),
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