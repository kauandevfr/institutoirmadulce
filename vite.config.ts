import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  vite: {
    server: { allowedHosts: ["institutoirmadulce.kauanrodrigues.com.br"] },
    preview: { allowedHosts: ["institutoirmadulce.kauanrodrigues.com.br"] },
  },
  nitro: {
    preset: "node-server",
  },
});
