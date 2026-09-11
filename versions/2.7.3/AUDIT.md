---
spec: arco-design-pro-vue-design-md-audit
version: 2.7.3
upstream_tag: v2.7.3
source_commit: 27020819af653243b7b1a3e8e2481d6b3d798749
source_tree: f40c5bc7e7a37e0590d945b2b4eee0faeafb1d73
snapshot_files: 259
---

# 审计报告：Arco Design Pro Vue 2.7.3

## 结论

本版本设计规范以 `arco-design-pro-vue` 上游 `v2.7.3` 为唯一来源。审计快照位于 `E:\github\admin-ui-design-md\arco-design-pro-vue-md\arco-design-pro-vue-2.7.3`，对应提交 `27020819af653243b7b1a3e8e2481d6b3d798749` 和 Tree `f40c5bc7e7a37e0590d945b2b4eee0faeafb1d73`。本地快照共 259 个文件；其 Git Blob SHA-1 已按来源清单逐一记录并由脚本校验。

## 审计范围和方法

- [S] 读取布局、组件、hooks、store、views、配置和样式文件；不执行参考应用。
- [S] 从 `src/config/settings.json`、`src/layout/default-layout.vue`、`src/hooks/responsive.ts`、`src/assets/style/breakpoint.less` 和 `src/assets/style/global.less` 提取尺寸、主题和断点。
- [S] 从 navbar、menu、global-setting、tab-bar、chart、permission、auth、locale 和 mock 文件提取交互与状态事实。
- [D] 依赖版本来自 `arco-design-pro-vite/pnpm-lock.yaml` 的解析版本；package.json 的范围同时保留在 `SOURCES.json`。
- [S] 用 Git blob 算法（`sha1("blob <bytes>\\0" + bytes)`）计算 259 个文件的摘要，与 `SOURCES.json` 的 `blob_sha1` 映射核对。
- [V] 未安装依赖、未运行 Vite、未做浏览器 UI、后端/API、性能或辅助技术验收。

## 已核实事实

| 领域 | 证据 |
| --- | --- |
| 主题 | 默认 `light`；`#165DFF`；`arco-theme` 属性；`colorWeak` 设置。 |
| 壳层 | 顶栏 60px；侧栏 220px；折叠 48px；页脚 40px；内容边距 20px；卡片 4px。 |
| 菜单 | 垂直/水平模式；`level-indent: 34px`；图标 18px；移动端 Drawer。 |
| 响应式 | `480/576/768/992/1200/1600px`；992px 判断；100ms 防抖。 |
| 控件 | Arco Button、Form、Input、Select、Table、Card、Tabs、Steps、List、Upload、Result、Alert、Spin、Skeleton、Pagination、Dropdown、Popover、Tooltip。 |
| 状态 | loading、empty、error、validation、success、disabled、permission 在规范中定义；具体业务文案由应用提供。 |
| 认证和权限 | localStorage token、`userRole`、`v-permission`、路由 meta 权限守卫。 |
| 图表 | ECharts/vue-echarts、主题感知 option、autoresize、首次渲染等待容器展开。 |

## 依赖解析

核心依赖的 package.json 范围与 lockfile 解析值记录如下：

| 包 | 声明范围 | lockfile 解析 |
| --- | --- | --- |
| Vue | `^3.2.40` | 3.2.47 |
| @arco-design/web-vue | `^2.44.7` | 2.45.0 |
| Pinia | `^2.0.23` | 2.0.34 |
| Vue Router | `^4.0.14` | 4.1.6 |
| vue-i18n | `^9.2.2` | 9.2.2 |
| ECharts | `^5.4.0` | 5.4.2 |
| Vite | `^3.2.5` | 3.2.5 |
| TypeScript | `^4.8.4` | 4.9.5 |
| Less | `^4.1.3` | 4.1.3 |

TypeScript 的规范依据是项目声明的 `^4.8.4`；锁文件在该快照解析到 4.9.5，升级或锁定行为应在目标项目中重新确认 [V]。

## 不纳入公开仓库的内容

参考源码快照、`node_modules`、`dist`、`.nuxt`、缓存和日志均被 `.gitignore` 排除。公开仓库只包含设计文档、审计元数据、来源摘要和验证脚本。

## 缺口

未验证真实 API 数据、服务端角色授权、第三方主题包、图表主题注册、浏览器兼容性、性能预算和屏幕阅读器输出。生产接入前应把这些项目列入验收 [V]。

## 可复现命令

在仓库根目录执行：

```powershell
node scripts/verify-docs.mjs
node scripts/verify-docs.mjs --source "E:\github\admin-ui-design-md\arco-design-pro-vue-md\arco-design-pro-vue-2.7.3"
git diff --check
```

脚本不会安装依赖或修改源代码。