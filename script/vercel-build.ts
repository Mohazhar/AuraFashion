/**
 * Vercel Build Script
 * 
 * 1. Builds the React client with Vite → dist/public (served by Vercel CDN)
 * 2. Bundles the server into a single file api/index.js (serverless function)
 */
import { build } from "esbuild";
import { build as viteBuild } from "vite";
import { readFile, mkdir } from "fs/promises";

async function buildForVercel() {
    // Step 1: Build the React client with Vite
    console.log("📦 Building client with Vite...");
    await viteBuild();
    console.log("✅ Client built to dist/public");

    // Step 2: Bundle the server into a single file for Vercel
    console.log("📦 Bundling server for Vercel...");

    const pkg = JSON.parse(await readFile("package.json", "utf-8"));

    // All npm packages stay as external (Vercel installs them via npm install)
    const allDeps = [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
    ];

    // Ensure api/ directory exists
    await mkdir("api", { recursive: true });

    await build({
        entryPoints: ["server/index.ts"],
        platform: "node",
        bundle: true,
        format: "esm",
        outfile: "api/index.js",
        target: "node18",
        external: allDeps,
        define: {
            "process.env.NODE_ENV": '"production"',
            "process.env.VERCEL": '"1"',
        },
        minify: false,
        logLevel: "info",
        banner: {
            js: "// Bundled by esbuild for Vercel deployment",
        },
    });

    console.log("✅ Server bundled to api/index.js");
    console.log("🚀 Vercel build complete!");
}

buildForVercel().catch((err) => {
    console.error("Vercel build failed:", err);
    process.exit(1);
});
