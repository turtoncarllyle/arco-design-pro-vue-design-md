# arco-design-pro-vue-design-md

[简体中文](README.md) | [English](README.en-US.md)

[![Arco Design Pro Vue](https://img.shields.io/badge/Arco%20Design%20Pro%20Vue-2.7.3-165DFF)](https://github.com/arco-design/arco-design-pro-vue/tree/v2.7.3)
[![DESIGN.md](https://img.shields.io/badge/DESIGN.md-AI%20ready-165DFF)](https://stitch.withgoogle.com/docs/design-md/overview/)
[![License](https://img.shields.io/badge/license-MIT-1D2129)](LICENSE)

A versioned design specification for AI coding agents building information-dense admin systems with Arco Design Pro Vue.

DESIGN.md is the plain-text design-system format introduced by Google Stitch. It turns colors, typography, application-shell rules, component composition, interaction states, and responsive behavior into constraints an AI agent can read directly. It is a visual specification, not an Arco Design Vue API reference and not a replacement for application routing, permissions, APIs, or business rules.

## Purpose and Context

This repository extracts real layout dimensions, Arco Design tokens, component usage, and page recipes from the official Arco Design Pro Vue v2.7.3 source. It is useful for:

- building or revising Arco Design Pro Vue admin pages;
- keeping navigation, cards, tables, forms, and feedback states consistent;
- preserving one information hierarchy across light/dark themes and desktop/mobile states;
- guiding AI generation of Workplace, Monitor, list, form, profile, visualization, login, and exception pages;
- selecting a specification that matches the code snapshot when the upstream project is upgraded.

The target is an operational admin application, not a marketing site, editorial portal, or consumer product. Data models, API contracts, permissions, route names, and component APIs remain governed by the target application.

## Supported Version

| Upstream | Vue | Arco Design Vue | Canonical English | Simplified Chinese | GitHub Release |
| --- | --- | --- | --- | --- | --- |
| 2.7.3 | 3.2.47 | 2.45.0 | [DESIGN.md](versions/2.7.3/DESIGN.md) | [DESIGN.zh-CN.md](versions/2.7.3/DESIGN.zh-CN.md) | [v2.7.3](https://github.com/turtoncarllyle/arco-design-pro-vue-design-md/releases/tag/v2.7.3) |

DESIGN.md is the canonical ecosystem-compatible edition. The Chinese edition keeps the same sections, tokens, measurements, and rules. The version directory and front matter version identify upstream; documentation corrections do not create another revision number.

The main branch is the maintenance entry for the version. Release assets represent a publication snapshot. For immutable content, use the full SHA of a commit in this repository rather than the upstream source SHA.

Audit and evidence:

- [Chinese audit](versions/2.7.3/AUDIT.md)
- [English audit](versions/2.7.3/AUDIT.en-US.md)
- [Source manifest](versions/2.7.3/SOURCES.json)

## Usage

1. Confirm that the project uses Arco Design Pro Vue 2.7.3 and its Arco Design Vue component library.
2. Read versions/2.7.3/DESIGN.md or versions/2.7.3/DESIGN.zh-CN.md.
3. Download the selected file into the project root as DESIGN.md, or reference the repository path in the agent prompt.
4. Require the agent to preserve existing Vue 3, Pinia, Vue Router, vue-i18n, Mock/API, permission, and business interaction contracts.
5. Verify light/dark, desktop/mobile, loading/empty/error/validation, and permission states after implementation.

Download the English edition with Windows PowerShell:

    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/turtoncarllyle/arco-design-pro-vue-design-md/main/versions/2.7.3/DESIGN.md" -OutFile ".\DESIGN.md"

Download the Simplified Chinese edition:

    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/turtoncarllyle/arco-design-pro-vue-design-md/main/versions/2.7.3/DESIGN.zh-CN.md" -OutFile ".\DESIGN.md"

Suggested prompt:

    Read DESIGN.md before implementation. Follow the Arco Design Pro Vue 2.7.3
    shell, light/dark themes, Arco Design Vue component composition, 14px density,
    breakpoints, and page recipes. Preserve existing Vue, Pinia, routes,
    permissions, APIs, Mock data, and business interactions. Implement loading,
    empty, validation failure, request failure, retry, success, disabled, and
    mobile states. Distinguish [S] source facts, [D] dependency behavior,
    [R] application additions, and [V] pending checks.

## Coverage

- Arco Design colors, gray scales, semantic states, light/dark surfaces and text;
- Inter and Chinese font stack, type scale, line height, radii, borders, shadows, and motion;
- 60px navbar, 220px sidebar, 48px collapsed sidebar, 40px footer, and mobile drawer;
- menu, breadcrumb, optional Tab Bar, global settings, notification, user menu, and fullscreen;
- Button, Form, Input, Select, Table, Card, Tabs, Steps, List, Upload, Result, Alert, Spin, Skeleton, Pagination, Dropdown, Popover, Tooltip;
- Workplace, Monitor, Search Table, Card List, Step/Group Form, Profile, User Center, Visualization, Login, Result, and Exception recipes;
- Mock requests, login storage, role permissions, locale switching, theme switching, color-weak mode, and tab caching;
- chart palettes, responsive grids, keyboard focus, icon naming, contrast, and extension boundaries.

## Sources and Boundaries

The upstream repository is [arco-design/arco-design-pro-vue](https://github.com/arco-design/arco-design-pro-vue), pinned to [v2.7.3](https://github.com/arco-design/arco-design-pro-vue/tree/v2.7.3), commit 27020819af653243b7b1a3e8e2481d6b3d798749. All 259 local snapshot files match the 259 upstream Git blobs for that commit.

This is an independent design specification. It is not official documentation for Arco Design, ByteDance, or Google Stitch. Arco Design Pro Vue, Arco Design, and related marks belong to their respective owners. Upstream source remains under its MIT License; original documentation in this repository is MIT licensed.
