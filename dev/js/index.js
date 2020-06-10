import { c, doc } from './helpers/constantes'
import { toggleMenu } from './modules/toggle-menu'
import { glide } from './modules/glide'
import { addClampMultipleElements } from './modules/clamp-text'
import { mediumBP , toggleCards, toggleGlider } from './modules/services-toggles'


glide('js-glide-business')
toggleMenu('js-menu-open', 'js-nav')
toggleMenu('js-menu-close', 'js-nav')
addClampMultipleElements('.card-business__text', '#js-card-business')
toggleGlider(mediumBP)
toggleCards(mediumBP)
mediumBP.addListener(toggleGlider)
mediumBP.addListener(toggleCards)
