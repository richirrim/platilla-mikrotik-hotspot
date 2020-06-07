import { toggleMenu } from './modules/toggle-menu'
import { phoneNumberValidation } from './modules/formats'
import { addClampMultipleElements } from './modules/clamp-text'
import { glide } from './modules/glide'
import { data } from './modules/section-services/data'
import { addCardsToIU } from './modules/section-services/cards'

const mediumBP = matchMedia('(min-width: 768px)')

glide('js-glide-business')
toggleMenu('js-menu-open', 'js-nav')
toggleMenu('js-menu-close', 'js-nav')
addClampMultipleElements('.card-services__text', '#js-card-service')
addClampMultipleElements('.card-business__text', '#js-card-business')
phoneNumberValidation()

/**
 * function: switchGlide()
 * Desactiva o activa la interacción del glide.
 * @param {MediaQueryList} mediumBP 
 */
const switchGlide = mediumBP => {
  (mediumBP.matches) 
    ? glide('js-glide-services', false) 
    : glide('js-glide-services')
}

const cards = mediumBP => {
  if (mediumBP.matches) { addCardsToIU(data) } 
  else {
    const $section = document.querySelector('#js-services DIV')
    const $cardsServices = $section.querySelector('.services__grid')

    if (!($section && $cardsServices)) return
    $section.removeChild($cardsServices)
  }
}

switchGlide(mediumBP)
cards(mediumBP)
mediumBP.addListener(switchGlide)
mediumBP.addListener(cards)

// ✅ TODO: En pantallas desktop agregar las card dinamicas del js.
// Y en pantallas mobile borrar estas cards dinamiscas.
// Todo: Ahora el glide ya no se muestra en mobile :(.
// añadir la estructura de glide desde el js.
