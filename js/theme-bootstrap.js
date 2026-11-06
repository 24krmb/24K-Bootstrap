/* theme-bootstrap：首帧前写入主题属性，避免暗色模式闪白（逻辑与 settings.js 一致）。
   必须以同步 <script src> 置于 <body> 开头：解析在此暂停，属性写入后才继续渲染内容。 */
(function () {
    "use strict";
    try {
        var m = localStorage.getItem("24krmb-theme-mode") || "auto";
        var d = m === "dark" || (m === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.body.setAttribute("data-theme-version", d ? "dark" : "light");
    } catch (e) { /* 隐私模式等场景静默降级，gleek.js 会在 body 末尾兜底 */ }
})();
