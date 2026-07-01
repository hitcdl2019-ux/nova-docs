import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 独立子域 docs.novaapis.com，根路径部署，base 用 '/'
  base: '/',
  cleanUrls: true,

  // 标签页图标
  head: [['link', { rel: 'icon', type: 'image/png', href: '/nova.png' }]],

  // 多语言：中文为默认（根目录），英文在 /en/
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'NovaAPI 文档中心',
      description: 'NovaAPI —— 大模型聚合平台 接入文档与使用指南',
      themeConfig: {
        nav: [
          { text: '快速开始', link: '/start/introduction' },
          { text: 'API 使用', link: '/api/overview' },
          { text: 'Agent 工具接入', link: '/agent/overview' },
          { text: 'FAQ 与支持', link: '/support/faq' },
          { text: '返回主站', link: 'https://api.novaapis.com/' },
        ],
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
                { text: 'Claude Code', link: '/agent/claude-code' },
                { text: 'Codex', link: '/agent/codex' },
                { text: 'OpenClaw', link: '/agent/openclaw' },
                { text: 'Hermes', link: '/agent/hermes' },
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
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '本页目录' },
        returnToTopLabel: '回到顶部',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        langMenuLabel: '切换语言',
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'NovaAPI Docs',
      description: 'NovaAPI — LLM aggregation platform. Integration docs and guides.',
      themeConfig: {
        nav: [
          { text: 'Get Started', link: '/en/start/introduction' },
          { text: 'API Usage', link: '/en/api/overview' },
          { text: 'Agent & Tools', link: '/en/agent/overview' },
          { text: 'FAQ & Support', link: '/en/support/faq' },
          { text: 'Main Site', link: 'https://api.novaapis.com/' },
        ],
        sidebar: {
          '/en/start/': [
            {
              text: 'Get Started',
              items: [
                { text: 'Introduction', link: '/en/start/introduction' },
                { text: 'Quickstart', link: '/en/start/quickstart' },
              ],
            },
          ],
          '/en/api/': [
            {
              text: 'API Usage',
              items: [
                { text: 'Overview', link: '/en/api/overview' },
                { text: 'Chat Completions', link: '/en/api/chat' },
                { text: 'Image Generation', link: '/en/api/images' },
                { text: 'Models', link: '/en/api/models' },
              ],
            },
          ],
          '/en/agent/': [
            {
              text: 'Agent & Tools',
              items: [
                { text: 'Overview', link: '/en/agent/overview' },
                { text: 'Claude Code', link: '/en/agent/claude-code' },
                { text: 'Codex', link: '/en/agent/codex' },
                { text: 'OpenClaw', link: '/en/agent/openclaw' },
                { text: 'Hermes', link: '/en/agent/hermes' },
              ],
            },
          ],
          '/en/support/': [
            {
              text: 'FAQ & Support',
              items: [
                { text: 'FAQ', link: '/en/support/faq' },
                { text: 'Error Codes', link: '/en/support/errors' },
                { text: 'Contact Us', link: '/en/support/contact' },
              ],
            },
          ],
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
        langMenuLabel: 'Change language',
      },
    },
  },

  // 跨语言共享的主题配置
  themeConfig: {
    siteTitle: 'NovaAPI',
    // 点击 NovaAPI 回主站（不同子域，浏览器直接整页跳转）
    logoLink: 'https://api.novaapis.com/',
    // 本地全文搜索（含中英文界面文案）
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },
  },
})
