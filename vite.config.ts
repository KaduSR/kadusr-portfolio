import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Sem a propriedade 'base', pois o site estará na raiz do domínio.
  plugins: [react()],
});
