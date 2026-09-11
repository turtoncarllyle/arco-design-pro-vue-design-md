---
spec: arco-design-pro-vue-design-md
version: 2.7.3
upstream:
  repository: https://github.com/arco-design/arco-design-pro-vue
tag: v2.7.3
source_commit: 27020819af653243b7b1a3e8e2481d6b3d798749
source_tree: f40c5bc7e7a37e0590d945b2b4eee0faeafb1d73
license: MIT
status: canonical
evidence:
  source_fact: "[S]"
  dependency_behavior: "[D]"
  recommendation: "[R]"
  pending_validation: "[V]"
tokens:
  color_primary: "#165DFF"
  font_ui: "Inter"
  font_cjk: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
---

# Arco Design Pro Vue 2.7.3 设计规范

本文档是面向企业后台的标准简体中文版本，依据 Arco Design Pro Vue **2.7.3** 固定源码快照整理，供 AI 编码 Agent 在保持项目路由、接口、状态和权限契约的前提下实现界面。

每个实现决策都应标注证据分类：

- **[S] 源码事实**：直接在审计快照中观察到。
- **[D] 依赖行为**：由 Vue、Arco Design Vue、ECharts 等锁定依赖提供。
- **[R] 应用补充**：保持视觉语言一致的应用级建议。
- **[V] 待验证事项**：需要在目标产品或浏览器中确认。

本文档用于视觉与交互约束，不替代组件 API、路由契约、服务端授权、接口协议或业务文案。

## 1. 设计方向

构建安静、紧凑、适合高频操作的工作台，优先保证层级、可扫描性、可预测反馈和可撤销操作。浅色主题使用白色或中性表面，深色主题使用 Arco 深色表面。蓝色只用于主要操作、当前导航、链接和数据强调，状态使用语义色。

无论页面配方如何变化，都要保持统一应用壳层。卡片和表格对齐 16px 栅格，主要操作靠近阅读流程，避免装饰性渐变与数据争夺注意力。[R]

## 2. 颜色令牌

Arco 令牌以 CSS 变量提供。优先使用变量以自动支持主题切换；只有图表序列或导出图片才使用固定字面量。

### 2.1 品牌和语义色

| 令牌 | 浅色值/角色 | 用途 |
| --- | --- | --- |
| `#165DFF` / `--color-primary-6` | Arco Blue | 主按钮、选中菜单、链接、焦点环、图表主序列 |
| `--color-primary-1` … `--color-primary-10` | Arco Blue 色阶 | 悬停、激活、禁用和淡蓝填充 |
| `--color-success-6` | 绿色 | 完成、健康、通过 |
| `--color-warning-6` | 橙色 | 注意、接近阈值、待处理 |
| `--color-danger-6` | 红色 | 错误、危险操作、请求失败 |
| `--color-neutral-6` | 灰色 | 中性状态和次要指标 |
| `--color-white` | `#fff` | 实心主色/语义色上的文字 |

状态色必须同时配合文字或图标，不得只依赖颜色。[R]

### 2.2 灰阶

Arco 暴露 `--gray-1` 到 `--gray-10` RGB 通道，源码中以 `rgb(var(--gray-6))` 使用。保持以下角色稳定：

| 令牌 | 角色 |
| --- | --- |
| `--gray-1` | 次级面板的淡填充 |
| `--gray-2` | 分割线和浅边框 |
| `--gray-3` | 悬停填充或更强分割线 |
| `--gray-4` | 禁用填充 |
| `--gray-5` | 占位和三级文字 |
| `--gray-6` | 次要文字 |
| `--gray-7` | 正文辅助文字 |
| `--gray-8` | 强调的次要文字和图标 |
| `--gray-9` | 标题和主要文字 |
| `--gray-10` | 浅色表面最高对比文字 |

### 2.3 主题表面和文字

