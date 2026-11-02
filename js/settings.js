const body = $('body');
const html = $('html');

function quixSettings({version, layout, navheaderBg, headerBg, sidebarStyle, sidebarBg, sidebarPosition, headerPosition, containerLayout, direction}) {
    this.version = version || "light";
    this.layout = layout || "vertical";
    this.navheaderBg = navheaderBg || "color_1";
    this.headerBg = headerBg || "color_1";
    this.sidebarStyle = sidebarStyle || "full";
    this.sidebarBg = sidebarBg || "color_1";
    this.sidebarPosition = sidebarPosition || "static";
    this.headerPosition = headerPosition || "static";
    this.containerLayout = containerLayout || "wide";
    this.direction = direction || "ltr";

    this.manageVersion();
    this.manageLayout();
    this.manageNavHeaderBg();
    this.manageHeaderBg();
    this.manageSidebarStyle();
    this.manageSidebarBg();
    this.manageSidebarPosition();
    this.manageHeaderPosition();
    this.manageContainerLayout();
    this.manageRtlLayout();
    this.manageResponsiveSidebar();

}

quixSettings.prototype.manageVersion = function() {
    // 主题三态：light（亮色）/ dark（暗色）/ auto（跟随系统，默认）
    // 用户选择持久化在 localStorage，优先级高于 gleek.js 配置
    var stored = null;
    try { stored = localStorage.getItem("quixlab-theme-mode"); } catch (e) {}
    var mode = stored || this.version || "auto";
    if (["light", "dark", "auto"].indexOf(mode) === -1) { mode = "auto"; }
    body.attr("data-theme-mode", mode);
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var apply = function() {
        // 仅 auto 模式跟随系统变化；用户手动选择后不再被系统覆盖
        if ((body.attr("data-theme-mode") || "auto") !== "auto") { return; }
        body.attr("data-theme-version", mq.matches ? "dark" : "light");
    };
    if (mq.addEventListener) { mq.addEventListener("change", apply); }
    else if (mq.addListener) { mq.addListener(apply); }
    body.attr("data-theme-version", (mode === "auto") ? (mq.matches ? "dark" : "light") : mode);
}

quixSettings.prototype.manageLayout = function() {
    switch(this.layout) {
        case "horizontal": 
            this.sidebarStyle === "overlay" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", `${this.sidebarStyle}`);
            body.attr("data-layout", "horizontal");
            break;
        case "vertical": 
            body.attr("data-layout", "vertical");
            break;
        default:
            body.attr("data-layout", "vertical");
    }
}

quixSettings.prototype.manageNavHeaderBg = function() {
    switch(this.navheaderBg) {
        case "color_1": 
            body.attr("data-nav-headerbg", "color_1");
            break;
        case "color_2": 
            body.attr("data-nav-headerbg", "color_2");
            break;
        case "color_3": 
            body.attr("data-nav-headerbg", "color_3");
            break;
        case "color_4": 
            body.attr("data-nav-headerbg", "color_4");
            break;
        case "color_5": 
            body.attr("data-nav-headerbg", "color_5");
            break;
        case "color_6": 
            body.attr("data-nav-headerbg", "color_6");
            break;
        case "color_7": 
            body.attr("data-nav-headerbg", "color_7");
            break;
        case "color_8": 
            body.attr("data-nav-headerbg", "color_8");
            break;
        case "color_9": 
            body.attr("data-nav-headerbg", "color_9");
            break;
        case "color_10": 
            body.attr("data-nav-headerbg", "color_10");
            break;
        default:
            body.attr("data-nav-headerbg", "color_1");
    }
}

quixSettings.prototype.manageHeaderBg = function() {
    switch(this.headerBg) {
        case "color_1": 
            body.attr("data-headerbg", "color_1");
            break;
        case "color_2": 
            body.attr("data-headerbg", "color_2");
            break;
        case "color_3": 
            body.attr("data-headerbg", "color_3");
            break;
        case "color_4": 
            body.attr("data-headerbg", "color_4");
            break;
        case "color_5": 
            body.attr("data-headerbg", "color_5");
            break;
        case "color_6": 
            body.attr("data-headerbg", "color_6");
            break;
        case "color_7": 
            body.attr("data-headerbg", "color_7");
            break;
        case "color_8": 
            body.attr("data-headerbg", "color_8");
            break;
        case "color_9": 
            body.attr("data-headerbg", "color_9");
            break;
        case "color_10": 
            body.attr("data-headerbg", "color_10");
            break;
        default:
            body.attr("data-headerbg", "color_1");
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
            this.layout === "horizontal" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", "overlay");
            break;
        default:
            body.attr("data-sidebar-style", "full");
    }
}

quixSettings.prototype.manageSidebarBg = function() {
    switch(this.sidebarBg) {
        case "color_1": 
            body.attr("data-sibebarbg", "color_1");
            break;
        case "color_2": 
            body.attr("data-sibebarbg", "color_2");
            break;
        case "color_3": 
            body.attr("data-sibebarbg", "color_3");
            break;
        case "color_4": 
            body.attr("data-sibebarbg", "color_4");
            break;
        case "color_5": 
            body.attr("data-sibebarbg", "color_5");
            break;
        case "color_6": 
            body.attr("data-sibebarbg", "color_6");
            break;
        case "color_7": 
            body.attr("data-sibebarbg", "color_7");
            break;
        case "color_8": 
            body.attr("data-sibebarbg", "color_8");
            break;
        case "color_9": 
            body.attr("data-sibebarbg", "color_9");
            break;
        case "color_10": 
            body.attr("data-sibebarbg", "color_10");
            break;
        default:
            body.attr("data-sibebarbg", "color_1");
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
        case "boxed":
            if(this.layout === "vertical" && this.sidebarStyle === "full") {
                body.attr("data-sidebar-style", "overlay");
            }
            body.attr("data-container", "boxed");
            break;
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
}