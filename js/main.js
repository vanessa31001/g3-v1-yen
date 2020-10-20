// hamburger icon 的切換
$(function(){
            
    $("button.hamburger").on("click", function(){
        $(this).toggleClass("is-active");
        $('.nav_list').slideToggle();
    });
});

// 首頁滑鼠移動效果
$(function() {
    var $el = $('.home');
    var mousePos = {};
    var boxCenter = {
        x: $el.outerWidth() / 2,
        y: $el.outerHeight() / 2
    };
    var bgPos = 50;
        
    $el.mousemove(function(e) {
        var x = e.offsetX === undefined ? e.layerX : e.offsetX;
        var y = e.offsetY === undefined ? e.layerY : e.offsetY;
        
        x -= boxCenter.x;
        y -= boxCenter.y;
        
        var moveX = bgPos + (x / 14);
        var moveY = bgPos + (y / 14);
        $el
        .css('background-size', '110%')
        .css('background-position', moveX +'% ' + moveY +'%');
    })
    .mouseleave(function() {
        $el
        .css('background-size', '100%');
    });
});
