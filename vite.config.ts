import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig, mergeConfig } from "vite";

const lovableConfig = defineLovableConfig({
  tanstackStart: { server: { entry: "server" } },
});

export default defineConfig(async (env) => {
  const resolvedLovableConfig = await lovableConfig(env);

  return mergeConfig(resolvedLovableConfig, {
    server: {
      host: "::",
      port: 1007,
    },
    preview: {
      host: "::",
      port: 1007,
      allowedHosts: [
        ".kauanrodrigues.com.br",
        "institutoirmadulce.kauanrodrigues.com.br",
      ],
    },
  });
});