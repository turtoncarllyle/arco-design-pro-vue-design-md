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

# Arco Design Pro Vue 2.7.3 Design Specification

This document is the canonical English edition for an information-dense enterprise admin application built with Arco Design Pro Vue **2.7.3**. It translates the pinned source snapshot into constraints an AI coding agent can apply while preserving the target application's routes, APIs, state, and permissions.

Use evidence labels on every implementation decision:

- **[S] Source fact** — directly observed in the audited snapshot.
- **[D] Dependency behavior** — behavior supplied by Vue, Arco Design Vue, ECharts, or another pinned dependency.
- **[R] Recommendation** — an application-level addition that keeps the visual language coherent.
- **[V] Pending validation** — requires checking in the target product or a browser.

The specification is visual and interaction guidance. It does not replace component API documentation, route contracts, server authorization, or product copy.

## 1. Design direction

Build a calm, compact workbench for frequent operational tasks. Prioritize hierarchy, scanability, predictable feedback, and reversible actions. Keep surfaces white or neutral in light mode and use Arco's dark surfaces in dark mode. Use blue only for primary actions, current navigation, links, and data emphasis; semantic colors communicate status.

Pages should feel like one application shell even when the page recipe changes. Align cards and tables to a 16px grid, keep primary actions near the reading flow, and avoid decorative gradients that compete with data. [R]

## 2. Color tokens

Arco Design tokens are CSS variables. Use the variable so theme switching remains automatic; use a literal only for chart series or an exported artifact.

### 2.1 Brand and semantic colors

| Token | Light value / role | Usage |
| --- | --- | --- |
| `#165DFF` / `--color-primary-6` | Arco Blue | Primary button, selected menu, link, focus ring, chart anchor |
| `--color-primary-1` … `--color-primary-10` | Arco Blue scale | Hover, active, disabled and subtle blue fills |
| `--color-success-6` | Green | Completed, healthy, passed |
| `--color-warning-6` | Orange | Attention, approaching limit, pending |
| `--color-danger-6` | Red | Error, destructive action, failed request |
| `--color-neutral-6` | Gray | Neutral status and secondary indicator |
| `--color-white` | `#fff` | Text on solid primary/semantic fills |

Always pair a status color with text or an icon. Do not rely on color alone. [R]

### 2.2 Gray scale

Arco exposes `--gray-1` through `--gray-10` as RGB channels and they are used as `rgb(var(--gray-6))` in the source. Keep the following roles stable:

| Token | Role |
| --- | --- |
| `--gray-1` | Subtle fill behind a secondary panel |
| `--gray-2` | Divider and light border |
| `--gray-3` | Hover fill or stronger divider |
| `--gray-4` | Disabled fill |
| `--gray-5` | Placeholder and tertiary text |
| `--gray-6` | Secondary text |
| `--gray-7` | Body-supporting text |
| `--gray-8` | Strong secondary text and icon |
| `--gray-9` | Heading and primary text |
| `--gray-10` | Highest-contrast text on light surfaces |

### 2.3 Theme surfaces and text

| Variable | Light intent | Dark intent |
| --- | --- | --- |
| `--color-bg-1` | Page background | Dark page background |
| `--color-bg-2` | Navbar/card surface | Elevated dark surface |
| `--color-fill-1` | Input and subtle fill | Dark input fill |
| `--color-fill-2` | Layout content background | Dark content background |
| `--color-text-1` | Primary text | Primary dark-theme text |
| `--color-text-2` | Secondary text | Secondary dark-theme text |
| `--color-text-3` | Tertiary text | Tertiary dark-theme text |
| `--color-text-4` | Disabled text | Disabled dark-theme text |
| `--color-border` | Structural border | Dark structural border |
| `--color-neutral-3` | Card/list divider | Dark divider |

The source toggles `body[arco-theme="dark"]` and stores the preference as `arco-theme`. Keep the same attribute when integrating [S]. Verify dark contrast for custom surfaces [V].

## 3. Typography

