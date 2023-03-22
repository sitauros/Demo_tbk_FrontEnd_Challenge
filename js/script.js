var ENTER_KEY = 13;
var THREE_SECONDS = 3000;
var open_popover = use_popover();

$(document).ready(function(){
    $window = $(window);
    $document = $(document);
    $overlay = $("#overlay");
    $popover = $("#popover");
    $container = $(".container");
    $close_button = $("#close_button");
    $chisel = $("#chisel > picture > img");
    $shaving = $("#shaving > picture > img");

    // Remove "px" from CSS value, then parse as int
    var shavingBottom = parseInt($shaving.css("bottom").substring (0, $shaving.css("bottom").length -2));

    // Maximum number of pixels images can move without exiting upper section
    var distanceToBottom = shavingBottom;
    var distanceToTop = $chisel.offset().top - $popover.offset().top;

    $window.scroll(function(event){   
        var maxScrollTop = $document.height() - $window.height();
        var scrollRatio = $window.scrollTop() / maxScrollTop;
        var shavingDelta = Math.floor(scrollRatio * distanceToBottom) * -1;
        var chiselDelta = Math.floor(scrollRatio * distanceToTop);
    
        $chisel.css({bottom: chiselDelta + 'px'});
        $shaving.css({bottom: shavingBottom + shavingDelta + 'px'});
    });

    $close_button.on("keypress click", function(event){
        if(event.type == 'click' || event.type == 'keypress' && event.which == ENTER_KEY){
            alert("Popover will remain closed until you restart the browser.");
            set_session_variable();
            toggle_popover();
        }
    });
});

$(window).on('load', function(){
    if(open_popover){
        setTimeout(function(){
            toggle_popover();
        },THREE_SECONDS);
    }
})

function toggle_popover(){
    $overlay.css("visibility", $overlay.css("visibility") == "visible" ? "hidden" : "visible");
    $container.css("visibility", $container.css("visibility") == "visible" ? "hidden" : "visible");
    $chisel.css("visibility", $chisel.css("visibility") == "visible" ? "hidden" : "visible");
}

function isSessionStorageEnabled(){
    return window.sessionStorage ? true : false;
}

// Normally would use try/catch to test local/session storage but only one script for this project
function set_session_variable(){
    if(!isSessionStorageEnabled()){
        alert("Unable to save session variable.")
    }
    else{
        sessionStorage.setItem("use_popover", "false")
    }
}

function use_popover(){    
    return isSessionStorageEnabled() && (sessionStorage.getItem("use_popover") == "false") ? false : true;
}