import path from "path";
import fs from "fs/promises";
import fsSync from "fs";

export const loadDataJson = async (name: string) => {
    console.log("cwd:", process.cwd());
    try {
        console.log("isi /var/task:", fsSync.readdirSync("/var/task"));
    } catch (e) {
        console.log("gagal baca /var/task:", (e as Error).message);
    }
    try {
        console.log("isi /var/task/server:", fsSync.readdirSync("/var/task/server"));
    } catch (e) {
        console.log("folder server tidak ada di /var/task:", (e as Error).message);
    }

    const filePath = path.join(process.cwd(), "server", "data", name, "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
};