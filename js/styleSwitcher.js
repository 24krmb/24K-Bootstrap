(function($) {
    "use strict"

    // 24K 主题切换：顶栏按钮，单击循环 自动(auto) → 亮色(light) → 暗色(dark)
    var MODES = ["auto", "light", "dark"];
    var ICONS = { auto: "fa-adjust", light: "fa-sun-o", dark: "fa-moon-o" };
    var LABELS = { auto: "自动（跟随系统）", light: "亮色", dark: "暗色" };

    function refreshButton(mode) {
        var $btn = $(".theme-toggle-btn");
        if (!$btn.length) { return; }
        $btn.find("i").removeClass().addClass("fa " + ICONS[mode]);
        var label = "主题：" + LABELS[mode] + "（点击切换）";
        $btn.attr("title", label).attr("aria-label", label);
    }

    function applyMode(mode) {
        var mq = window.matchMedia("(prefers-color-scheme: dark)");
        var version = (mode === "auto") ? (mq.matches ? "dark" : "light") : mode;
        $("body").attr("data-theme-mode", mode);
        $("body").attr("data-theme-version", version);
        refreshButton(mode);
    }

    function setMode(mode) {
        try { localStorage.setItem("24krmb-theme-mode", mode); } catch (e) {}
        applyMode(mode);
    }

    // 事件委托绑定：不依赖 DOM ready 时序，任何时刻的点击都能命中
    $(document).on("click", ".theme-toggle-btn", function() {
        var cur = $("body").attr("data-theme-mode") || "auto";
        var idx = MODES.indexOf(cur);
        setMode(MODES[(idx + 1) % MODES.length]);
    });
    // 初始化按钮状态（settings.js 已同步在 body 上写入 data-theme-mode）
    refreshButton($("body").attr("data-theme-mode") || "auto");

})(jQuery);
