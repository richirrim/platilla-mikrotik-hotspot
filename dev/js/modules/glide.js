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
      focusAt: 'center',
      keyboard: true,
      perView: 2,
      gap: 24,
      breakpoints: {
        1200: {
          perView: 3,
          peek: 60,
          gap: 16
        },
        1050: { peek: 80 },
        900: { gap: 24 },
        800: { gap: 32 },
        700: { peek: 160 },
        600: { peek: 120 },
        540: { peek: 80 },
        500: { peek: 90, },
        480: { peek: 20 },
        380: { peek: 0 }
      }
    }
  }
  
  new Glide(glideConfig.element, glideConfig.options).mount()
}
