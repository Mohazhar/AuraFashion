/**
 * Vercel Build Script
 * 
 * Bundles the server into a single file (api/index.js) so that
 * Vercel has ZERO module resolution to do at runtime.
 * All local imports (routes, storage, schema) get inlined by esbuild.
 */
import { build } from "esbuild";
import { readFile, mkdir } from "fs/promises";

async function buildForVercel() {
    const pkg = JSON.parse(await readFile("package.json", "utf-8"));

    // All npm packages stay as external (Vercel installs them via npm install)
    const allDeps = [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
    ];

    // Ensure api/ directory exists
    await mkdir("api", { recursive: true });

    console.log("Bundling server for Vercel...");

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
        // Keep readable for debugging
        minify: false,
        logLevel: "info",
        // Ensure proper ESM banner for compatibility
        banner: {
            js: "// Bundled by esbuild for Vercel deployment",
        },
    });

    console.log("✅ Server bundled to api/index.js");
}

buildForVercel().catch((err) => {
    console.error("Vercel build failed:", err);
    process.exit(1);
});
