import "dotenv/config";
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { loadDataJson } from "./utils/loadDataJson";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get(
    "/api/overview/:name", async (req: Request<{ name: string }>, res: Response) => {
      try {
        const { name } = req.params
        const data = await loadDataJson(name);
        res.json(data.overview);
      } catch (error) {
        console.error(error);

        res.status(500).json({
          message: error instanceof Error ? error.message : String(error)
        });
      }
    }
  );

  app.get("/api/about/:name", async (req: Request<{ name: string }>, res: Response) => {
      try {
        const { name } = req.params
        const data = await loadDataJson(name);

        res.json(data.about);
      } catch (error) {
        res.status(404).json({
          message: "Portfolio not found"
        });
      }
    }
  );
  app.get("/api/portofolio/:name", async (req: Request<{ name: string }>, res: Response) => {
      try {
        const { name } = req.params
        const data = await loadDataJson(name);

        res.json(data.portofolio);
      } catch (error) {
        res.status(404).json({
          message: "Portfolio not found"
        });
      }
    }
  );

  app.get(
    "/api/portofolio/:name/:portoId", async (req: Request<{ name: string; portoId: string }>,res: Response) => {
      try {
        const { name, portoId } = req.params
        const data = await loadDataJson(name);

        console.log(portoId)
        const detail = data.portofolio.projectDetails[portoId];
        res.json(detail);
      } catch (error) {
        res.status(404).json({
          message: "Portfolio not found"
        });
      }
    }
  );

  app.get("/api/contact/:name", async (req: Request<{ name: string }>, res: Response) => {
      try {
        const { name } = req.params
        const data = await loadDataJson(name);

        res.json(data.footer);
      } catch (error) {
        res.status(404).json({
          message: "Portfolio not found"
        });
      }
    });

  app.get("/api/demo", handleDemo);

  return app;
}
