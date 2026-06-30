import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NovaAPI 文档中心',
  description: 'NovaAPI —— 大模型聚合平台 接入文档与使用指南',
  // 独立子域 docs.novaapis.com，根路径部署，base 用 '/'
  base: '/',
  cleanUrls: true,
  lang: 'zh-CN',

  // 标签页图标
  head: [['link', { rel: 'icon', type: 'image/png', href: '/nova.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NovaAPI',
    // 点击 NovaAPI 回主站（不同子域，浏览器直接整页跳转，无需额外处理）
    logoLink: 'https://api.novaapis.com/',

    // 顶部导航
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: 'API 参考', link: '/api/overview' },
      { text: '返回主站', link: 'https://api.novaapis.com/' },
    ],

    // 按路径分套侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '鉴权', link: '/guide/authentication' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [{ text: '概览', link: '/api/overview' }],
        },
      ],
    },

    // 本地全文搜索
    search: {
      provider: 'local',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '本页目录',
    },

    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
