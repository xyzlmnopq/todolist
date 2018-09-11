//cheeck off specific todos by cclicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new text
        var todotext = $(this).val();
        $(this).val("");
        //create new li ann add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")
    }

});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});