// jQuery


// mobile menu
function mobileMenu() {
    const openBtn = document.querySelector('.open-menu');

    openBtn.addEventListener('click', function(event) {
        event.preventDefault();
        openBtn.classList.toggle('open-btn');
        if ( document.body.classList.contains('menu-opened') ) {
            document.body.classList.remove('menu-opened');
        } else {
            document.body.classList.add('menu-opened');
        }
    });
};


// Btn class mouse hover out
function buttonEnterAnimation() {
    let btnCircle = document.querySelectorAll('.btn-circle');
    for (let i = 0; i < btnCircle.length; i++) {

        btnCircle[i].addEventListener( 'mouseenter', function() {
            btnCircle[i].classList.add('btn-circle-anim-first');
            if(  btnCircle[i].classList.contains("btn-circle-anim-back") ) {
                btnCircle[i].classList.remove("btn-circle-anim-back");
            }
        });
    }
}
function buttonLeaveAnimation() {
    let btnCircle = document.querySelectorAll('.btn-circle');
    for (let i = 0; i < btnCircle.length; i++) {
        btnCircle[i].addEventListener( 'mouseleave', function() {
            setTimeout(function () {
                btnCircle[i].classList.add('btn-circle-anim-back');
            },300);
            if( btnCircle[i].classList.contains("btn-circle-anim-first") ) {
                setTimeout(function () {
                    btnCircle[i].classList.remove("btn-circle-anim-first");
                }, 300);
                // btnCircle[i].classList.remove("btn-circle-anim-first");
            }
        });
    }
}

function titleAnimation() {
    let heroTitleLines = document.querySelectorAll( '.h1-title-line' );
    for( let i = 0; i < heroTitleLines.length; i++ ){
        if( (i % 2 === 0) ) {
            heroTitleLines[i].classList.add('title-fly-right');
        } else {
            heroTitleLines[i].classList.add('title-fly-left');
        }

    }
}

// $('.btn-circle').mouseenter(function(){
//     $(".btn-circle").addClass("btn-circle-anim-first");
//     if( $(".btn-circle").hasClass("btn-circle-anim-back") ) {
//         $(".btn-circle").removeClass("btn-circle-anim-back");
//     }
// });
// $('.btn-circle').mouseleave(function(){
//     $(".btn-circle").addClass("btn-circle-anim-back");
//     if( $(".btn-circle").hasClass("btn-circle-anim-first") ) {
//         $(".btn-circle").removeClass("btn-circle-anim-first");
//     }
// });

// Image giphy animation
setTimeout(function() {
    $(".img-giff").addClass('imagegifshow');
}, 500);
setTimeout(function() {
    $(".img-giff").addClass('imagesmall');
}, 3000);

(function($){
    'use strict';

    // Button hover animation
    function buttonEnterAnimationTest1() {
        let btn = $('.btn-circle');
        btn.each(function( i ) {
            let $thisBtn = $(this);
            $thisBtn.mouseenter(function() {
                $thisBtn.addClass("btn-circle-anim-first");
                if( $thisBtn.hasClass("btn-circle-anim-back") ) {
                    $thisBtn.removeClass("btn-circle-anim-back");
                }
            });
            $thisBtn.mouseleave(function(){
                setTimeout(function() {
                    $thisBtn.addClass("btn-circle-anim-back");
                },300);
                // $thisBtn.addClass("btn-circle-anim-back");
                if( $thisBtn.hasClass("btn-circle-anim-first") ) {
                    setTimeout(function () {
                        $thisBtn.removeClass("btn-circle-anim-first");
                    }, 300);
                    // $thisBtn.removeClass("btn-circle-anim-first");
                }
            });
        });
    }


    // Hero in viewport
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop <= 0) {
            $(".hero").addClass("hero-top");
        } else {
            $(".hero").removeClass("hero-top");
        }
    });




    // Scrolling sections
    // Sections scroll
    // Collecting the sections
    var $sections = $(".section-block");

// Variable to hold the current section index
    var currentIndex = 0;

// Variable to hold the animation state
    var isAnimating = false;

// Define the animation finish callback
    var stopAnimation = function() {
        // We add the 300 ms timeout to debounce the mouse wheel event
        setTimeout(function() {
            // Set the animation state to false
            isAnimating = false;
        }, 100);
    };

// Function returns true if DOM element bottom is reached
    var bottomIsReached = function($elem) {
        var rect = $elem[0].getBoundingClientRect();
        return rect.bottom <= $(window).height();
    };

// Function returns true if DOM element top is reached
    var topIsReached = function($elem) {
        var rect = $elem[0].getBoundingClientRect();
        return rect.top >= 0;
    };
// Define wheel event handler
    document.addEventListener(
        "wheel",
        function(event) {
            // If animation is in progress
            if (isAnimating) {
                // Just prevent the default mouse wheel behaviour
                event.preventDefault();
                return;
            }

            // Get the current section
            var $currentSection = $($sections[currentIndex]);

            // Get the mouse wheel spin direction
            var direction = event.deltaY;

            if (direction > 0) {
                // If next index is greater than sections count, do nothing
                if (currentIndex + 1 >= $sections.length) return;
                // If bottom is not reached allow the default behaviour
                // if (!bottomIsReached($currentSection)) return;
                // Go to next
                // Increase the section pointer
                currentIndex++;
                // Get the next section
                var $nextSection = $($sections[currentIndex]);
                // Get the next section offset
                var offsetTop = $nextSection.offset().top;
                // Prevent the default mouse wheel behaviour
                event.preventDefault();
                // Set the animation state to true
                isAnimating = true;
                // Animate scroll
                $("html, body").animate({ scrollTop: offsetTop }, 300, stopAnimation);
            } else {
                // If previous index is negative, do nothing
                if (currentIndex - 1 < 0) return;
                // If top is not reached allow the default behaviour
                // if (!topIsReached($currentSection)) return;
                // Go to prev
                // Decrease the section pointer
                currentIndex--;
                // Get the previous section
                var $previousSection = $($sections[currentIndex]);
                // Get the previous section offset
                var offsetTop = $previousSection.offset().top;
                // Prevent the default mouse wheel behaviour
                event.preventDefault();
                // Set the animation state to true
                isAnimating = true;
                // Animate scroll
                $("html, body").animate({ scrollTop: offsetTop }, 100, stopAnimation);
            }
        },
        { passive: false }
    );


    $(document).ready(function() {
        mobileMenu();
        // buttonEnterAnimation();
        // buttonLeaveAnimation();
        buttonEnterAnimationTest1();


        function scrollHero() {
            $('.hero .img-gif2').addClass('imggif2-anim');
            $(".hero .img-giff").addClass( 'imggif-anim' );
            $('.hero .btn-hero').addClass('btn-hero-anim');
            $('.hero .hero-footer--text').addClass( 'hero-text-anim' );
            titleAnimation();

        }
        window.addEventListener("scroll", scrollHero);


    }); // ready

    $(window).on('resize', function() {
    }); // resize

    $(window).on('load', function() {
    }); // load

    // functions
})(this.jQuery);