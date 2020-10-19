// vite配置，类似 vue.config.js
// @ts-ignore
import path from 'path'

console.log(path.resolve(__dirname, './src'))

export default {
    base: './',
    // 设置文件夹别名
    alias: {
        '/@/': path.resolve(__dirname, './src')
    }
}
