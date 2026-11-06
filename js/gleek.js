(function($) {
    "use strict"
    new quixSettings({
        version: "auto", //三种选项："light"（亮色）、"dark"（暗色）、"auto"（跟随系统，默认）；用户点击切换按钮后选择会保存在 localStorage 并优先于此配置
        layout: "vertical", //唯一选项："vertical"（水平布局已移除）
        sidebarStyle: "full", //定义侧边栏的外观样式，可选："full"、"compact"、"mini"和"overlay"
        containerLayout: "wide",  //唯一选项："wide"
        direction: "ltr" //"ltr" = 从左到右；"rtl" = 从右到左
    });
})(jQuery);
// // data-sibebarbg="color_2"