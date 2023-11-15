import { defineConfig } from "vite"
export default defineConfig({
    test: {
      browser: {
        enabled: true,
        name: 'edge', // browser name is required
      },
    }
  })