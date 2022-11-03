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

    $('#home-form-success').click(function (e) {
        e.preventDefault();
        const data = $('#home-form').serialize();

        const name = $('#form-name').val();
        const phone = $('#form-phone').val();

        if (name === "") {
            $('.form-error').empty().html("<p>Заполните поле Имя</p>");
            $('#form-name').addClass('error');
        } else if (phone === "") {
            $('.form-error').empty().html("<p>Заполните поле Телефон</p>");
            $('#form-phone').addClass('error');
        } else {
            $('.form-error').empty();
            $('#form-name').removeClass('error');
            $('#form-phone').removeClass('error');
            setTimeout(() => {
                $('.form-error').removeClass("text-danger").addClass('text-success').empty().html("<p class='mb-0'>Ваш запрос отправлен.</p> <p>Я скоро с вами свяжусь!</p>");
                setTimeout(() => {
                    $('.form-error').addClass("text-danger").removeClass('text-success').empty();
                    $('#form-name').val("");
                    $('#form-phone').val("");
                }, 1500)
            }, 1500)
        }
    })
});