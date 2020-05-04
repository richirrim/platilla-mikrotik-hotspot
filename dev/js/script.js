const toggleMenu = function (idIconMenu, idNav) {
  const toggelEl = document.getElementById(idIconMenu)
  const menuEl = document.getElementById(idNav)
  
  if (!(toggleMenu && menuEl)) {
    console.warn('Alguno de los elementos no existen ⚠')
    return
  }
  
  toggelEl.addEventListener('click', () => {
    menuEl.classList.toggle('show')
  })
}

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
// Validar telefo, el formato ya esta
// Validar el email y su formato
phoneNumberValidation()
toggleMenu('js-menu-icon', 'js-nav')