Use `Inter` for Latin UI text and the following CJK fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`. Load a local or approved web font only when product policy permits; otherwise the fallback must render well [R].

- Base body size is **14px** with antialiased text [S].
- Body line height: 1.5715 (22px at 14px) [D/R].
- Page title: Arco typography heading 4 or 5; default to 24px/32px for a page and 18px/26px for a section [R].
- Card title: 16px/24px, semibold.
- Supporting copy and metadata: 12–13px/20px.
- Navbar brand title is 18px and icon controls are 16px; the mobile menu icon is 22px [S].
- Numeric metrics may use 20–28px with tabular numerals [R].

Keep headings sentence-case. Use the locale dictionary for visible labels; never bake a language-specific route name into a reusable component [S/R].

## 4. Shape, borders, elevation, and motion

- Default card and result surface radius is **4px** [S]. Use 2px for compact status chips and 50% for avatars/dots.
- Use `--color-border` or `--color-neutral-3` for 1px dividers. Avoid heavy shadows; an elevated popover may use the Arco default shadow [D].
- Standard content spacing is 4/8/12/16/20/24/32px. A page content edge starts at **20px** [S].
- Layout transitions use approximately 0.2s cubic-bezier(0.34, 0.69, 0.1, 1) in the shell [S]. Respect `prefers-reduced-motion` by shortening to 0–100ms [R].
- Focus indicators must remain visible against both themes. Use a 2px Arco Blue outline or the component's built-in focus style [R].

## 5. Application shell and layout

The default layout is a fixed, full-height shell:

- Navbar: **60px** high, fixed at the top, z-index 100, `--color-bg-2` surface and a bottom border [S].
- Sider: **220px** wide by default, fixed on the left at z-index 99. When collapsed it is **48px** wide [S]. The `menuWidth` setting controls the expanded width.
- Content: starts below the 60px navbar and beside the sider. Use `--color-fill-2` as the layout background and keep `min-height: 100vh` [S].
- Footer: optional and **40px** high, centered, secondary text [S].
- Content blocks: use 20px outer padding and 16px gaps between grid columns/rows. Cards use a 4px radius and the `general-card` convention (20px header, 0 20px 20px body) [S].
- The shell can hide navbar, menu, footer, tab bar, or switch to a top menu through the settings object. Defaults are `theme: light`, `menuWidth: 220`, `footer: true`, `tabBar: false` [S].

Use a single content column until the page recipe calls for a grid. A two-column layout should collapse at the large breakpoint; preserve the primary action above secondary panels [R].

## 6. Navigation and global controls

### 6.1 Navbar

Place the logo and “Arco Pro” brand at the left with 20px left padding. On mobile, show the 22px menu-fold icon to open the drawer. The right side contains circular outline buttons for search, language, theme, notifications, fullscreen, and settings, followed by a 32px avatar. Each icon button has a tooltip and an accessible label [S/R].

- Language uses an `a-dropdown` and persists `arco-locale` in local storage [S].
- Theme uses `arco-theme` and calls the app store to set `light` or `dark` [S].
- Notification uses an `a-badge` dot/count and an `a-popover`; the source popover has a minimum width of 400px [S]. Let the popover become viewport-width minus 32px on phones [R].
- Fullscreen uses the browser Fullscreen API through `useFullscreen`; provide an exit icon and tooltip [S/D].
- Settings opens a 300px drawer with content and other settings blocks, a copy-settings action, and an alert explaining the options [S].
- Avatar menu offers role switching, User Center, User Settings, and logout [S].

### 6.2 Menu, breadcrumb, and tabs

Use `a-menu` in vertical mode for the sider and horizontal mode when `topMenu` is enabled. Use route metadata for locale and icon names. Keep `level-indent: 34px`, automatic selected-path opening, and an 18px menu icon [S]. A selected item uses the primary color and a clear active background; preserve keyboard arrow navigation [D/R].

Render breadcrumbs from the route hierarchy. The current page is the darkest item; ancestors are secondary and clickable only when their route is reachable [R].

Tab Bar is optional (`tabBar: false` by default). When enabled, show closable route tabs in a 40–48px strip below the navbar, persist the route cache list, and provide refresh/close-other/close-all commands. Do not cache routes marked `ignoreCache`; delete the cache entry when a tab closes [S/R].

### 6.3 Mobile drawer

At widths below **992px**, set device to `mobile`, hide the fixed sider, and open the menu in an `a-drawer` placed on the left. The drawer has no footer, is mask-closable, and closes after navigation [S]. Keep at least 16px horizontal padding and ensure the first focus lands inside the drawer [R].

## 7. Responsive behavior

Use these breakpoints from `breakpoint.less`:

| Name | Width | Default use |
| --- | ---: | --- |
| `xs` | **480px** | phone edge cases |
| `sm` | **576px** | large phone/small tablet |
| `md` | **768px** | tablet columns |
| `lg` | **992px** | mobile/desktop switch |
| `xl` | **1200px** | wide desktop sider behavior |
| `xxl` | **1600px** | large desktop density |

The runtime checks `document.body.getBoundingClientRect().width - 1 < 992` and debounces `resize` by **100ms** [S]. Do not create a second competing device store. At `lg` and below, stack form fields, allow horizontal table scroll, reduce card columns, and keep primary actions reachable. At `xs`, convert multi-column cards to one column and avoid fixed-width dialogs [R]. Test orientation changes and zoom at [V].

## 8. Component recipes

Use Arco Design Vue components with Vue 3 `script setup`. Prefer the component's tokens and slots over deep CSS overrides.

| Component | Recipe and states |
| --- | --- |
| Button | `a-button` with `type="primary"` for one primary action, `secondary`/`outline` for alternatives, `text` for row actions, and `status="danger"` for destructive confirmation. Include `loading`, `disabled`, and icon-only `aria-label`. |
| Form | `a-form` + `a-form-item`; validate on submit and on blur where helpful. Keep labels aligned, show inline errors, and preserve entered values after a failed request. |
| Input | `a-input` with clearable/search slots; use `a-textarea` for long text. Provide placeholder, max length, and an error message tied to the field. |
| Select | `a-select` with searchable options for long lists; show loading/empty states and keep the selected value when options refresh. |
| Table | `a-table` with explicit `row-key`, fixed header for long lists, sortable/filterable columns, pagination, empty slot, loading spinner, and horizontal scroll on mobile. Keep row actions in a `text` button group. |
| Card | `a-card`/`general-card` for grouped content. Use a concise title, optional extra action, and 20px body rhythm. |
| Tabs | `a-tabs` for peer views. Keep labels short; use `lazy-load` only when mount cost matters and retain active state. |
| Steps | `a-steps` for Step Form progress; mark current, finish, error, and disabled steps explicitly. |
| List | `a-list` for notifications, activity, and simple records. Use dividers and a footer action such as “View all”. |
| Upload | `a-upload` with `accept`, size/type validation, progress, retry on failure, and a removable failed item. Never discard a user's file silently. |
| Result | `a-result` for success/error/403/404/500; pair status with a next action and a support reference. |
| Alert | `a-alert` for persistent page-level information or settings guidance; use `closable` only when dismissal is safe. |
| Spin/Skeleton | Use `a-spin` for a short blocking operation and `a-skeleton` for initial card/table layout. Keep the page structure stable while loading. |
| Pagination | `a-pagination` preserves current page/size after refresh when possible; announce the result count. |
| Dropdown | `a-dropdown`/`a-doption` for language, avatar, row actions, and overflow; close after selection and expose keyboard navigation. |
| Popover | `a-popover` for notifications or contextual detail; avoid hiding required form errors in a popover. |
| Tooltip | `a-tooltip` explains unfamiliar icons; do not duplicate visible labels and do not put essential instructions only in a tooltip. |

## 9. Page recipes

### 9.1 Workplace dashboard

Use a welcome/banner card, metric data panel, quick operations, recently visited links, announcement/list cards, and one or two trend charts. Keep the first row to four equal metric cells on desktop, two on tablet, one on phone. Use `general-card`, 4px radius, 20px inner rhythm, and `#165DFF` as the anchor series [S/R].

