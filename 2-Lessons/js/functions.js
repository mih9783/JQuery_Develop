//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {

//     alert('jQuery работает');

// });

$(function () {

    // ВЫБОРКА по ID
    $("#title").css("color", "#f1f3f5");


    // ВЫБОРКА по CLASS
    let cssValues = {
        "color": "green",
        "font-size": "1.6rem",
        "font-weight": "bolder"
    };

    $(".header_para").css(cssValues);

    let cssValuesSect = {
        "color": "yellow",
        "font-size": "1.8rem",
        "font-weight": "bolder"
    };
    /* можно вставить id и
     несколько классов через пробел */
    $(".sect_2 h2").css(cssValuesSect);


    // ВЫБОРКА по ТЕГАМ

    /* выбираются все теги h3 */
    $("h3").css("color", "blue")
        .css("text-align", "center");


    /* выбираются все теги h4 и h5 */
    $("h4, h5").css("color", "red")
        .css("text-align", "center")
        .css("font-size", "1.7rem");

    /* выбираем тег внутри тега*/
    $(".sect_3 h4 h5").css("color", "blue")
        .css("text-align", "center")
        .css("font-size", "1.4rem");
    /* или так */

    $(".sect_3").find("h3").css("color", "brown")
        .css("text-align", "center")
        .css("font-size", "1.7rem");

    /* выбор тегов перед которыми есть тег <h2></h2>  */
    $("h2 + p").css("color", "#ef4efd");

    // ВЫБОР ПРЕДЫДУЩЕГО ЭЛЕМЕНТА  
    $(".item__10").prev().css("color", "blue")
        .css("margin", "0.5rem");

    let list = $('.test');
    list.find('li').eq(6).prev().addClass('test__link--preved');

    // ВЫБОР СЛЕДУЮЩЕГО ЭЛЕМЕНТА  
    $(".item__7").next().css("color", "red")
        .css("margin", "0.5rem");

    let list1 = $('.test');
    list1.find('li').eq(6).next().addClass('test__link--nexted');


    // ВЫБОР ВСЕХ ЭЛЕМЕНТОВ

    //$("*").css("color", "red"); все теги на странице

    /* потомки тега sect_5  */
    $(".test1 > li").css("margin", "1rem")
        .css("font-weight", "bolder");

    /* Все потомки sect_6 */
    $(".sect_6 > *").css("color", "red");

    // ОПТИМИЗАЦИЯ ВЫБОРКИ ЭЛЕМЕНТОВ

    $(".sect_1 a button").css("color", "#ef4efd");

    $(".sect_1 a.button").css("color", "red")
        .css("border", "1px solid #000")
        .css("border-radius", "1rem")
        .css("padding", "0.3rem 1rem")
        .css("display", "inline-block")
        .css("margin", "2rem");

    $("a.button", ".sect_2").css("color", "green")
        .css("border", "1px solid #000")
        .css("border-radius", "1rem")
        .css("padding", "0.3rem 1rem")
        .css("display", "inline-block")
        .css("margin", "2rem");
    /* лучше так проще разобраться с 
    кодом через некоторое время  */
    $(".sect_3").find("a.button").css("color", "blue")
        .css("border", "1px solid #000")
        .css("border-radius", "1rem")
        .css("padding", "0.3rem 1rem")
        .css("display", "inline-block")
        .css("margin", "2rem");

    // РАЗБИВАТЬ ЗАПРОС НА БОЛЕЕ МЕЛКИЕ И СОСТАВНЫЕ ЧАСТИ
    /* ИСПОЛЬЗОВАТЬ КОНТЕКСТ 
    И СРАЗУ ЖЕ СОХРАНЯТЬ ПРОМЕЖУТОЧНЫЕ ДАННЫЕ */

    $(".content h3.title");
    $(".content a.btn");

    let $content = $(".content");
    $content.find("a.btn").css("color", "red")
        .css("font-size", "1,4rem");


    $content.find("h3.title")
        .css("background-color", "gray")
        .css("color", "#fff");

    //$(".content div input.disd input:disabled");

    // ЛУЧШЕ ТАК

    $(".content div").find("input:disabled")
        .css("background-color", "yellow");












});