| 变量 | 浅色意图 | 深色意图 |
| --- | --- | --- |
| `--color-bg-1` | 页面背景 | 深色页面背景 |
| `--color-bg-2` | 顶栏/卡片表面 | 深色提升表面 |
| `--color-fill-1` | 输入框和淡填充 | 深色输入框填充 |
| `--color-fill-2` | 布局内容背景 | 深色内容背景 |
| `--color-text-1` | 主要文字 | 深色主题主要文字 |
| `--color-text-2` | 次要文字 | 深色主题次要文字 |
| `--color-text-3` | 三级文字 | 深色主题三级文字 |
| `--color-text-4` | 禁用文字 | 深色主题禁用文字 |
| `--color-border` | 结构边框 | 深色结构边框 |
| `--color-neutral-3` | 卡片/列表分割线 | 深色分割线 |

源码通过 `body[arco-theme="dark"]` 切换深色主题，并将偏好保存为 `arco-theme`。集成时保持该属性 [S]，自定义表面需要另行检查深色对比度 [V]。

## 3. 字体和排版

拉丁字符使用 `Inter`，中文回退栈为 `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`。只有在产品策略允许时加载本地或批准的 Web 字体，否则也必须保证回退字体可读 [R]。

- 全局正文为 **14px**，开启抗锯齿 [S]。
- 正文行高建议 1.5715（14px 时 22px）[D/R]。
- 页面标题使用 Arco heading 4 或 5，默认 24px/32px；区块标题 18px/26px [R]。
- 卡片标题 16px/24px、半粗；元数据和辅助文案 12–13px/20px。
- 顶栏品牌标题 18px，图标控制 16px，移动菜单图标 22px [S]。
- 数字指标可用 20–28px，并使用等宽数字 [R]。

标题使用句式大小写。可见文案来自 locale 字典；可复用组件不得写死语言相关路由名 [S/R]。

## 4. 形状、边框、层级和动效

- 默认卡片和结果表面圆角为 **4px** [S]；紧凑状态标签可用 2px，头像和圆点使用 50%。
- 分割线使用 `--color-border` 或 `--color-neutral-3` 的 1px 边框；浮层使用 Arco 默认阴影 [D]，避免厚重阴影。
- 标准间距为 4/8/12/16/20/24/32px，页面内容边距为 **20px** [S]。
- 壳层布局过渡约为 0.2s cubic-bezier(0.34, 0.69, 0.1, 1) [S]。检测 `prefers-reduced-motion` 时缩短为 0–100ms [R]。
- 两种主题都要保留可见焦点，使用 2px Arco Blue 外框或组件内置样式 [R]。

## 5. 应用壳层和布局

默认布局是固定、全高的应用壳层：

- 顶栏高度 **60px**，顶部固定，z-index 100，使用 `--color-bg-2` 和底部边框 [S]。
- 侧栏默认宽 **220px**，左侧固定、z-index 99；折叠后为 **48px** [S]。展开宽度由 `menuWidth` 设置控制。
- 内容区位于顶栏下方和侧栏右侧，背景为 `--color-fill-2`，最小高度 `100vh` [S]。
- 页脚可选，高度 **40px**，居中显示次要文字 [S]。
- 内容块外边距 20px，网格行列间距 16px；卡片使用 4px 圆角和 `general-card` 约定（标题区 20px，主体 `0 20px 20px`）[S]。
- 设置对象可隐藏顶栏、菜单、页脚、Tab Bar 或切换顶部菜单。默认值为 `theme: light`、`menuWidth: 220`、`footer: true`、`tabBar: false` [S]。

除非页面配方要求网格，否则使用单列内容。双列布局在大断点折叠，主要操作保持在次级面板之前 [R]。

## 6. 导航和全局控制

### 6.1 顶栏

左侧放置 Logo 和 “Arco Pro”，左内边距 20px。移动端显示 22px 的折叠菜单图标以打开抽屉。右侧依次放置搜索、语言、主题、通知、全屏、设置圆形描边按钮，最后是 32px 头像。每个图标按钮都要有 Tooltip 和无障碍名称 [S/R]。

