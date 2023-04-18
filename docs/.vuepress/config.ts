import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Quintessence All In One',
    description: '元素法典 - Quintessence All In One',
    base: '/QuintessenceAllInOne/',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/'
            }
        ],
        sidebar: [
            {
                text: 'home',
                link: '/home'
            }
        ]
    })
});