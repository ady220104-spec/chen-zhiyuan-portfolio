# 陈志远个人网页 — 部署说明（交接 Claude Code）

纯静态站点，无构建步骤。整个 `vercel-site/` 文件夹即为可直接上线的产物。

## 目录结构（三页站点：首页 hub + 两个内页）
```
vercel-site/
├── index.html      首页（hub：Hero + 关于 + 三张入口卡 + 联系二维码）
├── method.html     交易方法内页（四步决策 + 五条原则 + 历程 + 复盘）
├── cases.html      实盘案例内页（六笔交割单 + 每日简报 + 线下实录）
├── support.js      DC 运行时（三页都依赖，勿删）
├── vercel.json     Vercel 静态配置（cleanUrls + 静态资源缓存头）
├── _ds/            ESTHER/志远 设计系统（样式与组件包，勿改）
├── assets/         全部图片（页头图、案例图、笔记图、签名、logo）
└── js/dist/        qrcode.js —— 本地内置二维码库（MIT），生成微信/粉丝群二维码
```
页间链接已用相对文件名（`index.html` / `method.html` / `cases.html`）；
配合 `vercel.json` 的 `cleanUrls`，线上地址为 `/`、`/method`、`/cases`。

## 一键部署
```bash
cd vercel-site
vercel --prod        # 或：vercel deploy --prod
```
无需 `npm install`、无需 build。Vercel 会把该目录作为静态站点直接托管，`index.html` 为根。

其他平台同理：把 `vercel-site/` 整个目录作为静态根上传即可
（Netlify: 拖拽该文件夹 / `netlify deploy --dir=. --prod`；
 Cloudflare Pages / GitHub Pages: 指向该目录）。

## 上线前唯一待办 ⚠️
二维码当前编码的是站点自身地址（`base` 兜底）。上线前在 `index.html` 的逻辑类里
把这两行的兜底值换成真实链接（搜索 `qrFansUrl` / `qrWechatUrl` 即可定位）：

```js
const fansUrl   = this.props.qrFansUrl   || base;   // 粉丝分享圈（元素 #qr-fans）
const wechatUrl = this.props.qrWechatUrl || base;   // 企业微信（元素 #qr-wechat）
```

改成，例如：
```js
const fansUrl   = this.props.qrFansUrl   || 'https://你的粉丝群入群链接';
const wechatUrl = this.props.qrWechatUrl || 'https://你的企业微信名片链接';
```
（二维码由 `js/dist/qrcode.js` 在浏览器端实时生成，改完值即生效，无需重新构建）

## 校验清单
- [x] 无 404、无 console error（本地已核）
- [x] 桌面 / 移动端响应式
- [x] 全部交互：滚动进度条、FAB、四段决策模块、案例展开、滚动淡入、卡片 hover
- [ ] 替换两处真实二维码链接（见上）
- [ ] 绑定自定义域名（如需）
