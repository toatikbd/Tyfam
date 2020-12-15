$(window).on("scroll", function() {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), $(document).on("click", ".navbar-collapse.show", function(e) {
    $(e.target).is("a") && $(this).collapse("hide")
}), $(".navbar-nav a, .scroll_down a").on("click", function(e) {
    var a = $(this);
    $("html, body").stop().animate({
        scrollTop: $(a.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), e.preventDefault()
}), $("#navbarCollapse").scrollspy({
    offset: 20
}), $(".element").each(function() {
    var e = $(this);
    e.typed({
        strings: e.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}), $(window).on("load", function() {
    var e = $(".work-filter"),
        a = $("#menu-filter");
    e.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), a.find("a").on("click", function() {
        var o = $(this).attr("data-filter");
        return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
            filter: o,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), 
$(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    }
}), 
$("#owl-demo").owlCarousel({
    autoPlay: 7e3,
    stopOnHover: !0,
    navigation: !1,
    paginationSpeed: 1e3,
    goToFirstSpeed: 2e3,
    singleItem: !0,
    autoHeight: !0
}), 
$("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
    overflow: "visible"
}), $(window).on("scroll", function() {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
}), $("#wave_img").length && $("#wave_img").wavify({
    height: 100,
    bones: 3,
    amplitude: 50,
    color: "#2e3135",
    speed: .25
});

$('#carousel-mages').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    568: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }

});

