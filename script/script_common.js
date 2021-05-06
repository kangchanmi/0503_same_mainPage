/* eslint-disable */

$(function () {

    /* 헤더 GNB 메뉴 */
    $("#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(200);
    });
    $("#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(200);
    });
    /* 헤더 GNB 메뉴 */




    /* 메인 슬라이드 쇼 */

    var slideGo = setInterval(fnSlide, 8000);

    /* 방향키에 mouseover 시 슬라이드 멈춤 */
    $("#slideBtn button").mouseout(function () {
        slideGo = setInterval(fnSlide, 8000);
    });
    $("#slideBtn button").mouseover(function () {
        clearInterval(slideGo);
    });
    /* 방향키에 mouseover 시 슬라이드 멈춤 */

    function fnSlide() {
        $("#msShuttleFrame").animate({
                "margin-left": "-1400px"
            },
            1000,
            "swing",
            function () {
                $("#msShuttleFrame a:first-child").insertAfter("#msShuttleFrame a:last-child");
                $("#msShuttleFrame").css({
                    "margin-left": "0"
                });
            });
    }




    /* Prev 버튼 */
    $(".PrevBtn").click(function () {
        $("#msShuttleFrame a:last-child").insertBefore("#msShuttleFrame a:first-child");
        $("#msShuttleFrame").css({
            "margin-left": "-1400px"
        });
        $("#msShuttleFrame").stop().animate({
                "margin-left": "0"
            },
            800,
            "swing");
    });
    /* Prev 버튼 */

    /* Next 버튼 */
    $(".NextBtn").click(function () {
        $("#msShuttleFrame").stop().animate({
                "margin-left": "-1400px"
            },
            800,
            "swing",
            function () {
                $("#msShuttleFrame a:first-child").insertAfter("#msShuttleFrame a:last-child");
                $("#msShuttleFrame").css({
                    "margin-left": "0"
                });
            });
    });
    /* Next 버튼 */

    /* 메인 슬라이드 쇼 */


    /* 맨 위로 이동 버튼 */
    /* 스크롤 내렸을 때 버튼 띄우기 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#topBtn").fadeIn(200);
        } else {
            $("#topBtn").fadeOut(200);
        }
    });
    /* 스크롤 내렸을 때 버튼 띄우기 */


    /* 클릭시 맨 위로 이동 */
    $("#topBtn").click(function () {
        $(window).scrollTop(0);

    });
    /* 클릭시 맨 위로 이동 */
    /* 맨 위로 이동 버튼 */




    /* 모달레이어 */
    /* 닫기 */

    $(".modalSide>button").click(function () {
        $(".modal").css({
            "display": "none"
        });
    });


    /* 찜버튼 중복 아이콘 제거 */
    $(".modalSide>button").click(function () {
        $(".delivery a:nth-child(2)").css({
            "display": "none"
        });
    });
    /* 찜버튼 중복 아이콘 제거 */


    /* 리뷰 */
    $(".deliveryBtn button:first-child").click(function () {
        alert("등록된 리뷰가 없습니다.");
    });
    /* 리뷰 */


    /* 장바구니 */
    $(".delivery a:last-child").click(function() {
        location.href = "Order/Basket.html";
    });
    /* 장바구니 */


    /* 바로 구매 */
    $(".deliveryBtn button:last-child").click(function () {
        location.href = "Order/Basket.html";
    });
    /* 바로 구매 */



    /* ///// 추천제품 ///// */
    /* 1 */
    $(".rec_Img:first-child").click(function () {
        $("#recmodal1").css({
            "display": "block"
        });
    });
    /* 1 */

    /* 2 */
    $(".rec_Img:nth-child(2)").click(function () {
        $("#recmodal2").css({
            "display": "block"
        });
    });
    /* 2 */

    /* 3 */
    $(".rec_Img:nth-child(3)").click(function () {
        $("#recmodal3 ").css({
            "display": "block"
        });
    });
    /* 3 */

    /* 4 */
    $(".rec_Img:nth-child(4)").click(function () {
        $("#recmodal4 ").css({
            "display": "block"
        });
    });
    /* 4 */
    /* ///// 추천제품 ///// */


    /* ///// 신제품 ///// */
    /* 1 */
    $(".new_Img:first-child").click(function () {
        $("#newmodal1").css({
            "display": "block"
        });
    });
    /* 1 */

    /* 2 */
    $(".new_Img:nth-child(2)").click(function () {
        $("#newmodal2").css({
            "display": "block"
        });
    });
    /* 2 */

    /* 3 */
    $(".new_Img:nth-child(3)").click(function () {
        $("#newmodal3").css({
            "display": "block"
        });
    });
    /* 3 */

    /* 4 */
    $(".new_Img:last-child").click(function () {
        $("#newmodal4").css({
            "display": "block"
        });
    });
    /* 4 */
    /* ///// 신제품 ///// */


    /* ///// 베스트 ///// */
    /* 1 */
    $(".best_Img:first-child").click(function () {
        $("#bestmodal1").css({
            "display": "block"
        });
    });
    /* 1 */

    /* 2 */
    $(".best_Img:nth-child(2)").click(function () {
        $("#bestmodal2").css({
            "display": "block"
        });
    });
    /* 2 */

    /* 3 */
    $(".best_Img:nth-child(3)").click(function () {
        $("#bestmodal3").css({
            "display": "block"
        });
    });
    /* 3 */

    /* 4 */
    $(".best_Img:last-child").click(function () {
        $("#bestmodal4").css({
            "display": "block"
        });
    });
    /* 4 */

    /* ///// 베스트 ///// */


    /* 닫기 */



    /* 찜하기 버튼 */
    $(".delivery a:first-child").click(function () {
        $(this).css({
            "display": "none"
        });
        $(".delivery a:nth-child(2)").css({
            "display": "inline-block"
        });
    });
    $(".delivery a:nth-child(2)").click(function () {
        $(this).css({
            "display": "none"
        });
        $(".delivery a:first-child").css({
            "display": "inline-block"
        });
    });

    /* 찜하기 버튼 */

    /* 모달레이어 */




});
