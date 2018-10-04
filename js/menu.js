$(function () {
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $("#overlay").fadeToggle();
        return false;
    });
});