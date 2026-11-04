(function($) {
    "use strict"
    new quixSettings({
        version: "auto", //三种选项："light"（亮色）、"dark"（暗色）、"auto"（跟随系统，默认）；用户点击切换按钮后选择会保存在 localStorage 并优先于此配置
        layout: "vertical", //两种选项："vertical"（垂直）和 "horizontal"（水平）
        navheaderBg: "color_1", headerBg: "color_1",sidebarBg: "color_1", 
        sidebarStyle: "full", //定义侧边栏的外观样式，可选："full"（完整）、"compact"（紧凑）、"mini"（迷你）和 "overlay"（覆盖）。若 layout 为 "horizontal"，sidebarStyle 不再接受 "overlay"，会自动变为 "full"！
        sidebarPosition: "fixed", //两种选项："static"（静态）和 "fixed"（固定）
        headerPosition: "static", //两种选项："static"（静态）和 "fixed"（固定）
        containerLayout: "wide",  //"boxed"（盒装）和 "wide"（宽屏）两种。若 layout 为 "vertical" 且 containerLayout 为 "boxed"，sidebarStyle 会自动变为 "overlay"（覆盖）。
        direction: "ltr" //"ltr" = 从左到右；"rtl" = 从右到左
    });
})(jQuery);
// // data-sibebarbg="color_2"