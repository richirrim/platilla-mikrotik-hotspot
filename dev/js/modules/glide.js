/**
 * Library: Glide JS
 */
import Glide from '@glidejs/glide' 

const glideConfig = {
  element: document.querySelector('.glide'),
  options: {
    type: 'slide',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    keyboard: true,
    gap: 24,
    breakpoints: {
      720: { perView: 2 },
      480: { perView: 1 }
    }
  }
}

const glide = new Glide(glideConfig.element, glideConfig.options).mount()
