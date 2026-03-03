// Bundled by esbuild for Vercel deployment

// server/index.ts
import express2 from "express";

// server/routes.ts
async function registerRoutes(httpServer2, app2) {
  return httpServer2;
}

// server/static.ts
import express from "express";

// server/index.ts
import { createServer } from "http";
var app = express2();
var httpServer = createServer(app);
app.use(
  express2.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    }
  })
);
app.use(express2.urlencoded({ extended: false }));
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
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
app.get("/favicon.ico", (_req, res) => {
  res.status(204).end();
});
(async () => {
  await registerRoutes(httpServer, app);
  app.use((err, _req, res, next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error("Internal Server Error:", err);
    if (res.headersSent) {
      return next(err);
    }
    return res.status(status).json({ message });
  });
  if (false) {
    serveStatic(app);
  } else if (false) {
    const { setupVite } = await null;
    await setupVite(httpServer, app);
  }
  if (false) {
    const port = parseInt(process.env.PORT || "5001", 10);
    httpServer.listen(
      {
        port,
        host: true ? "0.0.0.0" : "127.0.0.1"
      },
      () => {
        log(`serving on port ${port}`);
      }
    );
  }
})();
var index_default = app;
export {
  index_default as default,
  log
};
