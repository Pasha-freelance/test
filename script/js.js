$(document).ready(function () {

    let popup = $('.popup');
    let callback_popup = $('.callback-popup');
    let thanks_popup = $('.thanks-popup');
    popup.fadeOut(0);

    $('.header-callback-block a').click(function () {
        $(callback_popup).fadeIn(200);
    });
    $('.buy-button').click(function () {
        $(callback_popup).fadeIn(200);
    });
    $('.callback-button').click(function () {
        $(callback_popup).fadeIn(200);
    });

    $('.callback-form input[type="submit"]').click(function (e) {
        e.preventDefault();
        $(thanks_popup).fadeIn(200);
    });


    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $(popup).fadeOut(200);
        }
    });
    $('.callback-button-popup').click(function () {
        $(callback_popup).fadeOut(100);
    })
    $('.close-icon').click(function () {
        $(popup).fadeOut(200);
    });

});