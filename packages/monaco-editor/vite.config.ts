import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const watchOptions =
    mode === 'dev'
      ? {
          watch: {
            exclude: 'node_modules/**',
          },
        }
      : {}
  return {
    build: {
      ...watchOptions,
      lib: {
        formats: ['cjs', 'es', 'umd'],
        entry: path.resolve(__dirname, 'src/index.tsx'),
        name: 'MonacoEditor',
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['react', 'react-dom', 'axios', 'lodash'],
        output: {
          exports: 'named',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            axios: 'axios',
            lodash: '_',
          },
        },
      },
    },
    plugins: [react()],
  }
})
