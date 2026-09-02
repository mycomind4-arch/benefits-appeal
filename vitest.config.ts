import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// Resolves the "@/*" -> "./*" path alias declared in tsconfig.json so
// vitest sees the same imports Next.js does. There is no vite.config.ts
// in this project (it's Next.js, not Vite) — this is vitest-only config.
export default defineConfig({
  plugins: [tsconfigPaths()],
});
