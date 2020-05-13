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
      perView: 1,
      gap: 24,
      breakpoints: {
        1200: {
          perView: 3,
          peek: 60,
          gap: 16
        },
        980: { 
          perView: 2,
          peek: 60 
        },
        800: { 
          perView: 2,
          gap: 32 
        },
        700: { peek: 150 },
        600: { peek: 120 },
        540: { peek: 80 },
        500: { peek: 70 },
        480: { peek: 20 },
        380: { peek: 0 }
      }
    }
  }
  
  new Glide(glideConfig.element, glideConfig.options).mount()
}
