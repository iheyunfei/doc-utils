import { defineConfig } from 'tsup'
import RawPlugin from 'esbuild-plugin-raw'

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  esbuildPlugins: [RawPlugin()],
  clean: true,
})
