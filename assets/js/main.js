var navHeight = $(".navbar").height();
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
    var navHeight = $(".navbar").height();

    // Event when click search id
    document.onclick = function(div) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Store hash
            var hash = this.hash;

            // Show input text
            $(".inner__search").find("input").addClass('active');
            // Change margin-top for inner__search
            $(".inner__search").css("margin-top", "36px");


            // Take event click without #search
            if (div.target.id !== "search") {
                // Hidden input text
                $(".inner__search").find("input").removeClass('active');
                // Change margin-top for inner__search
                $(".inner__search").css("margin-top", "45px");
            }
        }
        //End if
    };

    // Action when load and resize
    $( window ).on("load resize",function() {

        var width = $(window).width();
        var marginForElementSameContainer = (width - 1200)/2;
        
        // Set margin for elements not in the container
        if(width > 1200) {
            $(".home .home__background.slick-slider").find( "ul" ).css( "margin-left", marginForElementSameContainer + "px" );
            $(".home").find( ".buttons" ).css( "margin-left", marginForElementSameContainer + "px" );
            // Set margin left for about content, event__info
            $(".about__content, .event__banner__content, .btn__sign__up__join").css( "margin-left", marginForElementSameContainer + "px" );
            // Set margin right for content of Course and event__info
            $(".introduce__container__content, .event__info").css( "margin-right", marginForElementSameContainer + "px" );
            // Set scale of two element relative to screen for about section
            var leftContainAbout = 570 + marginForElementSameContainer;
            var rightContainAbout = 530 + marginForElementSameContainer;
            $(".about").css( "grid-template-columns", leftContainAbout + "px " + rightContainAbout + "px" );

            // Set max-width for about image
            var maxWidthOfAboutImage = 530 + marginForElementSameContainer;
            $(".about__image").css( "max-width", maxWidthOfAboutImage + "px" );

             // Set width for background cover introduce container
            var widthOfIntroduceContainer = 530 + marginForElementSameContainer;
            $(".introduce__container").css( "width", widthOfIntroduceContainer + "px" );

            // Set margin-left for background cover introduce container
            var marginLeftOfIntroduceContainer = 670 + marginForElementSameContainer;
            $(".introduce__container").css( "margin-left", marginLeftOfIntroduceContainer + "px" );

            // Set scale of two event element relative to screen for event section
            var leftContainEvent = 500 + marginForElementSameContainer;
            var rightContainEvent = 600 + marginForElementSameContainer;
            $(".event").css( "grid-template-columns", leftContainEvent + "px " + rightContainEvent  + "px" );

            // Set width to back section
            $(".event").css( "grid-template-columns", leftContainEvent + "px " +  rightContainEvent + "px" );

            // Set position for buttons of feedback
            var distanceLeftFeedbackButtons = marginForElementSameContainer + 660;
            $(".feedback").find(".buttons").css( "transform", "translate(" + distanceLeftFeedbackButtons + "px, -114px)");

            // Set position for slick-arrow
            var distanceOfSlickArrow = marginForElementSameContainer + 5;
            $(".slick-prev").css( "left", distanceOfSlickArrow + "px" );
            $(".slick-next").css( "right", distanceOfSlickArrow + "px" );

        }
        else {
            $(".home .home__background.slick-slider").find( "ul" ).css( "margin-left", "0" );
        }

        // Set position for ul of course
        var leftOfDotsIntroduce = width*0.5443 + 70;
        $(".introduce__backgrounds.slick-dotted.slick-slider ul").css({"transform":"translate(" + leftOfDotsIntroduce + "px, -100px)"});
        // Set position for play/pause course
        var leftOfButtonsGroup = leftOfDotsIntroduce + 120;
        $(".introduce .buttons").css({"transform": "translate(" + leftOfButtonsGroup + "px, -114px)"});
    });

    // Action when click pause button in home background
    $('.pause').on('click', function() {
        $('.home__background, .introduce__backgrounds').slick('slickPause');
        $('.pause').css( "display", "none" );
        $('.play').css( "display", "block" );
    });

    // Action when click play button in home background
    $('.play').on('click', function() {
        $('.home__background, .introduce__backgrounds').slick('slickPlay');
        $('.play').css( "display", "none" );
        $('.pause').css( "display", "block" );
    });

    // Action when click pause button in introduce background
    $('.pause').on('click', function() {
        $('.introduce__backgrounds').slick('slickPause');
        $('.pause').css( "display", "none" );
        $('.play').css( "display", "block" );
    });

    // Action when click play button in introduce background
    $('.play').on('click', function() {
        $('.introduce__backgrounds').slick('slickPlay');
        $('.play').css( "display", "none" );
        $('.pause').css( "display", "block" );
    });

    // Add active for nav__online__link when clicked
    $(".nav__online__link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            $("a").each(function () {
            $(this).removeClass('nav__online__link__active');
            });
            $(this).addClass('nav__online__link__active');
        } //End if
    });

    // Add active for suggest__course__link when clicked
    $(".suggest__course__link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            $("a").each(function () {
                $(this).removeClass('suggest__course__link__active');
            });
            $(this).addClass('suggest__course__link__active');
        } //End if
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

    $('.home__background, .introduce__backgrounds').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        //autoplay: true,
        autoplaySpeed: 2000
    });

    $('.feedback__backgrounds').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        //autoplay: true,
        autoplaySpeed: 2000
    });
});
