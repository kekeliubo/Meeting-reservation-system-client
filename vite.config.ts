import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置别名
    alias: {
      // 将 @ 映射到 /src
      '@': path.resolve(__dirname, 'src')
    }
  }
})