### 9.2 Monitor dashboard

Pair a data-statistic card with a chat/activity panel. Show status dots, timestamps, and a clear empty state. Long chat content scrolls inside its panel; the page itself remains stable. Use warning/danger colors only for actionable incidents [R].

### 9.3 Search Table

Place an `a-form` filter row above an `a-card` table. Include reset and primary search actions, a result count, pagination, and row-level actions. Protect sensitive actions with `v-permission="['admin']"`; hide unavailable actions and explain missing permission when the product requires it [S/R].

### 9.4 Card List

Use a filter/header card followed by a responsive grid of project or content cards. Keep cards equal height, expose a clear title/status/meta hierarchy, and provide an add card with a plus icon. Collapse to one column at `xs`/`sm` [S/R].

### 9.5 Step Form and Group Form

Step Form uses `a-steps` above one card per step, with Previous/Next/Submit actions in a sticky or clearly separated footer. Keep validated data between steps and show an `a-result` success panel after submission. Group Form groups related `a-form-item`s in cards, uses a 60px action bar where the source does, and keeps the submit action visible [S].

### 9.6 Profile

Basic Profile uses a form card plus operation log/table. Keep the form around 540–548px wide on desktop and full width on mobile. Show saved/unsaved feedback and preserve values after validation errors [S/R].

