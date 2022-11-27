var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  });

  function showMobileNav() {
    var topNav = document.getElementById("topNav");
    if (topNav.className === "top-nav") {
        topNav.className += " nav-menu-mobile";
    } else {
        topNav.className = "top-nav";
    }
  }
