const body = $('body');
const html = $('html');

function quixSettings({version, layout, sidebarStyle, sidebarPosition, headerPosition, containerLayout, direction}) {
    this.version = version || "light";
    this.layout = layout || "vertical";
    this.sidebarStyle = sidebarStyle || "full";
    this.sidebarPosition = sidebarPosition || "static";
    this.headerPosition = headerPosition || "static";
    this.containerLayout = containerLayout || "wide";
    this.direction = direction || "ltr";

    this.manageVersion();
    this.manageLayout();
    this.manageSidebarStyle();
    this.manageSidebarPosition();
    this.manageHeaderPosition();
    this.manageContainerLayout();
    this.manageRtlLayout();
    this.manageResponsiveSidebar();

}

var mqListenerBound = false;

quixSettings.prototype.manageVersion = function() {
    // 主题三态：light（亮色）/ dark（暗色）/ auto（跟随系统，默认）
    // 用户选择持久化在 localStorage，优先级高于 gleek.js 配置
    var stored = null;
    try { stored = localStorage.getItem("24krmb-theme-mode"); } catch (e) {}
    var mode = stored || this.version || "auto";
    if (["light", "dark", "auto"].indexOf(mode) === -1) { mode = "auto"; }
    body.attr("data-theme-mode", mode);
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var apply = function() {
        // 仅 auto 模式跟随系统变化；用户手动选择后不再被系统覆盖
        if ((body.attr("data-theme-mode") || "auto") !== "auto") { return; }
        body.attr("data-theme-version", mq.matches ? "dark" : "light");
    };
    // 页面可能重复实例化 quixSettings（如 layout 页自带配置），监听只绑一次
    if (!mqListenerBound) {
        if (mq.addEventListener) { mq.addEventListener("change", apply); }
        else if (mq.addListener) { mq.addListener(apply); }
        mqListenerBound = true;
    }
    body.attr("data-theme-version", (mode === "auto") ? (mq.matches ? "dark" : "light") : mode);
}

quixSettings.prototype.manageLayout = function() {
    switch(this.layout) {
        case "vertical": 
            body.attr("data-layout", "vertical");
            break;
        default:
            body.attr("data-layout", "vertical");
    }
}

quixSettings.prototype.manageSidebarStyle = function() {
    switch(this.sidebarStyle) {
        case "full":
            body.attr("data-sidebar-style", "full");
            break;
        case "mini":
            body.attr("data-sidebar-style", "mini");
            break;
        case "compact":
            body.attr("data-sidebar-style", "compact");
            break;
        case "overlay":
            body.attr("data-sidebar-style", "overlay");
            break;
        default:
            body.attr("data-sidebar-style", "full");
    }
}

quixSettings.prototype.manageSidebarPosition = function() {
    switch(this.sidebarPosition) {
        case "fixed": 
            this.sidebarStyle === "overlay" && this.layout === "vertical" ? body.attr("data-sidebar-position", "static") : body.attr("data-sidebar-position", "fixed");
            break;
        case "static": 
            body.attr("data-sidebar-position", "static");
            break;
        default: 
            body.attr("data-sidebar-position", "static");       
    }
}

quixSettings.prototype.manageHeaderPosition = function() {
    switch(this.headerPosition) {
        case "fixed": 
            body.attr("data-header-position", "fixed");
            break;
        case "static": 
            body.attr("data-header-position", "static");
            break;
        default: 
            body.attr("data-header-position", "static");       
    }
}

quixSettings.prototype.manageContainerLayout = function() {
    switch(this.containerLayout) {
        case "wide":
            body.attr("data-container", "wide");
            break;
        default:
            body.attr("data-container", "wide");
    }
}

quixSettings.prototype.manageRtlLayout = function() {
    switch(this.direction) {
        case "rtl":
            html.attr("dir", "rtl");
            html.addClass('rtl');
            body.attr("direction", "rtl");
            break;
        case "ltr": 
            html.attr("dir", "ltr");
            html.removeClass('rtl');
            body.attr("direction", "ltr");
            break;
        default: 
            html.attr("dir", "ltr");
            body.attr("direction", "ltr");
    }
}

quixSettings.prototype.manageResponsiveSidebar = function() {
    const innerWidth = $(window).innerWidth();
    if(innerWidth < 1200) {
        body.attr("data-layout", "vertical");
        body.attr("data-container", "wide");
    }

    if(innerWidth > 767 && innerWidth < 1200) {
        body.attr("data-sidebar-style", "mini");
    }

    if(innerWidth < 768) {
        body.attr("data-sidebar-style", "overlay");
    }

    // 视口跨过断点时重放完整属性链（防抖 250ms）。
    // 仅重跑 manageResponsiveSidebar 无法恢复大屏属性（它只处理窄屏分支），
    // 故对最后一次实例的配置重放 layout/sidebar/container 等 manage*（主题 version/rtl 与视口无关，跳过）。
    // 命名空间绑定：重复实例化时自动覆盖旧监听，始终只挂一个。
    quixSettings._last = this;
    $(window).off("resize.quixResponsive").on("resize.quixResponsive", function() {
        clearTimeout(quixSettings._rzTimer);
        quixSettings._rzTimer = setTimeout(function() {
            var s = quixSettings._last;
            if (!s) { return; }
            s.manageLayout();
            s.manageSidebarStyle();
            s.manageSidebarPosition();
            s.manageHeaderPosition();
            s.manageContainerLayout();
            s.manageResponsiveSidebar();
        }, 250);
    });
}

// 占位链接统一为 href="#" 后，阻止默认行为（URL 追加 # 并滚动到页顶）。
// 侧栏父菜单由 metisMenu 自行 preventDefault；此处兜底主题切换按钮与装饰性链接。
$(document).on("click", 'a[href="#"]', function(e) {
    e.preventDefault();
});