# 24K-Bootstrap — Dashboard Template

> 台管理界面模板，基于 **Bootstrap 4.1.3** 构建。
> 纯静态 HTML/CSS/JS 项目，解压即用，无需安装依赖、无需构建工具。

## 项目简介

一套功能齐全的仪表盘 / 后台 UI 模板，提供 60+ 个预制页面，覆盖仪表盘、图表、表单、表格、UI 组件、布局变体、邮件系统、错误页等常见后台场景。所有页面均为独立 HTML 文件，通过本地引用 `plugins/` 下的静态资源运行，适合作为管理系统的前端起点或原型演示。

## 技术栈

| 类别 | 技术 / 版本 |
| --- | --- |
| UI 框架 | Bootstrap 4.1.3 |
| JS 库 | jQuery 3.3.1 |
| 样式 | SCSS（编译产物 `css/style.css` + source map） |
| 字体 | Google Fonts — Noto Sans SC（400/500/700） |
| 图表 | Chart.js、Chartist、Morris、Flot、ECharts、Highcharts、C3、Rickshaw、Sparkline、Peity 等 |
| 图标 | Font Awesome、Material Design Icons、Themify、Ionicons、Simple Line Icons、Weather Icons、Flag Icons、CryptoCoins 等 10 套 |
| 富文本编辑器 | CKEditor、TinyMCE、Summernote、Quill、wysihtml5 |
| 数据表格 | DataTables、FooTable、jsGrid、jQuery Bootgrid |
| 其他常用插件 | FullCalendar、SweetAlert(2)、Toastr、Select2、DataMaps、Moment.js、NouiSlider、Dropify、Cropper.js 等 120+ 插件 |

## 目录结构

```
24K-Bootstrap/
├── index.html              # 主仪表盘（默认入口）
├── *.html                  # 60+ 个演示页面（见下方页面清单）
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
└── images/                 # Logo、头像等静态图片
```

## 页面清单

- **仪表盘**：`index.html`、`widgets.html`
- **图表**：`chart-chartjs.html`、`chart-flot.html`、`chart-morris.html`、`chart-peity.html`、`chart-sparkline.html`、`chart-chartist.html`
- **UI 组件**：`ui-accordion.html`、`ui-alert.html`、`ui-badge.html`、`ui-button.html`、`ui-button-group.html`、`ui-cards.html`、`ui-carousel.html`、`ui-dropdown.html`、`ui-list-group.html`、`ui-media-object.html`、`ui-modal.html`、`ui-pagination.html`、`ui-popover.html`、`ui-progressbar.html`、`ui-tab.html`、`ui-typography.html`
- **表单**：`form-basic.html`、`form-editor.html`、`form-picker.html`、`form-step.html`、`form-validation.html`
- **表格**：`table-basic.html`、`table-datatable.html`
- **布局变体**：`layout-vertical.html`、`layout-horizontal.html`、`layout-dark.html`、`layout-light.html`、`layout-boxed.html`、`layout-compact-nav.html`、`layout-fixed-header.html`、`layout-fixed-sidebar.html`、`layout-wide.html`、`layout-one-column.html`、`layout-two-column.html`、`layout-blank.html`
- **应用示例**：`app-calender.html`、`app-profile.html`、`email-inbox.html`、`email-read.html`、`email-compose.html`
- **实用组件**：`uc-nestedable.html`、`uc-noui-slider.html`、`uc-sweetalert.html`、`uc-toastr.html`
- **认证页**：`page-login.html`、`page-register.html`、`page-lock.html`
- **错误页**：`page-error-400 / 403 / 404 / 500 / 503.html`
- **其他**：`blank.html`（空白起步页）

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

## 许可

- 所含第三方插件版权归各自作者所有，使用前请查阅对应插件目录内的 LICENSE 文件。
