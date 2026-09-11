#!/usr/bin/env node
/** Static and source-snapshot checks for arco-design-pro-vue-md. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const versionDir = path.join(root, 'versions', '2.7.3');
const manifestPath = path.join(versionDir, 'SOURCES.json');
const args = process.argv.slice(2);
const sourceArgIndex = args.indexOf('--source');
const sourceDir = sourceArgIndex >= 0 && args[sourceArgIndex + 1]
  ? path.resolve(args[sourceArgIndex + 1])
  : null;
const errors = [];
const checks = [];
function check(ok, message) {
  if (ok) checks.push(`PASS ${message}`);
  else errors.push(`FAIL ${message}`);
}
function readUtf8(file) {
  const buf = fs.readFileSync(file);
  check(!(buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf), `UTF-8 without BOM: ${path.relative(root, file)}`);
  return buf.toString('utf8');
}
function frontMatter(text, file) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  check(Boolean(match), `front matter: ${path.relative(root, file)}`);
  const values = {};
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const m = line.match(/^([A-Za-z_]+):\s*["']?([^"']+?)["']?\s*$/);
      if (m) values[m[1]] = m[2];
    }
  }
  return values;
}
function sha1GitBlob(buffer) {
  const header = Buffer.from(`blob ${buffer.length}\0`, 'utf8');
  return crypto.createHash('sha1').update(Buffer.concat([header, buffer])).digest('hex');
}
function markdownLinks(file, text) {
  const linkRe = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRe.exec(text))) {
    const target = match[1].trim().split('#')[0];
    if (!target || /^(?:https?:|mailto:|data:|#)/i.test(target)) continue;
    const resolved = path.resolve(path.dirname(file), target);
    check(fs.existsSync(resolved), `relative link ${path.relative(root, file)} -> ${target}`);
  }
}

const manifest = JSON.parse(readUtf8(manifestPath));
check(manifest.version === '2.7.3', 'manifest version 2.7.3');
check(manifest.upstream_tag === 'v2.7.3', 'manifest upstream tag v2.7.3');
check(manifest.source_commit === '27020819af653243b7b1a3e8e2481d6b3d798749', 'manifest source commit');
check(manifest.source_tree === 'f40c5bc7e7a37e0590d945b2b4eee0faeafb1d73', 'manifest source tree');
check(manifest.snapshot_file_count === 259 && manifest.upstream_blob_count === 259, 'manifest 259-file / 259-blob counts');
check(Object.keys(manifest.blob_sha1 ?? {}).length === 259, 'manifest contains 259 blob hashes');

const docFiles = [
  path.join(versionDir, 'DESIGN.md'),
  path.join(versionDir, 'DESIGN.zh-CN.md'),
  path.join(versionDir, 'AUDIT.md'),
  path.join(versionDir, 'AUDIT.en-US.md'),
  path.join(root, 'README.md'),
  path.join(root, 'README.en-US.md'),
  path.join(root, 'CHANGELOG.md'),
  path.join(root, 'LICENSE'),
  path.join(root, 'scripts', 'verify-docs.mjs'),
];
const texts = new Map();
for (const file of docFiles) {
  check(fs.existsSync(file), `file exists: ${path.relative(root, file)}`);
  if (fs.existsSync(file)) texts.set(file, readUtf8(file));
}
const design = texts.get(docFiles[0]) ?? '';
const designZh = texts.get(docFiles[1]) ?? '';
for (const file of [docFiles[0], docFiles[1], docFiles[2], docFiles[3]]) {
  const fm = frontMatter(texts.get(file) ?? '', file);
  check(fm.version === '2.7.3', `front matter version: ${path.relative(root, file)}`);
  check(fm.source_commit === manifest.source_commit, `front matter source commit: ${path.relative(root, file)}`);
}
const requiredLiterals = [
  '2.7.3', 'v2.7.3', '27020819af653243b7b1a3e8e2481d6b3d798749',
  '#165DFF', 'Inter', '14px', '60px', '220px', '48px', '40px', '20px', '16px', '4px',
  '480px', '576px', '768px', '992px', '1200px', '1600px', '100ms',
  'Button', 'Form', 'Input', 'Select', 'Table', 'Card', 'Tabs', 'Steps', 'List', 'Upload',
  'Result', 'Alert', 'Spin', 'Skeleton', 'Pagination', 'Dropdown', 'Popover', 'Tooltip',
  'Workplace', 'Monitor', 'Search Table', 'Card List', 'Step Form', 'Group Form', 'Profile',
  'User Center', 'Visualization', 'Login', '403', '404', '500', 'v-permission',
  'loading', 'empty', 'error', 'success', 'disabled', 'permission', 'ECharts',
];
for (const literal of requiredLiterals) check(design.includes(literal), `DESIGN.md literal: ${literal}`);
for (const literal of ['2.7.3', '#165DFF', 'Inter', '14px', '60px', '220px', '48px', '40px', '20px', '16px', '4px', '480px', '576px', '768px', '992px', '1200px', '1600px', '100ms', 'v-permission', 'Workplace', 'Monitor', 'Visualization', 'Login', '403', '404', '500']) {
  check(designZh.includes(literal), `DESIGN.zh-CN.md literal: ${literal}`);
}
const headings = (text) => [...text.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
check(headings(design).length === headings(designZh).length, 'bilingual H2 section count matches');
check(headings(design).length >= 16, 'DESIGN has at least 16 H2 sections');
for (const [file, text] of texts) markdownLinks(file, text);
check((texts.get(docFiles[4]) ?? '').includes('versions/2.7.3/DESIGN.md'), 'README version link');
check((texts.get(docFiles[4]) ?? '').includes('v2.7.3'), 'README release tag link');

if (sourceDir) {
  check(fs.existsSync(sourceDir), `source directory exists: ${sourceDir}`);
  if (fs.existsSync(sourceDir)) {
    const sourceFiles = [];
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.isFile()) sourceFiles.push(full);
      }
    };
    walk(sourceDir);
    sourceFiles.sort((a, b) => a.localeCompare(b));
    check(sourceFiles.length === 259, `source snapshot file count: ${sourceFiles.length}`);
    let matched = 0;
    const expected = manifest.blob_sha1 ?? {};
    for (const file of sourceFiles) {
      const rel = path.relative(sourceDir, file).split(path.sep).join('/');
      const actual = sha1GitBlob(fs.readFileSync(file));
      check(expected[rel] === actual, `blob ${rel}`);
      if (expected[rel] === actual) matched += 1;
    }
    check(matched === 259, `all 259 Git blob hashes match (${matched})`);
    const viteRoot = path.join(sourceDir, 'arco-design-pro-vite');
    const packageJsonPath = path.join(viteRoot, 'package.json');
    const settingsPath = path.join(viteRoot, 'src', 'config', 'settings.json');
    const responsivePath = path.join(viteRoot, 'src', 'hooks', 'responsive.ts');
    const breakpointPath = path.join(viteRoot, 'src', 'assets', 'style', 'breakpoint.less');
    const layoutPath = path.join(viteRoot, 'src', 'layout', 'default-layout.vue');
    const packageText = readUtf8(packageJsonPath);
    const settingsText = readUtf8(settingsPath);
    const responsiveText = readUtf8(responsivePath);
    const breakpointText = readUtf8(breakpointPath);
    const layoutText = readUtf8(layoutPath);
    const pkg = JSON.parse(packageText);
    check(pkg.version === '1.0.0', 'reference app package version 1.0.0');
    check(settingsText.includes('"theme": "light"') && settingsText.includes('"themeColor": "#165DFF"'), 'settings theme and primary color');
    check(settingsText.includes('"menuWidth": 220') && settingsText.includes('"footer": true') && settingsText.includes('"tabBar": false'), 'settings layout defaults');
    for (const value of ['480px', '576px', '768px', '992px', '1200px', '1600px']) check(breakpointText.includes(value), `source breakpoint ${value}`);
    check(responsiveText.includes('const WIDTH = 992'), 'source mobile threshold 992');
    check(responsiveText.includes('useDebounceFn(resizeHandler, 100)'), 'source resize debounce 100ms');
    check(layoutText.includes('navbarHeight = `60px`') && layoutText.includes('return appStore.menuCollapse ? 48 : appStore.menuWidth'), 'source shell dimensions');
    const lockText = readUtf8(path.join(viteRoot, 'pnpm-lock.yaml'));
    for (const value of ['echarts: 5.4.2', 'pinia: 2.0.34', 'vue: 3.2.47', 'vue-i18n: 9.2.2', 'vue-router: 4.1.6', 'less: 4.1.3', 'vite: 3.2.5', 'typescript: 4.9.5']) check(lockText.includes(value), `lockfile resolved ${value}`);
}
}
for (const line of checks) console.log(line);
if (errors.length) {
  for (const line of errors) console.error(line);
  console.error(`\n${errors.length} check(s) failed.`);
  process.exit(1);
}
console.log(`\nAll ${checks.length} checks passed.`);