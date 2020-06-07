import { toggleMenu } from './modules/toggle-menu'
// import { phoneNumberValidation } from './modules/formats'
// import { addClampMultipleElements } from './modules/clamp-text'
import { glide } from './modules/glide'
import { data } from './modules/section-services/data'
import { addCardsToIU } from './modules/section-services/cards'
import { $glide, addGlideToIU, addCardsToGlide } from './modules/section-services/structure-glide'

const mediumBP = matchMedia('(min-width: 768px)')

glide('js-glide-business')
toggleMenu('js-menu-open', 'js-nav')
toggleMenu('js-menu-close', 'js-nav')
// addClampMultipleElements('.card-services__text', '#js-card-service')
// addClampMultipleElements('.card-business__text', '#js-card-business')
// phoneNumberValidation()

const cards = mediumBP => {
  if (mediumBP.matches) { addCardsToIU(data) } 
  else {
    const $section = document.querySelector('#js-services div')
    const $cardsServices = $section.querySelector('.services__grid')

    if (!($section && $cardsServices)) return
    $section.removeChild($cardsServices)
  }
}

const glideJs = (mediumBP) => {
  if (!mediumBP.matches) { 
    addGlideToIU($glide) 
    addCardsToGlide(data)
    glide('js-glide-services')
  }
  else {
    const $section = document.querySelector('#js-services div')
    const $glidejs = $section.querySelector('.glide')
   
    if (!($section && $glidejs)) return
    $section.removeChild($glidejs)
  }
}

glideJs(mediumBP)
cards(mediumBP)
mediumBP.addListener(glideJs)
mediumBP.addListener(cards)
