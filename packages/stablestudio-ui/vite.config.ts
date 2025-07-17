import * as ChildProcess from "child_process";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const gitHash = ChildProcess.execSync("git rev-parse HEAD").toString().trim();

  // Load environment variables from .env files
  const env = loadEnv(mode, process.cwd());

  // Merge with process.env to include variables set at build time (like in Vercel)
  process.env = {
    ...process.env,
    ...env,
    VITE_GIT_HASH: gitHash,
  };

  return {
    build: { target: "es2020" },

    server: {
      port: 3000,
      fs: { strict: false },
    },

    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
      },
    },

    // Explicitly define environment variables that should be embedded in the build
    define: {
      "import.meta.env.VITE_STABILITY_API_KEY": JSON.stringify(
        process.env.VITE_STABILITY_API_KEY || ""
      ),
      "import.meta.env.VITE_GIT_HASH": JSON.stringify(gitHash),
      "import.meta.env.VITE_USE_EXAMPLE_PLUGIN": JSON.stringify(
        process.env.VITE_USE_EXAMPLE_PLUGIN || "false"
      ),
      "import.meta.env.VITE_USE_WEBUI_PLUGIN": JSON.stringify(
        process.env.VITE_USE_WEBUI_PLUGIN || "false"
      ),
    },

    plugins: [tsconfigPaths(), react({ jsxImportSource: "@emotion/react" })],
  };
});
