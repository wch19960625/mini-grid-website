# 迷你电网 · Mini Grid 官网

游戏宣传官网，采用原生 HTML/CSS/JavaScript。无需安装依赖、无需构建，可直接部署到 GitHub Pages 的子目录。

- 官网：<https://wch19960625.github.io/mini-grid-website/>
- 源码：<https://github.com/wch19960625/mini-grid-website>
- 正式版商店：<https://store.steampowered.com/app/5372790/>
- Demo 商店：<https://store.steampowered.com/app/5373110/>

## 本地预览与发布

在本目录执行 `python -m http.server 4173 --directory dist`，打开 <http://localhost:4173>。编辑 `dist/` 文件后刷新即可。

GitHub Pages 使用 Actions 发布：仓库 Settings → Pages → Source 选择 GitHub Actions。推送 `main` 后，`.github/workflows/pages.yml` 将 `dist/` 发布至官网；也可手动运行此工作流。

## 模块、状态和验证

| 入口 | 职责与依赖 | 验证 |
| --- | --- | --- |
| `dist/index.html` | SEO、导航、介绍、实机画廊、玩法、开发状态、FAQ、Steam/QQ 入口与媒体弹窗 | 锚点有效、图片加载、正式版/试玩链接分别指向正确 AppID |
| `dist/styles.css` | 桌面及移动布局、焦点状态、减少动态效果偏好、本地字体与响应式导航 | 1440/1024/768/390/360 px、中英文无横向溢出 |
| `dist/app.js` | `setLanguage` 中英文切换/本地偏好；`selectScene` 四种截图及键盘导航；`showMedia` 视频/大图；`closeMenu` 移动导航 | 语言切换和刷新、四个标签、箭头/Home/End、大图与 Escape、视频关闭停止播放、FAQ 与菜单点击 |
| `.github/workflows/pages.yml` | `main` 推送 → 上传 `dist/` → GitHub Pages | Actions 完成，公开 URL 返回 200，资源链接可访问 |

交互状态仅为 `language`、`selectedScene`、`dialogKind` 和导航展开状态；只将语言偏好保存到浏览器 `localStorage`。禁用存储仍可浏览。页面内容默认完整可读，脚本增强中英切换、截图及媒体弹窗。没有表单、账户、分析追踪或服务端数据。视频仅在用户打开弹窗时加载并播放，弹窗关闭释放媒体资源。

官网是独立仓库，不依赖游戏运行时，不发布游戏源码、SDK、存档、构建包、密钥或 Steamworks 后台材料。开发工程的代码图在上层 `1/CODE_MAP.md` 登记此边界，不将 Web 文件混入 Godot/Python 自动索引。

## 公开素材来源与权利

所有游戏图片和视频来自用户工作区已有宣传素材，仅复制以下内容；游戏画面和品牌素材权利归原权利人所有。未经许可不可将游戏素材用于其他项目。

| 官网文件 | 工作区原素材 |
| --- | --- |
| `assets/world.webp` | `Steam商店_最新/正式版_现有中文素材_待本地化/library/library_hero_3840x1240.png`，缩放并转换为 WebP |
| `assets/grid.webp` | `Steam商店_最新/正式版_审核准备_2026-10-10/本地化_简体中文14张/03_connected_grid_schinese.png` |
| `assets/river.webp` | 同目录 `04_underwater_cable_schinese.png` |
| `assets/build.webp` | 同目录 `06_engineering_schinese.png` |
| `assets/switch.webp` | 同目录 `07_open_circuit_schinese.png` |
| `assets/trailer.mp4` | `宣传片/social-landscape/迷你电网-自媒体宣传片-横屏36s.mp4`，原片复用 |
| `assets/Grid-*.woff2` | `宣传片/social-landscape/assets/`，同目录 `OFL.txt` 保留字体许可证 |
| `assets/favicon.svg` | 为官网制作的线路节点图标 |

英文官网保留中文实机截图，不将截图语言误标为英文。网站文字提供中英文；游戏自身支持七种界面语言，以商店和已公开说明为依据。公开说明严格区分当前 Demo 与未来模式，不声称尚未开放的地图、随机硬核故障、硬核或沙盒可在 Demo 体验。
