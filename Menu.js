$(document).ready(function () {
    $(".fa-times").click(function () {
            $("div.header_content").addClass("hide1");
            $("div.dp-container").addClass("hide1");
            $('.fa-times').removeClass("tgbtn fas fa-times").addClass("tgbtn fas fa-plus");
    });
});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

        
