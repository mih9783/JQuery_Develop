//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {

//     alert('jQuery работает');

// });

$(function () {

    // МЕНЯЮ СТИЛИ CSS

    $(".content h1").css("color", "#000")
        .css("text-align", "center")
        .css("margin-top", "2rem");

    // МЕНЯЮ ТЕКСТ

    $(".new_text .btn_start").click(function () {
        $(".new_text p").text("Новый текст");
        $(".new_text p").css("color", "red");
    });

    $(".new_text .btn_reset").click(function () {
        $(".new_text p").text("Старый текст");
        $(".new_text p").css("color", "blue");
    });


    // ПОКАЖЕМ СООБЩЕНИЕ

    $(".new_text_1 .btn_start").click(function () {
        $(".message").text("Сообщение для пользователя");
        $(".message")
            .css("opacity", "1")
            .css("transition", "1.5s");
    });

    $(".new_text_1 .btn_reset").click(function () {
        $(".message")
            .css("opacity", "0")
            .css("transition", "1.5s");
    });

    ///////////////////////////////

    // СКРЫТЬ ПОКАЗАТЬ БЛОК ПРИ НАЖАТИИ КНОПКИ

    $(".new_text_2 .btn_reset").click(function () {
        $(".block_hidden")
            .css("opacity", "0")
            .css("transition", "0.6s");
    });

    $(".new_text_2 .btn_start").click(function () {
        $(".block_hidden")
            .css("opacity", "1")
            .css("transition", "1s");
    });

    // СОЗДАЁМ НОВЫЙ БЛОК

    $(".new_text_3 .btn_start").click(function () {
        $(".mymessage")
            .css("background-color", "yellow")
            // .parent()
            .css("width", "70%")
            .css("margin", "3rem auto")
            .css("height", "5rem");
    });

    $(".new_text_3 .btn_reset").click(function () {
        location.reload();
    });

});



