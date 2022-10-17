$(document).ready(function () {

    $('.card-use').click(function () {
        const card = $(this).hasClass("active");
        if (!card) {
            $('.card-use').removeClass("active");
            $('.use-icon').removeClass("active");
            $(this).toggleClass("active");
            $(this).find('.use-icon').toggleClass("active");
        }

    });

});