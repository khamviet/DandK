
$(document).ready(function() {
    $("#search").click(function() {
        let a = document.getElementById("searchOverlay")
        a.setAttribute("style", "display: block")
        let b = document.getElementById("search")
        b.setAttribute("style", "display: none")
    })
    $(".navbar_menu").click(function() {
        let a = document.getElementById("searchOverlay")
        a.setAttribute("style", "display: none")
        let b = document.getElementById("search")
        b.setAttribute("style", "display: block")
    })

    $(".navbar_icon-in-search").click(function() {
        let a = document.getElementById("searchOverlay")
        a.setAttribute("style", "display: none")
        let b = document.getElementById("search")
        b.setAttribute("style", "display: block")
    })
    
    $("#user").click(function() {
        let a = document.getElementById("userOverlay")
        a.setAttribute("style", "display: block")
        let b = document.getElementById("userLayout")
        b.setAttribute("style", "display: block")
    })
    $("#userExit").click(function() {
        let a = document.getElementById("userOverlay")
        a.setAttribute("style", "display: none")
        let b = document.getElementById("userLayout")
        b.setAttribute("style", "display: none")
    })

    $("#cart").click(function() {
        let a = document.getElementById("cartOverlay")
        a.setAttribute("style", "display: block")
    })
    $("#cartExit").click(function() {
        let a = document.getElementById("cartOverlay")
        a.setAttribute("style", "display: none")
    })

    $(window).scroll(function() {
        let a = document.getElementById("titleBody")
        let b = document.getElementById("collection")
        if ($(this).scrollTop() > 60)
            $("#titleBody").addClass("animate__fadeInUp")
        if ($(this).scrollTop() > 200)
            $("#titleBody").removeClass("animate__fadeInUp")
        if ($(this).scrollTop() > 1500)
            $("#collection").addClass("animate__zoomIn")
    })

    $("#menuIcon").click(function() {
        let a = document.getElementById("menuList")
        a.setAttribute("style", "display: block")
    })

    $("#menuExit").click(function() {
        let a = document.getElementById("menuList")
        a.setAttribute("style", "display: none")
    })

    $("#checkWhite").click(function() {
        let a = document.getElementById("white")
        a.setAttribute("style", "display: block")
        let b = document.getElementById("gold")
        b.setAttribute("style", "display: none")
    })

    $("#checkGold").click(function() {
        let a = document.getElementById("gold")
        a.setAttribute("style", "display: block")
        let b = document.getElementById("white")
        b.setAttribute("style", "display: none")
    })

    $("#chooseSize1").click(function() {
        $("#chooseSize1").addClass("checked")
        $("#chooseSize2").removeClass("checked")
        $("#chooseSize3").removeClass("checked")
        $("#chooseSize4").removeClass("checked")
        $("#chooseSize5").removeClass("checked")
    })

    $("#chooseSize2").click(function() {
        $("#chooseSize2").addClass("checked")
        $("#chooseSize1").removeClass("checked")
        $("#chooseSize3").removeClass("checked")
        $("#chooseSize4").removeClass("checked")
        $("#chooseSize5").removeClass("checked")
    })

    $("#chooseSize3").click(function() {
        $("#chooseSize3").addClass("checked")
        $("#chooseSize2").removeClass("checked")
        $("#chooseSize1").removeClass("checked")
        $("#chooseSize4").removeClass("checked")
        $("#chooseSize5").removeClass("checked")
    })

    $("#chooseSize4").click(function() {
        $("#chooseSize4").addClass("checked")
        $("#chooseSize2").removeClass("checked")
        $("#chooseSize3").removeClass("checked")
        $("#chooseSize1").removeClass("checked")
        $("#chooseSize5").removeClass("checked")
    })

    $("#chooseSize5").click(function() {
        $("#chooseSize5").addClass("checked")
        $("#chooseSize2").removeClass("checked")
        $("#chooseSize3").removeClass("checked")
        $("#chooseSize4").removeClass("checked")
        $("#chooseSize1").removeClass("checked")
    })

    // Product

    $(window).scroll(function() {
        let a = document.getElementById("similar")
        if ($(this).scrollTop() > 1800)
            $("#similar").addClass("animate__fadeInUp")
        if ($(this).scrollTop() > 2300)
            $("#similar").removeClass("animate__fadeInUp")
    })

    $(window).scroll(function() {
        let a = document.getElementById("imgProduct")
        if ($(this).scrollTop() > 500)
            $("#imgProduct").addClass("animate__fadeInUp")
    })

    $(window).scroll(function() {
        let a = document.getElementById("bodyC1")
        if ($(this).scrollTop() > 500)
            $("#bodyC1").addClass("animate__fadeInUp")
    })

})