- 语言通过 `a-dropdown` 选择，并保存到 localStorage 的 `arco-locale` [S]。
- 主题使用 `arco-theme`，调用应用 store 设置 `light` 或 `dark` [S]。
- 通知使用 `a-badge` 点/数量和 `a-popover`；源码浮层最小宽度 400px [S]。手机端宽度改为视口宽减 32px [R]。
- 全屏通过 `useFullscreen` 调用浏览器 Fullscreen API，并提供退出图标和 Tooltip [S/D]。
- 设置打开 300px 抽屉，包含内容设置、其他设置、复制配置按钮和说明 Alert [S]。
- 头像菜单提供切换角色、用户中心、用户设置和退出登录 [S]。

### 6.2 菜单、面包屑和页签

侧栏使用垂直 `a-menu`，`topMenu` 开启时使用水平模式。菜单从路由 meta 读取 locale 和图标，保持 `level-indent: 34px`、自动打开选中路径和 18px 图标 [S]。选中项使用主色和明显背景，并保留键盘方向键导航 [D/R]。

面包屑由路由层级生成。当前页颜色最深，祖先为次要色且仅在可访问时可点击 [R]。

Tab Bar 默认关闭（`tabBar: false`）。开启后在顶栏下方显示 40–48px 的可关闭路由页签，持久化缓存列表，并提供刷新、关闭其他、关闭全部命令。标记 `ignoreCache` 的路由不缓存；关闭页签同时删除缓存 [S/R]。

### 6.3 移动端抽屉

宽度低于 **992px** 时设备为 `mobile`，隐藏固定侧栏，使用左侧 `a-drawer` 打开菜单。抽屉无 footer、可点击遮罩关闭、导航后关闭 [S]。至少保留 16px 横向内边距，并让焦点首先进入抽屉 [R]。

## 7. 响应式行为

使用 `breakpoint.less` 中的断点：

| 名称 | 宽度 | 默认用途 |
| --- | ---: | --- |
| `xs` | **480px** | 手机边界情况 |
| `sm` | **576px** | 大手机/小平板 |
| `md` | **768px** | 平板列数 |
| `lg` | **992px** | 移动/桌面切换 |
| `xl` | **1200px** | 宽桌面侧栏行为 |
| `xxl` | **1600px** | 大桌面密度 |

运行时检查 `document.body.getBoundingClientRect().width - 1 < 992`，并以 **100ms** 防抖 `resize` [S]。不要创建第二个竞争性的设备 store。在 `lg` 及以下堆叠表单、允许表格横向滚动、减少卡片列数，主要操作保持可触达；`xs` 时多列卡片变为单列，避免固定宽度对话框 [R]。方向变化和缩放需要另行验证 [V]。

## 8. 组件配方

使用 Vue 3 `script setup` 调用 Arco Design Vue 组件，优先使用组件令牌和插槽，少做深层 CSS 覆盖。

