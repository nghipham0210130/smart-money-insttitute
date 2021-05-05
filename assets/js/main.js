var navHeight = $(".navbar").height();
var width = $(window).width();
var marginLeftElementSameContainer = (width - 1230)/2;
/**
 * Show inner__collapse when click Hamburger button
 */
function hamburgerFunction() {
    var x = document.getElementById("my__navbar");
    if (x.className === "inner__collapse") {
        x.className += " show";
    }
    else {
        x.className = "inner__collapse";
    }
    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        $('#my__navbar').removeClass("show");
    });
}

$(function() {
    // Set margin-left for elements not in the container
    $( window ).on("load resize",function() {
        if(width > 1200) {
            $(".home .home__background.slick-slider").find( "ul" ).css( "margin-left", marginLeftElementSameContainer + "px" );
            //var marginLeftForButtons = marginLeftElementSameContainer + 135;
            $(".home").find( ".buttons" ).css( "margin-left", marginLeftElementSameContainer + "px" );
            $(".about").find(".about__content").css( "margin-left", marginLeftElementSameContainer + "px" );
            console.log(-marginLeftElementSameContainer + "px");
            myFunction();

        }
        else {
            $(".home .home__background.slick-slider").find( "ul" ).css( "margin-left", "0" );
        }
    });

    // Action when click pause button
    $('.pause').on('click', function() {
        $('.home__background').slick('slickPause');
        $(".pause" ).css( "display", "none" );
        $(".play" ).css( "display", "block" );
    });

    // Action when click play button
    $('.play').on('click', function() {
        $('.home__background').slick('slickPlay');
        $(".play" ).css( "display", "none" );
        $(".pause" ).css( "display", "block" );
    });

    // Event when click search id
    $(".inner__search").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Show input text
            $("#search").addClass('active');
        }
        //End if
    });

    /**
     * Add smooth scrolling to all links
     */
    $(".nav__link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior

            var refElement = $($(this).attr("href"));
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $("a").each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');



            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 500, 'swing', function () {
                $(document).on("scroll", onScroll);
            });
        }
        //End if
    });

    $('.home__background').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });

    function myFunction() {
        document.querySelector(".title::before").style.left = -marginLeftElementSameContainer + "px";
    }
});
