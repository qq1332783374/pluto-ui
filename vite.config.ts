// vite配置，类似 vue.config.js
import * as path from 'path'

const resolve = (pathName) => path.resolve(__dirname, pathName)

export default {
  base: './',
  // 设置文件夹别名
  alias: {
    '/@/': resolve('./src'),
    '/@views/': resolve('./src/views'),
    '/@comp/': resolve('./src/components')
  }
}
