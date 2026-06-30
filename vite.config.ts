import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    server: {
      host: "::",
      port: 1003,
    },

    preview: {
      host: "::",
      port: 1003,
      allowedHosts: [
        ".kauanrodrigues.com.br",
        "institutoirmadulce.kauanrodrigues.com.br",
      ],
    },
  },
});