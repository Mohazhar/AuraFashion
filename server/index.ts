import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// Handle /favicon.ico requests gracefully (browser auto-requests this)
app.get("/favicon.ico", (_req, res) => {
  res.status(204).end();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // On Vercel, static files are served by the CDN — skip serveStatic entirely.
  // Locally in production, serve from dist/public.
  // In development, use Vite's dev server.
  if (process.env.VERCEL) {
    // Vercel handles static file serving via its CDN
    log("Running on Vercel — static files served by CDN");
  } else if (process.env.NODE_ENV === "production") {
    const { serveStatic } = await import("./static.js");
    serveStatic(app);
  } else {
    // Use a variable path to prevent bundlers from statically analyzing this import
    const vitePath = "./vite.js";
    const { setupVite } = await import(vitePath);
    await setupVite(httpServer, app);
  }

  // Only listen when NOT running on Vercel (Vercel handles this via the export)
  if (!process.env.VERCEL) {
    const port = parseInt(process.env.PORT || "5001", 10);

    httpServer.listen(
      {
        port,
        host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1",
      },
      () => {
        log(`serving on port ${port}`);
      },
    );
  }
})();

// Export the Express app for Vercel Serverless Functions
export default app;