import {defineConfig} from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

const config = defineConfig({
  build: {
    minify: false,
    lib: {
      entry: ["./src/index.ts"],
      name: "jest-get-type",
      formats: ['cjs', 'es', 'umd'],
      fileName: (format: string, entryName: string) => `${entryName}.${format}.js`
    },
    sourcemap: true,
    outDir:'build'
  },
  esbuild: {
    jsx: 'automatic',
  },
  plugins: [
    dts({entryRoot: './src', outputDir: './build'})
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});



export default config;
