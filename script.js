const header = document.querySelector("header"); //създавам константа (const) с име header, с която променлива селектирам заявката
//с името (header - html) html файла..

window.addEventListener("scroll", function() { //използвам метода (window) и добавям събитие (Listner), на което казвам след като се 
    // скролне да извика следната функция ..>>>
    header.classList.toggle("sticky", window.scrollY > 0); //toggle(го правим sticky "лепкащ", когато прозореца се намали то тогава действа)
});
//Sticky header----------
/*<---------------------------------->*/

//Work Expirience -----------------------------------------


var columnTwo = document.getElementById('column_two')
var btnLeft = document.getElementById('left_arrow');
var btnRight = document.getElementById('right_arrow')

/*var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});*/

// var LeftBtn = document.querySelector('.btnLeft');
// var RightBtn = document.querySelector('.btnRight');

// RightBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     alert(`${rightBtn.value} was clicked`);
// })
//alert(RightBtn);
//-------------------------------------------------------


$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(2) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
const text = document.querySelector('.sec-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Hockey Coach";
    }, 0);
    setTimeout(() => {
        text.textContent = "Student";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 8000);
}
textLoad();

setInterval(textLoad, 14000);