/**
 * Library: Glide JS
 */
import Glide from '@glidejs/glide' 

export const glide = function (id) {
  if (!id) return
  
  const glideConfig = {
    element: document.getElementById(id),
    options: {
      type: 'slide',
      startAt: 0,
      focusAt: 'center',
      keyboard: true,
      perView: 3,
      peek: 80,
      gap: 24,
      breakpoints: {
        1200: {
          perView: 3,
          peek: 60,
          gap: 16
        },
        950: { 
          perView: 2,
          peek: 30 
        },
        800: { 
          perView: 2,
          peek: 10,
          gap: 24 
        },
        700: { 
          perView: 1,
          peek: 90 
        },
        600: { 
          perView: 1,
          peek: 80 
        },
        500: { 
          perView: 1,
          peek: 20 
        },
        380: { 
          perView: 1,
          peek: 0 
        }
      }
    }
  }
  
  new Glide(glideConfig.element, glideConfig.options).mount()
}
