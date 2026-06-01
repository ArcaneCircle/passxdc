import { buildXDC, mockWebxdc, secureContext } from '@webxdc/vite-plugins';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'dist',
    publicDir: '../app/content',
    build: {
        outDir: '../dist-webxdc-build',
        emptyOutDir: true
    },
    plugins: [
        buildXDC({
            outDir: 'dist-webxdc',
            outFileName: 'passxdc.xdc'
        }),
        mockWebxdc(),
        secureContext()
    ]
});