| 组件 | 配方与状态 |
| --- | --- |
| Button | `a-button`：一个主操作使用 `type="primary"`，备选使用 `secondary`/`outline`，行操作使用 `text`，危险操作使用 `status="danger"` 并二次确认；覆盖 `loading`、`disabled` 和图标按钮 `aria-label`。 |
| Form | `a-form` + `a-form-item`；提交和必要的失焦校验，标签对齐、内联错误，失败请求后保留已输入值。 |
| Input | `a-input`，支持清除/搜索插槽；长文本使用 `a-textarea`，提供 placeholder、最大长度和关联错误。 |
| Select | 长列表使用可搜索 `a-select`；选项刷新时提供 loading/empty，并保留已选值。 |
| Table | `a-table` 设置明确 `row-key`，长列表固定表头，支持排序/筛选/分页、empty 插槽、loading 和移动端横向滚动；行操作使用 text 按钮组。 |
| Card | 使用 `a-card`/`general-card` 分组内容，标题简短，可提供额外操作，主体保持 20px 节奏。 |
| Tabs | 同级视图使用 `a-tabs`，标签简短；仅在挂载成本高时使用 `lazy-load`，并保留活动状态。 |
| Steps | Step Form 使用 `a-steps`，明确当前、完成、错误和禁用步骤。 |
| List | 通知、活动和简单记录使用 `a-list`，显示分割线和“查看全部”等底部操作。 |
| Upload | `a-upload` 配置 `accept`、类型/大小校验、进度、失败重试和移除；不得静默丢弃文件。 |
| Result | 成功、错误、403、404、500 使用 `a-result`，同时提供下一步操作和支持引用。 |
| Alert | 页面级信息或设置说明使用 `a-alert`；仅在安全时允许关闭。 |
| Spin/Skeleton | 短暂阻塞操作使用 `a-spin`，初始卡片/表格使用 `a-skeleton`，加载时保持页面结构稳定。 |
| Pagination | `a-pagination` 刷新后尽量保留当前页/页大小，并播报结果总数。 |
| Dropdown | 语言、头像、行操作和溢出菜单使用 `a-dropdown`/`a-doption`；选择后关闭并支持键盘。 |
| Popover | 通知或上下文详情使用 `a-popover`；必填错误不得只隐藏在浮层中。 |
| Tooltip | 不熟悉的图标使用 `a-tooltip`；不要重复可见标签，关键说明不能只放在 Tooltip。 |

## 9. 页面配方

### 9.1 Workplace 工作台

使用欢迎/横幅卡片、指标数据面板、快捷操作、最近访问、公告列表和一至两个趋势图。桌面首行四个等宽指标，平板两个，手机一个。使用 `general-card`、4px 圆角、20px 内间距，以 `#165DFF` 为主序列 [S/R]。

### 9.2 Monitor 监控

将数据统计卡片与聊天/活动面板并置，显示状态点和时间戳，并提供明确 empty 状态。长聊天内容在面板内滚动，页面结构保持稳定；警告/危险色只用于可行动事件 [R]。

### 9.3 Search Table 搜索表格

在 `a-card` 表格上方放置 `a-form` 筛选行，包含重置和主搜索按钮、结果数、分页和行操作。敏感操作使用 `v-permission="['admin']"` 保护；无权限时隐藏操作，产品需要时说明原因 [S/R]。

### 9.4 Card List 卡片列表

使用筛选/标题卡片和响应式项目卡片网格。卡片等高，保持标题/状态/元数据层级，提供带加号图标的新建卡片；在 `xs`/`sm` 变为单列 [S/R]。

### 9.5 Step Form 与 Group Form

Step Form 在卡片上方放 `a-steps`，每步一个卡片，底部提供上一步/下一步/提交。步骤间保留已校验数据，提交后显示成功 `a-result`。Group Form 将相关 `a-form-item` 分组到卡片，在源码使用 60px 操作栏的页面保持该高度，并让提交操作始终可见 [S]。

### 9.6 Profile 个人资料

基本资料由表单卡片和操作日志/表格组成。桌面表单宽度约 540–548px，手机全宽。保存/未保存反馈清楚，校验失败后保留输入 [S/R]。

### 9.7 User Center 与 User Settings

用户中心组合个人头部、最近活动、最近通知、团队和项目卡片。用户设置桌面为双栏导航，移动端为堆叠列表；基本信息、安全、通知、认证使用 tabs/cards。危险账户操作分离并确认 [S/R]。

### 9.8 Visualization 可视化

可视化页面使用筛选/标题卡片、数据概览指标、ECharts 面板、分布图、排行/列表卡片和可选地图。图表面板保持稳定高度，`vue-echarts` 使用 `autoresize`，选项根据当前主题生成；每个图表都要有 loading、无数据、错误和重试状态 [S/D/R]。

### 9.9 Login 登录