### 9.7 User Center and User Settings

User Center combines a profile header, latest activity, latest notification, team and project cards. User Settings uses a two-pane navigation on desktop and a stacked list on mobile; use tabs/cards for basic information, security, notification, and certification. Keep destructive account actions separated and confirmed [S/R].

### 9.8 Visualization

Visualization pages use a filter/header card, data overview metrics, ECharts panels, distribution charts, ranking/list cards, and an optional map. Keep chart panels at a stable height, use `vue-echarts` with `autoresize`, and derive options from the current theme. Show loading, no-data, error and retry states around every chart [S/D/R].

### 9.9 Login

Use a split banner/form layout on desktop and a single centered form on mobile. The form includes username, password, remember-me, locale and submit loading state. Store the demo login configuration with `useStorage('login-config', ...)`; never store real passwords [S]. On failure keep the fields, show an inline error and offer retry [R].

### 9.10 Result and exception pages

Success and error results use a centered `a-result` or result card with a concise explanation, reference ID where available, and one primary next action. 403, 404 and 500 pages share the result visual, use a card with 4px radius and `height: calc(100% - 40px)` in the source, and provide Back/Home/Retry as appropriate [S].

## 10. Data, state, and permissions

- API calls use the existing Axios interceptor and bearer token contract. Show loading before a request, replace it with data/empty/error, and allow a safe retry [S/R].
- Demo Mock user role is read from `localStorage` key `userRole`; switching roles updates it. Real products must enforce authorization server-side [S/R].
- The auth token helpers use `localStorage`; clear the token and cached user state on logout [S].
- Route metadata drives `requiresAuth`, `hideInMenu`, and `activeMenu`. Unauthorized routes redirect to the not-found/403 experience according to product policy [S/R].
- `v-permission` accepts a roles array such as `['admin', 'user']`; a missing roles value is a developer error. Render no inaccessible destructive control [S].
- Locale is cached as `arco-locale`; theme is cached as `arco-theme`. Keep keys stable across reloads and clear only through an explicit reset action [S].
- Color-weak mode is a global filter setting in the global settings drawer; ensure charts and status icons still include text/shape cues [S/R].
- Tab cache follows route names. Closing a tab removes its cache; refreshing a tab re-mounts it; keep unsaved form data only when the product explicitly supports it [S/R].

## 11. Charts and visualization rules

Use a consistent series order: Arco Blue `#165DFF`, green, orange, red, purple, then neutral gray. For dark mode choose lighter variants (the source uses `#4A7FF7` for a dark-mode overview icon) and verify contrast [S/R]. Keep chart tooltips readable, with a 6px radius and compact 13px labels when using the source `echarts-tooltip-diy` pattern [S].

Wrap ECharts in the shared chart component, allow `width="100%"`, `height="100%"`, and `autoResize`, and delay first render until the container has expanded. Generate options from `useChartOption(isDark)` so theme changes recompute options; ECharts theme registration is a pending enhancement [S]. Do not mutate a reactive option object in place [D/R].

Every visualization needs four states: loading (`a-spin`/skeleton), no data (explain what filter to change), request or render failure (message plus retry), and ready. Keep legend, axis labels and color meaning accessible [R].

## 12. Interaction and accessibility

- Keyboard order follows visual order. All icon-only buttons have an accessible name; all dialogs/drawers trap focus and return it to the trigger on close [R].
- Use Arco icons by semantic name (`icon-search`, `icon-language`, `icon-moon-fill`, `icon-sun-fill`, `icon-notification`, `icon-fullscreen`, `icon-settings`, `icon-user`, `icon-export`) and do not substitute emoji [S/R].
- Preserve visible focus, a minimum 44px pointer target on mobile, and at least WCAG AA contrast for text and controls [R/V].
- Respect `prefers-reduced-motion`; never use motion as the only status cue [R].
- Long labels and table cells wrap or truncate with an accessible full value. Avoid horizontal page scrolling; permit table-level scroll [R].
- Upload validation explains accepted type/size, reports progress, and lets users remove or retry failed items [R].
- Disabled controls explain why through adjacent copy when the reason is not obvious. Permission-denied actions should not appear enabled [R].

