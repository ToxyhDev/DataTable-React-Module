import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'datatable-react-module',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React', 'react-dom' : 'ReactDOM',
                },
            }
        },
        sourcemap: true,
        emptyOutDir: true,
    }
})
