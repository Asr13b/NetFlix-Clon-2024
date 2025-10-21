import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace '/NetFlix-Clon-2024/' with your repo name
export default defineConfig({
  base: "/NetFlix-Clon-2024/",
  plugins: [react()],
});
