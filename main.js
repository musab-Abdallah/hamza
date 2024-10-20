function imgslider(anythings) {
    document.querySelector('.blackone').src =anythings;
}
function changeBgColor(color) {
  const sec = document.querySelector('.sec');
  sec.style.background = color;
}
function menuToggle () {
  const togglemenu = document.querySelector('.togglemenu');
  const navigation = document.querySelector('.navigation');
  togglemenu.classList.toggle('active')
  navigation.classList.toggle('active')
}
VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 25,
  speed: 400
});


new WOW().init();

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

  var swiper = new Swiper('.swiper-container', {
    loop: true, // Enables looping
    autoplay: {
      delay: 3000, // Auto slide every 3 seconds
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-paginationn',
      clickable: true,
    },
    slidesPerView: 1, // Show 1 slide at a time
    spaceBetween: 1, // Space between slides
    breakpoints: {
      640: {
        slidesPerView: 1, // 1 slide for smaller screens
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2, // 2 slides for medium screens
        // spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3, // 3 slides for larger screens
        // spaceBetween: 40,
      },
    },
  });




