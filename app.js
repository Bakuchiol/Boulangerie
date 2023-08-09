function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in')

//   loop over every image
  function checkSlide() {
    // console.log(window.scrollY);
    // --- halfway through the image
    sliderImages.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        // console.log(slideInAt);
        // bottom of image - slide up
        // ----- bottom of the image
        const imageBottom = slideImage.offsetTop + slideImage.height;
        console.log();
        // if half shown / not scroll past
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom

        if(isHalfShown && isNotScrollPast){
            slideImage.classList.add('active')
        }else{
            slideImage.classList.remove('active')
        }
    })
  }

  window.addEventListener('scroll', debounce(checkSlide));