桌面使用左右 Banner/表单布局，手机居中单列。表单包括用户名、密码、记住我、语言和提交 loading。演示登录配置使用 `useStorage('login-config', ...)`，不得保存真实密码 [S]。失败时保留字段，显示内联错误并支持重试 [R]。

### 9.10 Result 与异常页

成功/错误使用居中的 `a-result` 或结果卡片，展示简短说明、可选引用 ID 和一个主要下一步。403、404、500 共用结果视觉，4px 卡片圆角；源码高度为 `height: calc(100% - 40px)`，分别提供返回、首页或重试 [S]。

## 10. 数据、状态和权限

- 请求沿用 Axios 拦截器和 Bearer token 契约。请求前显示 loading，随后进入数据/empty/error，并提供安全重试 [S/R]。
- 演示 Mock 角色读取 localStorage 的 `userRole`，切换角色时更新；真实产品必须由服务端执行授权 [S/R]。
- 认证 token 工具使用 `localStorage`；退出时清理 token 和缓存用户状态 [S]。
- 路由 meta 驱动 `requiresAuth`、`hideInMenu`、`activeMenu`。无权路由按产品策略跳转 not-found/403 [S/R]。
- `v-permission` 接受如 `['admin', 'user']` 的角色数组；缺少 roles 是开发错误。不可访问的危险控件不应显示为可用 [S]。
- 语言缓存键为 `arco-locale`，主题缓存键为 `arco-theme`；保持跨刷新稳定，只通过显式重置清理 [S]。
- 色弱模式是全局设置抽屉中的滤镜设置，图表和状态图标仍需包含文字/形状线索 [S/R]。
- Tab 缓存依据路由名。关闭页签删除缓存，刷新页签重新挂载；未保存表单仅在产品明确支持时保留 [S/R]。

## 11. 图表和可视化规则

序列颜色顺序统一为：Arco Blue `#165DFF`、绿色、橙色、红色、紫色、最后中性灰。深色主题使用更亮的变体（源码概览图标使用 `#4A7FF7`），并检查对比度 [S/R]。若采用 `echarts-tooltip-diy`，Tooltip 圆角 6px、标签 13px [S]。

通过共享图表组件封装 ECharts，支持 `width="100%"`、`height="100%"`、`autoResize`，容器展开后再首次渲染。用 `useChartOption(isDark)` 根据主题重新计算选项；ECharts 主题注册仍是 TODO，扩展前先验证 [S]。不要原地修改响应式 option [D/R]。

每个可视化都要覆盖 loading（`a-spin`/skeleton）、无数据（说明如何调整筛选）、请求或渲染失败（消息加重试）和 ready 四种状态；图例、坐标轴和颜色含义应可访问 [R]。

## 12. 交互和无障碍

- 键盘顺序与视觉顺序一致。图标按钮有可访问名称，Dialog/Drawer 关闭时焦点回到触发器 [R]。
- 使用语义 Arco 图标名（`icon-search`、`icon-language`、`icon-moon-fill`、`icon-sun-fill`、`icon-notification`、`icon-fullscreen`、`icon-settings`、`icon-user`、`icon-export`），不要使用 Emoji [S/R]。
- 保留可见焦点，移动端指针目标至少 44px，文字和控件达到 WCAG AA 对比度 [R/V]。
- 遵守 `prefers-reduced-motion`，动效不能成为唯一状态提示 [R]。
- 长标签和表格单元格换行或截断，并以无障碍方式提供完整值；避免页面横向滚动，允许表格内部滚动 [R]。
- 上传校验说明类型/大小，报告进度，失败项可移除或重试 [R]。
- 禁用控件在原因不明显时提供邻近说明；无权限操作不应显示为启用状态 [R]。

## 13. Do / Don't

