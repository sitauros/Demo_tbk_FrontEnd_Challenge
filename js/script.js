var THREE_SECONDS = 3000;

$(document).ready(function() {
    $window = $(window);
    $document = $(document);
    $overlay = $("#overlay");
    $container = $(".container");
    $popover = $("#popover");
    $chisel = $("#chisel > picture > img");
    $shaving = $("#shaving > picture > img");

    // Remove "px" from CSS value, then parse as int
    var shavingBottom = parseInt($shaving.css("bottom").substring (0, $shaving.css("bottom").length -2));

    // Maximum number of pixels images can move without exiting upper section
    var distanceToBottom = shavingBottom;
    var distanceToTop = $chisel.offset().top - $popover.offset().top;

    $(window).scroll(function(event){   
        var maxScrollTop = $document.height() - $window.height();
        var scrollRatio = $window.scrollTop() / maxScrollTop;
        var shavingDelta = Math.floor(scrollRatio * distanceToBottom) * -1;
        var chiselDelta = Math.floor(scrollRatio * distanceToTop);
    
        $chisel.css({bottom: chiselDelta + 'px'});
        $shaving.css({bottom: shavingBottom + shavingDelta + 'px'});
    });
});

$(window).on('load', function() {
    setTimeout(function() {
        toggle_popover();
    },THREE_SECONDS);
})

function toggle_popover() {
    $overlay.css("visibility", $overlay.css("visibility") == "visible" ? "hidden" : "visible");
    $container.css("visibility", $container.css("visibility") == "visible" ? "hidden" : "visible");
    $chisel.css("visibility", $chisel.css("visibility") == "visible" ? "hidden" : "visible");
}