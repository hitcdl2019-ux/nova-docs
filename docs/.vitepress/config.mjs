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
    // 点击 NovaAPI 回主站（不同子域，浏览器直接整页跳转）
    logoLink: 'https://api.novaapis.com/',

    // 顶部导航 —— 四大板块
    nav: [
      { text: '快速开始', link: '/start/introduction' },
      { text: 'API 使用', link: '/api/overview' },
      { text: 'Agent 工具接入', link: '/agent/overview' },
      { text: 'FAQ 与支持', link: '/support/faq' },
      { text: '返回主站', link: 'https://api.novaapis.com/' },
    ],

    // 按路径分套侧边栏 —— 严格对应四大板块
    sidebar: {
      '/start/': [
        {
          text: '快速开始',
          items: [
            { text: '平台简介', link: '/start/introduction' },
            { text: '快速开始', link: '/start/quickstart' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 使用',
          items: [
            { text: '概览', link: '/api/overview' },
            { text: '对话补全', link: '/api/chat' },
            { text: '图像生成', link: '/api/images' },
            { text: '模型列表', link: '/api/models' },
          ],
        },
      ],
      '/agent/': [
        {
          text: 'Agent 工具接入',
          items: [
            { text: '概览', link: '/agent/overview' },
            { text: '函数调用', link: '/agent/function-calling' },
            { text: '框架接入', link: '/agent/frameworks' },
          ],
        },
      ],
      '/support/': [
        {
          text: 'FAQ 与支持',
          items: [
            { text: '常见问题', link: '/support/faq' },
            { text: '错误码', link: '/support/errors' },
            { text: '联系我们', link: '/support/contact' },
          ],
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