## 13. Do / Don't

| Do | Don't |
| --- | --- |
| Use Arco variables and component states. | Hard-code a light-only color over a theme variable. |
| Keep one primary action per card or form section. | Give every button primary emphasis. |
| Preserve filters and entered values after a failed request. | Reset a user's work after an error. |
| Make tables scroll at mobile widths. | Shrink 10 columns until labels become unreadable. |
| Pair status color with text/icon/shape. | Encode success or failure by color alone. |
| Reuse route metadata and permission directives. | Trust a hidden button as authorization. |
| Show loading, empty, error and retry states. | Leave a blank panel while data is fetching. |
| Use short, translatable labels and semantic icons. | Put essential instructions only in tooltips. |

## 14. AI agent implementation prompt

Read this DESIGN.md before editing the target Vue 3 application. Match the 2.7.3 shell, tokens, 14px density, 60px/220px/48px/40px layout, breakpoints, and page recipe. Use Arco Design Vue components and existing route metadata. Preserve Pinia, Vue Router, vue-i18n, Axios/Mock, permission and business contracts. Implement light/dark, mobile drawer, loading/empty/error/validation/success/disabled/permission states, keyboard focus, and retry. Label assumptions as `[R]` and unresolved checks as `[V]`; do not copy source snapshots or install dependencies unless asked.

## 15. Acceptance checklist

- [ ] Front matter reports version `2.7.3`, tag `v2.7.3`, source commit and tree.
- [ ] `#165DFF`, Arco gray/semantic tokens, light/dark surfaces, `Inter`, CJK fallback and 14px body are used.
- [ ] Navbar/sider/footer dimensions are 60px/220px/48px/40px; content edge is 20px and grid gap is 16px.
- [ ] All six breakpoints and the 992px + 100ms responsive rule are implemented.
- [ ] Navbar controls, menu modes, breadcrumb, optional tabs, settings drawer, notification popover, avatar menu, fullscreen and mobile drawer are covered.
- [ ] Component recipes cover Button, Form, Input, Select, Table, Card, Tabs, Steps, List, Upload, Result, Alert, Spin, Skeleton, Pagination, Dropdown, Popover and Tooltip.
- [ ] Page recipes cover Workplace, Monitor, Search Table, Card List, Step/Group Form, Profile, User Center, Visualization, Login, Result and 403/404/500.
- [ ] Mock/API, login, role permission, `v-permission`, locale/theme/color-weak and tab-cache behavior are documented.
- [ ] Chart palette, ECharts boundary, loading/empty/failure/validation/success/disabled/permission states and accessibility rules are present.
- [ ] `scripts/verify-docs.mjs`, JSON parsing, Markdown links and `git diff --check` pass.

## 16. Known gaps and source index

The audited scope excludes installing dependencies, running the reference app, browser UI tests, backend/API verification, performance profiling, and assistive-technology testing [V]. The shared chart wrapper leaves ECharts theme registration as a TODO; validate custom chart themes before adding them [S/V]. The demo Mock endpoints and role switch are illustrative only; replace them with product authorization [S/R].

Source groups used for this edition:

- `arco-design-pro-vite/src/layout` — shell, navbar, sider, page layout and footer.
- `arco-design-pro-vite/src/components` — menu, breadcrumb, tab bar, global settings, message box and chart wrapper.
- `arco-design-pro-vite/src/assets/style` — global tokens and six breakpoints.
- `arco-design-pro-vite/src/hooks` and `src/store` — responsive, locale, theme, chart and tab state.
- `arco-design-pro-vite/src/views` — dashboard, list, form, profile, user, visualization, login, result and exception recipes.
- `arco-design-pro-vite/src/api`, `src/mock`, `src/directive/permission` — request, demo data and role constraints.

See [`AUDIT.md`](AUDIT.md), [`AUDIT.en-US.md`](AUDIT.en-US.md), and [`SOURCES.json`](SOURCES.json) for the fixed commit, dependency ranges, 259-file snapshot count and verification method.