---
spec: arco-design-pro-vue-design-md-audit
version: 2.7.3
upstream_tag: v2.7.3
source_commit: 27020819af653243b7b1a3e8e2481d6b3d798749
source_tree: f40c5bc7e7a37e0590d945b2b4eee0faeafb1d73
snapshot_files: 259
---

# Audit report: Arco Design Pro Vue 2.7.3

## Conclusion

This edition is derived solely from upstream `arco-design-pro-vue` `v2.7.3`. The audited snapshot is `E:\github\admin-ui-design-md\arco-design-pro-vue-md\arco-design-pro-vue-2.7.3`, pinned to commit `27020819af653243b7b1a3e8e2481d6b3d798749` and tree `f40c5bc7e7a37e0590d945b2b4eee0faeafb1d73`. The snapshot contains 259 files. Git blob SHA-1 values for every file are recorded in the source manifest and checked by the verification script.

## Scope and method

- [S] Layout, component, hook, store, view, configuration and style files were read; the reference app was not executed.
- [S] Dimensions, themes and breakpoints came from `src/config/settings.json`, `src/layout/default-layout.vue`, `src/hooks/responsive.ts`, `src/assets/style/breakpoint.less`, and `src/assets/style/global.less`.
- [S] Navbar, menu, global-setting, tab-bar, chart, permission, auth, locale and mock files supplied interaction and state facts.
- [D] Dependency versions are resolved values from `arco-design-pro-vite/pnpm-lock.yaml`; package.json ranges are preserved in `SOURCES.json`.
- [S] The script computes each Git blob with `sha1("blob <bytes>\\0" + bytes)` and compares all 259 values with the manifest.
- [V] Dependencies were not installed. Browser UI, backend/API, performance and assistive-technology checks were not run.

## Verified facts

| Area | Evidence |
| --- | --- |
| Theme | Default `light`; `#165DFF`; `arco-theme` attribute; `colorWeak` setting. |
| Shell | 60px navbar; 220px sider; 48px collapsed sider; 40px footer; 20px content edge; 4px cards. |
| Navigation | Vertical/horizontal menu; `level-indent: 34px`; 18px icons; mobile Drawer. |
| Responsive | `480/576/768/992/1200/1600px`; 992px device check; 100ms debounce. |
| Controls | Arco Button, Form, Input, Select, Table, Card, Tabs, Steps, List, Upload, Result, Alert, Spin, Skeleton, Pagination, Dropdown, Popover and Tooltip. |
| States | Loading, empty, error, validation, success, disabled and permission states are specified; product copy remains application-owned. |
| Auth and permission | localStorage token, `userRole`, `v-permission`, and route-meta guards. |
| Charts | ECharts/vue-echarts, theme-aware options, autoresize, and delayed first render while the container expands. |

## Resolved dependencies

The declaration range and lockfile value are both recorded:

| Package | Declared range | Resolved |
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

The specification cites TypeScript `^4.8.4` because that is the project declaration; the lockfile resolves 4.9.5. Recheck this distinction when a target project changes its lockfile [V].

## Excluded from the public repository

The source snapshot, `node_modules`, `dist`, `.nuxt`, caches and logs are ignored. The public repository contains documentation, audit metadata, a source summary and the verification script only.

## Gaps

Real API data, server-side role enforcement, third-party theme packages, chart theme registration, browser compatibility, performance budgets and screen-reader output remain unverified. Add them to product acceptance before production integration [V].

## Reproducible commands

Run from the repository root:

```powershell
node scripts/verify-docs.mjs
node scripts/verify-docs.mjs --source "E:\github\admin-ui-design-md\arco-design-pro-vue-md\arco-design-pro-vue-2.7.3"
git diff --check
```

The script does not install dependencies or modify the source snapshot.