
$( document ).ready(function() {
    
    $(".toggle-btn").click( function() {
    
        $(".toggle-btn").toggleClass("close");
        $(".sidebar").toggleClass("sidebar-active");
        $(".main-content").toggleClass("main-content-active");
    });
    $("li").click(function(){
        $(".toggle-btn").toggleClass("close");
        $(".sidebar").toggleClass("sidebar-active");
        $(".main-content").toggleClass("main-content-active");
    })

    
});
