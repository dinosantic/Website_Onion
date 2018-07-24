$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    var scrollSpeed = 2000;

    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, scrollSpeed);
});