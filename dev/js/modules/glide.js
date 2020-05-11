/**
 * Library: Glide JS
 */
import Glide from '@glidejs/glide' 

export const glide = function (id) {
  const glideConfig = {
    element: document.getElementById(id),
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
  
  new Glide(glideConfig.element, glideConfig.options).mount()
}
