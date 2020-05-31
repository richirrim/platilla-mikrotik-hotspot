import { toggleMenu } from './modules/toggle-menu'
import { phoneNumberValidation } from './modules/formats'
import { addClampMultipleElements } from './modules/clamp-text'
import { glide } from './modules/glide'

const mediumBP = matchMedia('(min-width: 768px)')

glide('js-glide-business')
toggleMenu('js-icon-menu-open', 'js-nav')
toggleMenu('js-icon-menu-close', 'js-nav')
addClampMultipleElements('.card-services__text', '#js-card-service')
addClampMultipleElements('.card-business__text', '#js-card-business')
phoneNumberValidation()

/**
 * function: switchGlide()
 * Desactiva o activa la interacción del glide.
 * @param {MediaQueryList} mediumBP 
 */
const switchGlide = (mediumBP) => {
  (mediumBP.matches) 
    ? glide('js-glide-services', false) 
    : glide('js-glide-services')
}

switchGlide(mediumBP)
mediumBP.addListener(switchGlide)

