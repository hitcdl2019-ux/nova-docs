# NovaAPI 文档中心

NovaAPI 文档中心源码，基于 [VitePress](https://vitepress.dev/) 构建，部署在 Cloudflare Pages，访问地址：<https://docs.novaapis.com>。

## 技术与部署

- **框架**：VitePress 1.6.x（`base: '/'`，`cleanUrls: true`，独立子域部署）
- **托管**：Cloudflare Pages，绑定自定义域 `docs.novaapis.com`，**直连 GitHub 自动构建**（无需 Worker）
  - Build command：`npm run docs:build`
  - Output directory：`docs/.vitepress/dist`
- **发布方式**：向 `main` 分支 `push` 即触发自动构建部署
- **多语言**：中文为默认（根目录），英文在 `/en/`，导航栏自动显示语言切换

## 本地开发

```bash
npm install            # 首次安装依赖
npm run docs:dev       # 本地预览 http://localhost:5173（热更新）
npm run docs:build     # 本地构建，验证产物
npm run docs:preview   # 预览构建产物
```

## 目录结构

```
docs/
├─ index.md                 # 中文首页（home 布局）
├─ public/
│  └─ nova.png              # 站点 favicon（引用写 /nova.png）
├─ .vitepress/
│  └─ config.mjs            # 全部配置：nav、sidebar、i18n locales、搜索
│
├─ start/                   # 板块一：快速开始
│  ├─ introduction.md
│  └─ quickstart.md
├─ api/                     # 板块二：API 使用
│  ├─ overview.md
│  ├─ chat.md
│  ├─ images.md
│  └─ models.md
├─ agent/                   # 板块三：Agent 工具接入
│  ├─ overview.md
│  ├─ function-calling.md
│  └─ frameworks.md
├─ support/                 # 板块四：FAQ 与支持
│  ├─ faq.md
│  ├─ errors.md
│  └─ contact.md
│
└─ en/                      # 英文版（结构与中文完全镜像）
   ├─ index.md
   ├─ start/ …
   ├─ api/ …
   ├─ agent/ …
   └─ support/ …
```

> **四大板块**：快速开始 / API 使用 / Agent 工具接入 / FAQ 与支持。
> 不要新增第五个顶级板块；鉴权等内容并入「快速开始」，不单独成板块。

## 如何新增 / 修改内容

### 1. 新增一篇中文文档

在对应板块目录新建 `.md`，例如 `docs/api/embeddings.md`，开头直接写 Markdown：

```markdown
# 文本向量化

正文……
```

### 2. 登记到侧边栏

只建文件不会显示，必须在 `docs/.vitepress/config.mjs` 里 **`locales.root.themeConfig.sidebar`** 的对应板块 `items` 中加一行：

```js
'/api/': [
  {
    text: 'API 使用',
    items: [
      { text: '概览', link: '/api/overview' },
      { text: '对话补全', link: '/api/chat' },
      { text: '文本向量化', link: '/api/embeddings' },  // ← 新增
    ],
  },
],
```

> 规则：`link` 用 **去掉 `.md`、以 `/` 开头** 的路径。`docs/api/embeddings.md` → `/api/embeddings`。

### 3. 同步英文版（必须）

每篇中文页面都要在 `docs/en/` 下放一个 **同路径** 的英文版：

- `docs/api/embeddings.md` → `docs/en/api/embeddings.md`

并在 `config.mjs` 的 **`locales.en.themeConfig.sidebar`** 对应板块加一行（链接带 `/en/` 前缀）：

```js
'/en/api/': [
  {
    text: 'API Usage',
    items: [
      // …
      { text: 'Embeddings', link: '/en/api/embeddings' },  // ← 新增
    ],
  },
],
```

> 中英文 sidebar 是**两套独立配置**，新增页面要两边都登记，否则该语言下不显示。

### 4. 新开一个顶级板块（一般不需要）

如确需新板块，要同时改两处 locale 的 `nav` 和 `sidebar`，并在 `docs/` 与 `docs/en/` 各建对应目录。

### 5. 插入图片

图片放 `docs/public/`，Markdown 里用绝对路径引用：

```markdown
![示意图](/my-image.png)
```

## 发布流程

```bash
git add .
git commit -m "说明本次改动"
git push
```

push 后 Cloudflare Pages 自动构建，几分钟内 <https://docs.novaapis.com> 生效。若内容已更新但页面未变，到 Cloudflare 后台 **Purge Everything** 清边缘缓存，或浏览器 `Ctrl + Shift + R` 强刷。

## 常用约定速查

| 事项 | 约定 |
| --- | --- |
| 顶级板块 | 固定四个，不随意增减 |
| 文档链接 | 去 `.md`、以 `/` 开头；英文带 `/en/` 前缀 |
| 新增页面 | 建文件 + 中英文 sidebar 都登记 |
| favicon | `docs/public/nova.png`，引用 `/nova.png` |
| 点击 NovaAPI | 回主站 `https://api.novaapis.com/`（config 中 `logoLink`） |
