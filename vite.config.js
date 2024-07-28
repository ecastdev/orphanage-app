import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Ensure ESBuild treats .js files as .jsx
    loader: 'jsx',
    include: [
      // Process JSX syntax in .js files under src directory
      /src\/.*\.js$/,
      /src\/.*\.jsx$/,
    ],
  },
  build: {
    outDir: 'build', // Output directory for production build files
  },
});