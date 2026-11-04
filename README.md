# 24K-Bootstrap — Dashboard Template

> 台管理界面模板，基于 **Bootstrap** 构建。
> 纯静态 HTML/CSS/JS 项目，解压即用，无需安装依赖、无需构建工具。

## 项目简介

一套功能齐全的仪表盘 / 后台 UI 模板，覆盖仪表盘、图表、表单、表格、UI 组件、布局变体、邮件系统、错误页等常见后台场景。所有页面均为独立 HTML 文件，通过本地引用 `plugins/` 下的静态资源运行，适合作为管理系统的前端起点或原型演示。

## 技术栈

| 类别     | 技术 / 版本      |
| ------ | ------ |
| UI 框架  | Bootstrap 4.1.3 |
| JS 库   | jQuery 3.3.1     |
| 样式     | SCSS（编译产物 `css/style.css` + source map）  |
| 字体     | Google Fonts — Noto Sans SC（400/500/700）    |
| 图表     | Chart.js、Chartist、Morris、Flot、ECharts、Highcharts、C3、Rickshaw、Sparkline、Peity 等                                    |
| 图标     | Font Awesome、Material Design Icons、Themify、Ionicons、Simple Line Icons、Weather Icons、Flag Icons、CryptoCoins 等 10 套 |
| 数据表格   | DataTables、FooTable、jsGrid、jQuery Bootgrid                                                                        |
| 其他常用插件 | FullCalendar、SweetAlert(2)、Toastr、Select2、DataMaps、Moment.js、NouiSlider、Dropify、Cropper.js 等 120+ 插件              |

## 目录结构

```
24K-Bootstrap/
├── index.html              # 主仪表盘（默认入口）
├── css/
│   ├── style.css           # 模板主样式（编译产物）
│   └── style.css.map       # Source Map
├── js/
│   ├── custom.min.js       # 模板核心交互（preloader、菜单、下拉等）
│   ├── gleek.js            # 侧边栏菜单渲染逻辑
│   ├── settings.js         # 全局设置
│   ├── styleSwitcher.js    # 主题/配色切换器
│   ├── dashboard/          # 各仪表盘页面的图表数据与初始化
│   └── plugins-init/       # 每个第三方插件的初始化脚本（80+ 个）
├── plugins/                # 全部第三方库（本地化引入，约 120+ 个）
├── icons/                  # 10 套图标库
├── layout/                 # 布局变体页面
├── ui/                     # UI 组件与实用组件页面
├── form/                   # 表单页面
├── chart/                  # 图表页面
├── table/                  # 表格页面
└── images/                 # 静态图片
```

## 图标库

项目自带 10 套图标库（位于 `icons/`），全部由 `css/style.css` 顶部 `@import` 统一加载，页面无需单独引用。

| 图标库 | 类名前缀 | 版本 | 图标数量  |
| --- | --- | --- | --- |
| Simple Line Icons | `icon-*` | 未标注 | 183 |
| Material Design Icons | `mdi mdi-*` | 未标注 | 2,519 |
| Font Awesome | `fa fa-*` | 4.7.0 | 786 |
| Themify Icons | `ti-*` | 未标注 | 352 |
| Cryptocoins | `cc` + 币种类 | 未标注 | 144|
| Ionicons | `ion-*` | 2.0.0 | 733 |
| Weather Icons | `wi wi-*` | 2.0 | 572 |
| Linea Icons | `icon-<分组>-*` | 未标注 | 716 |
| PE Icon Set – Weather | `pe-is-w-*` | 未标注 | 208 |
| Flag Icons | `flag-icon-*`（SVG） | 未标注 | 249 |

## 快速开始

无需 `npm install`，直接用浏览器打开即可：

```bash
# 方式一：直接双击 index.html

# 方式二：起一个本地静态服务器（推荐，避免部分浏览器限制）
python -m http.server 8080
# 或
npx serve .
```

然后访问 `http://localhost:8080`。

> 注意：`css/style.css` 通过 `@import` 引用了 Google Fonts，离线环境会缺少字体但不影响功能。

## 二次开发

1. **改样式**：所有页面共用 `css/style.css`。若需从源码修改，模板自带 SCSS 结构（Bootstrap SCSS 位于 `plugins/bootstrap/scss/`），改动后需自行用 Sass 编译。
2. **改菜单**：侧边栏菜单由 `js/gleek.js` 渲染，页面内以 `<nav class="sidebar-nav">` 中的 HTML 结构定义。
3. **改图表数据**：仪表盘数据集中在 `js/dashboard/`，各插件的初始化逻辑集中在 `js/plugins-init/`，与页面一一对应。
4. **新增页面**：复制 `blank.html` 作为起点，按需引入所需插件的 CSS/JS 即可。
5. **删减体积**：`plugins/` 目录为全量打包（120+ 插件），实际只用到其中一部分，可按页面引用关系删除未使用的插件目录以减小体积。

## 提交信息规范

1.使用约定式提交（Conventional Commits）：

feat: 新功能，fix: 修复 bug，docs: 文档更新，refactor: 重构，test: 测试相关，chore: 构建过程或辅助工具变动，build: 打包构建相关修改，ci: 持续集成相关修改，style: 代码格式调整

2.提交信息格式：
```
<type>: <subject>
```
- type：提交类型，例如：feat、fix、docs、style、refactor、perf、test、build、ci、chore
- subject：提交主题，简洁明了地描述本次提交的内容

## 许可

- 所含第三方插件版权归各自作者所有，使用前请查阅对应插件目录内的 LICENSE 文件。
