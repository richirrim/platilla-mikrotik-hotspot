/**
 * Library: Glide JS
 */
const Glide = require('@glidejs/glide')

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

new Glide(glideConfig.element, glideConfig.options).mount()


/**
 * function: toggleMenu()
 * 
 * @param {string} idIconMenu 
 * @param {string} idNav 
 */
const toggleMenu = function (idIconMenu, idNav) {
  const toggelEl = document.getElementById(idIconMenu)
  const menuEl = document.getElementById(idNav)
  
  if (!(toggleMenu && menuEl)) return
  
  toggelEl.addEventListener('click', () => {
    menuEl.classList.toggle('show')
  })
}

/**
 * function: phoneNumberValidation()
 * 
 * Da formato al texto de un número celular.
 */
const phoneNumberValidation = function () {
  let number = null
  let numberSubstring = null
  let includeLada = null
  const isNumber = /[0-9]/g
  const includeCharacterMore = /\x2b/g // +
  const buttonSocialEl = document.getElementById('js-btnContact')
  

  if (!buttonSocialEl) return
  number = document.getElementById('js-btnContact').textContent
  numberSubstring = number.substring(0,3)
  includeLada = numberSubstring.includes('+52') || numberSubstring.includes('52')

  if (isNumber.test(number)) {

    if (!(includeLada)) {
      number = `52 ${number}`
      buttonSocialEl.textContent = number
    }

    if (!(includeCharacterMore.test(number))) {
      number = `+ ${number}`
      buttonSocialEl.textContent = number
    }

    buttonSocialEl.textContent = number
      // Elimina todos los whitespaces.
      .replace(/\s/g, '')
      // Añade un espacio despues de la lada "+52".
      .replace(/(\+52){1}/g, '$1 ')
      // Añade un espacio despues del número "981".
      .replace(/(981){1}/g, '$1 ')
      // Añade un espacio despues los priemeros 3 números que están despues del "981".
      .replace(/((981)+\s[0-9]{3}){1}/, '$1 ')
  }
}


/**
 * function: textClamp()
 * 
 * @param {string} idTextClamp 
 * @param {number} numberLine 
 * 
 * Limita un parrafo a las líneas que se decee mostrar (visualmente).
 *  Por defecto, muestra 5 líneas la función.
 */
const textClamp = function (idTextClamp, numberLine) {
  // https://github.com/josephschmitt/Clamp.js
  const pEl = document.getElementById(idTextClamp)
  if (!pEl) return
  if (!numberLine) {
    $clamp(pEl, { clamp: 5 })
    return
  }
  $clamp(pEl, { clamp: numberLine })
}
// Validar sea un telefono con la estructura real, el texto ya esta formateado.
// Validar el email y su formato
textClamp('js-textClamp')
phoneNumberValidation()
toggleMenu('js-menu-icon', 'js-nav')