| Do（建议） | Don't（避免） |
| --- | --- |
| 使用 Arco 变量和组件状态。 | 在主题变量之上硬编码仅适合浅色的颜色。 |
| 每张卡片或表单区只保留一个主要操作。 | 让每个按钮都使用主色。 |
| 请求失败后保留筛选和已填内容。 | 出错时重置用户工作。 |
| 手机上让表格内部滚动。 | 把十列压缩到无法阅读。 |
| 状态颜色同时配合文字/图标/形状。 | 只用颜色表达成功或失败。 |
| 复用路由 meta 和权限指令。 | 把隐藏按钮当成授权。 |
| 提供 loading、empty、error、retry。 | 数据加载时留下空白面板。 |
| 使用简短可翻译文案和语义图标。 | 把关键说明只放在 Tooltip。 |

## 14. AI Agent 实现提示词

在编辑目标 Vue 3 应用前先读取本 DESIGN.md。匹配 2.7.3 壳层、令牌、14px 密度、60px/220px/48px/40px 布局、断点和页面配方。使用 Arco Design Vue 和现有路由 meta，保留 Pinia、Vue Router、vue-i18n、Axios/Mock、权限及业务契约。实现 light/dark、移动抽屉、loading/empty/error/validation/success/disabled/permission 状态、键盘焦点和重试。假设标记 `[R]`，未解决检查标记 `[V]`；除非明确要求，不复制源码快照或安装依赖。

## 15. 验收清单

- [ ] front matter 含版本 `2.7.3`、标签 `v2.7.3`、来源提交和 Tree。
- [ ] 使用 `#165DFF`、Arco 灰阶/语义令牌、浅色/深色表面、`Inter`、中文回退和 14px 正文。
- [ ] 顶栏/侧栏/页脚尺寸为 60px/220px/48px/40px，内容边距 20px，栅格间距 16px。
- [ ] 实现六个断点以及 992px + 100ms 响应式规则。
- [ ] 覆盖顶栏控制、菜单模式、面包屑、可选页签、设置抽屉、通知浮层、头像菜单、全屏和移动抽屉。
- [ ] 组件配方覆盖 Button、Form、Input、Select、Table、Card、Tabs、Steps、List、Upload、Result、Alert、Spin、Skeleton、Pagination、Dropdown、Popover、Tooltip。
- [ ] 页面配方覆盖 Workplace、Monitor、Search Table、Card List、Step/Group Form、Profile、User Center、Visualization、Login、Result 和 403/404/500。
- [ ] 记录 Mock/API、登录、角色权限、`v-permission`、语言/主题/色弱和 Tab 缓存行为。
- [ ] 包含图表配色、ECharts 边界、loading/empty/failure/validation/success/disabled/permission 状态和无障碍规则。
- [ ] `scripts/verify-docs.mjs`、JSON、Markdown 链接和 `git diff --check` 通过。

## 16. 已知缺口和来源索引

审计范围不包含安装依赖、运行参考应用、浏览器 UI 测试、后端/API 验证、性能分析和辅助技术测试 [V]。共享图表包装器尚未注册 ECharts 主题，新增自定义主题前需要验证 [S/V]。演示 Mock 接口和角色切换仅供示例，生产环境应替换为服务端授权 [S/R]。

本版本使用的源码分组：

- `arco-design-pro-vite/src/layout`：壳层、顶栏、侧栏、页面布局和页脚。
- `arco-design-pro-vite/src/components`：菜单、面包屑、Tab Bar、全局设置、消息盒子和图表包装器。
- `arco-design-pro-vite/src/assets/style`：全局令牌和六个断点。
- `arco-design-pro-vite/src/hooks` 与 `src/store`：响应式、语言、主题、图表和页签状态。
- `arco-design-pro-vite/src/views`：dashboard、list、form、profile、user、visualization、login、result 和 exception 配方。
- `arco-design-pro-vite/src/api`、`src/mock`、`src/directive/permission`：请求、演示数据和角色约束。

详见 [`AUDIT.md`](AUDIT.md)、[`AUDIT.en-US.md`](AUDIT.en-US.md) 和 [`SOURCES.json`](SOURCES.json)，其中记录固定提交、依赖范围、259 文件快照计数和验证方法。