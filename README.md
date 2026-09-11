# arco-design-pro-vue-design-md

[简体中文](README.md) | [English](README.en-US.md)

[![Arco Design Pro Vue](https://img.shields.io/badge/Arco%20Design%20Pro%20Vue-2.7.3-165DFF)](https://github.com/arco-design/arco-design-pro-vue/tree/v2.7.3)
[![DESIGN.md](https://img.shields.io/badge/DESIGN.md-AI%20ready-165DFF)](https://stitch.withgoogle.com/docs/design-md/overview/)
[![License](https://img.shields.io/badge/license-MIT-1D2129)](LICENSE)

面向 AI 编码 Agent、专注企业级后台管理系统的 Arco Design Pro Vue 版本化设计系统文档。

DESIGN.md 是 Google Stitch 提出的纯文本设计系统格式。它把颜色、字体、应用壳层、组件组合、交互状态和响应式规则整理为 AI Agent 可以直接读取的约束，用于生成视觉一致的 Vue 后台界面。它不是 Arco Design Vue API 手册，也不替代项目自身的路由、权限、接口和业务规则。

## 目的与适用场景

本仓库从 Arco Design Pro Vue 官方 v2.7.3 源码中提取真实的布局尺寸、Arco Design 令牌、组件使用方式和页面配方，适合：

- 新建或改造 Arco Design Pro Vue 的后台页面；
- 统一顶栏、侧栏、面包屑、卡片、表格、表单和反馈状态；
- 在 light 与 dark 主题、桌面与移动端之间保持同一信息层级；
- 让 AI 生成 Workplace、Monitor、列表、表单、个人中心、可视化、登录和异常页面；
- 在升级上游时选择与实际代码快照匹配的规范版本。

规范服务信息密集型后台，不用于营销官网、内容门户或消费端产品。业务数据模型、接口契约、权限策略、路由命名和组件 API 必须以实际项目代码为准。

## 支持版本

| 上游版本 | Vue | Arco Design Vue | 英文标准版 | 简体中文版 | GitHub Release |
| --- | --- | --- | --- | --- | --- |
| 2.7.3 | 3.2.47 | 2.45.0 | [DESIGN.md](versions/2.7.3/DESIGN.md) | [DESIGN.zh-CN.md](versions/2.7.3/DESIGN.zh-CN.md) | [v2.7.3](https://github.com/turtoncarllyle/arco-design-pro-vue-design-md/releases/tag/v2.7.3) |

英文 DESIGN.md 是默认的生态兼容版本，中文版保持相同章节、令牌、尺寸和规则。版本目录和 front matter 的 version 均表示上游版本；文档修正不增加新的修订号。

main 上的版本文档用于持续维护，Release 附件用于发布快照。需要不可变内容时，请使用本仓库文档提交的完整 SHA，而不是上游源码提交的 SHA。

审计与证据：

- [中文审计](versions/2.7.3/AUDIT.md)
- [English audit](versions/2.7.3/AUDIT.en-US.md)
- [来源清单](versions/2.7.3/SOURCES.json)

## 使用方法

1. 确认项目使用的是 Arco Design Pro Vue 2.7.3 及其 Arco Design Vue 组件。
2. 阅读 versions/2.7.3/DESIGN.md 或 versions/2.7.3/DESIGN.zh-CN.md。
3. 将所选文件下载到项目根目录并命名为 DESIGN.md，或在 Agent 提示词中直接引用仓库路径。
4. 要求 Agent 保留已有 Vue 3、Pinia、Vue Router、vue-i18n、Mock/API、权限和业务交互契约。
5. 实现后分别检查 light/dark、桌面/移动、加载/空数据/失败/校验和权限状态。

Windows PowerShell 下载英文版：

    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/turtoncarllyle/arco-design-pro-vue-design-md/main/versions/2.7.3/DESIGN.md" -OutFile ".\DESIGN.md"

下载简体中文版：

    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/turtoncarllyle/arco-design-pro-vue-design-md/main/versions/2.7.3/DESIGN.zh-CN.md" -OutFile ".\DESIGN.md"

推荐提示词：

    请先读取项目根目录的 DESIGN.md，按 Arco Design Pro Vue 2.7.3
    的应用壳层、light/dark 主题、Arco Design Vue 组件组合、14px 密度、
    断点和页面配方实现界面。保留现有 Vue、Pinia、路由、权限、接口、
    Mock 数据和业务交互。实现加载、空数据、校验失败、请求失败、重试、
    成功反馈、禁用和移动端状态；区分 [S] 源码事实、[D] 依赖行为、
    [R] 应用补充和 [V] 待验证事项。

## 规范覆盖范围

- Arco Design 颜色、灰阶、语义状态、浅色/深色主题表面和文本变量；
- Inter 与中文字体、字号、行高、圆角、边框、阴影和动效；
- 60px 顶栏、220px 侧栏、48px 折叠侧栏、40px 页脚和移动抽屉；
- 菜单、面包屑、Tab Bar、全局设置、通知、用户菜单和全屏；
- Button、Form、Input、Select、Table、Card、Tabs、Steps、List、Upload、Result、Alert、Spin、Skeleton、Pagination、Dropdown、Popover、Tooltip；
- Workplace、Monitor、Search Table、Card List、Step/Group Form、Profile、User Center、Visualization、Login、Result 和 Exception 页面；
- Mock 请求、登录缓存、角色权限、语言切换、主题切换、色弱滤镜和 Tab 缓存；
- 图表配色、响应式栅格、键盘焦点、图标命名、对比度和扩展边界。

## 来源与边界

上游仓库为 [arco-design/arco-design-pro-vue](https://github.com/arco-design/arco-design-pro-vue)，固定版本为 [v2.7.3](https://github.com/arco-design/arco-design-pro-vue/tree/v2.7.3)，审计提交为 27020819af653243b7b1a3e8e2481d6b3d798749。源码快照与该提交的 259 个 Blob 全部一致。

本仓库是独立整理的设计规范，不隶属于 Arco Design、字节跳动或 Google Stitch。Arco Design Pro Vue、Arco Design 及相关标识归其各自权利人所有。上游源码继续遵循其 MIT License，本仓库原创文档使用 MIT License。
