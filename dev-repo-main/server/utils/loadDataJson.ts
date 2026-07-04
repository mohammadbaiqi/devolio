import { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

export const loadDataJson = async (name: string) => {
    const filePath = path.join(
        __dirname,
        "..",
        "data",
        name,
        "data.json"
    );

    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);

    return data
}
