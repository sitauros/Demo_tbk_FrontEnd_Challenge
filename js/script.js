$(document).ready(function() {

    $window = $(window);
    $document = $(document);
    $popover = $("#popover");
    $chisel = $("#chisel > picture > img");
    $shaving = $("#shaving > picture > img");

    // Remove px from CSS string and then parse int
    var shavingBottom = parseInt($shaving.css("bottom").substring (0, $shaving.css("bottom").length -2));
    var chiselBottom = parseInt($chisel.css("bottom").substring (0, $chisel.css("bottom").length -2));

    // Maximum number of pixels images can move without exiting upper section
    var distanceToBottom = shavingBottom;
    var distanceToTop = $chisel.offset().top - $popover.offset().top;

    $(window).scroll(function(event){   
        var maxScrollTop = $document.height() - $window.height();
        var scrollRatio = $window.scrollTop() / maxScrollTop;
        var shavingDelta = Math.floor(scrollRatio * distanceToBottom) * -1;
        var chiselDelta = Math.floor(scrollRatio * distanceToTop);
    
        $chisel.css({bottom: chiselBottom + chiselDelta + 'px'});
        $shaving.css({bottom: shavingBottom + shavingDelta + 'px'});
    });

});