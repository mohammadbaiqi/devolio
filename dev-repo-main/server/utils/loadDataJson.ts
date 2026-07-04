import { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

export const loadDataJson = async (name: string) => {
    const filePath = path.resolve(
        process.cwd(),
        "server",
        "data",
        name,
        "data.json"
    );

    try {
        const file = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(file);

        return data;
    } catch (err) {
        console.error("ERROR loadDataJson:", err);
        throw err;
    }
}
