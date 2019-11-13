//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {

//     alert('jQuery работает');

// });

$(function () {

    $(".sect_1").css({
        "color": "red",
        "text-align": "center",
        "font-size": "1.5rem"
    });

    // МОЖНО ТАК

    $(".sect_2").css({
        color: "green",
        textAlign: "center",
        fontSize: "1.3rem",
        padding: "3rem",
        backgroundColor: "#f4f1f3"
    });

    // ИЛИ ТАК

    let cssValues = {
        "color": "blue",
        "font-size": "25px",
        "text-align": "center"
    };
    $(".sect_3 p").css(cssValues);

    // ИСПОЛЬЗОВАТЬ ФУНКЦИЮ ОБРАТНОГО ВЫЗОВА

    $(".sect_4 div").css("height", function (i, value) {
        return parseFloat(value) * 3;
    });

    $(".sect_4 div").css("background-color", function (i, value) {
        return "gray";
    });

    // МАНИПУЛЯЦИИ С КЛАССАМИ

    /* добавление класса  */

    $(".sect_4 div").addClass("myclass_1");

    $(".btn_add").click(function () {
        $(".test__item.item__1").addClass("myclass_2");
    });

    /* удаление класса */

    $(".btn_remove").click(function () {
        $(".test__item.item__1").removeClass("myclass_2");
    });


    /* переключение класса */

    $(".btn_toggle").click(function () {
        $(".test3").toggle();
    });

    $(".btn_slidetoggle").click(function () {
        $(".test3").slideToggle();
    });



    /* проверка наличия класса */

    if ($(".sect_4 .test li").hasClass("waste"))
        $(".waste").text("этот элемет имеет class 'waste'")
            .css("color", "red");


    // РАБОТА С АТРИБУТАМИ
    /*
    .attr(attrName)
    возвращает значение атрибута attrName у     выбранного элемента. Если выбрано несколько элементов, то значение будет взято у первого.
    */

    var className = $("#newsBlock").attr("class");
    $("#newsBlock").text(className);

    /*
    .attr(attrName, value)
    атрибуту attrName будет присвоено значение value, у всех выбранных элементов.
    */

    /*
    .attr({attrName1:value1, attrName2:value2, ...})
    группе аттрибутов attrName1, attrName2, ... будут присвоены значения value1, value2, ..., у всех выбранных элементов.
    */

    /*
     .attr(attrName, function(index, value));
     атрибуту attrName будет присвоено значение, возвращенное пользовательской функцией (если она ничего не вернет, то атрибут просто останется каким был до этого). Функция вызывается отдельно, для каждого из выбранных элементов. При вызове ей передаются следующие параметры: index — позиция элемента в наборе, value — текущее значение атрибута attrName у элемента.
    */

    /*
     $("div").attr("class")	вернет имя класса у первого div-элемента на странице
     $("div").attr("class", "divEl")	класс всех div-элементов на странице станет равным divEl
     $("div").attr({"class":"divEl", "title":"Див"})	класс div-элементов станет равен divEl, а title — "Див"
     $(".rool").attr("title")	вернет подсказку элемента с классом rool. Если таких элементов на странице несколько — вернет первого из них.
    */

    // removeAttr(name)

    $("#button_on").click(function () {
        $('input')
            .removeAttr("disabled")
            .focus()
            .val("Можно редактировать!");
        return false;
    });
    $("#button_off").click(function () {
        $('input')
            .attr("disabled", "disabled")
            .focus()
            .val("Нельзя редактировать!");
        return false;
    });

    // #ef4efd
});



