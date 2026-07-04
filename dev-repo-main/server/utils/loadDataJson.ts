import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadDataJson = async (name: string) => {
    const filePath = path.join(__dirname, "data", name, "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
};