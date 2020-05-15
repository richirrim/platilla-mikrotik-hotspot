import { toggleMenu } from './modules/toggle-menu'
import { phoneNumberValidation } from './modules/formats'
import { addClampMultipleElements } from './modules/clamp-text'
import { glide } from './modules/glide'

glide('js-glide-business')
toggleMenu('js-menu-icon', 'js-nav')
addClampMultipleElements('.card-services__text', '#js-card-service')
addClampMultipleElements('.card-business__text', '#js-card-business')
phoneNumberValidation()

const mediumBP = matchMedia('(min-width: 768px)')

const disableGlide = mediaquery => {
  // Desactiva la interacción del glide.
  (mediumBP.matches) 
    ? glide('js-glide-services', false) 
    : glide('js-glide-services')
}

disableGlide(mediumBP)
mediumBP.addListener(disableGlide)

