import path from "path";
import fs from "fs/promises";

export const loadDataJson = async (name: string) => {
    const filePath = path.join(process.cwd(), "server", "data", name, "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
};