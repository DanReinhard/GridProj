for(let i = 0; i < 16; i++) {
    $(".container").append(`<div class="boxes"></div>`);
}
$(".container").on("click", ".boxes", function() {
    let box = $(this);
    $(box).toggleClass("boxes2");
})