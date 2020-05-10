import { toggleMenu } from './modules/toggle-menu'
import { phoneNumberValidation } from './modules/formats'
import { addClampSingleElement, addClampMultipleElements } from './modules/clamp-text'
import { glide } from './modules/glide'

toggleMenu('js-menu-icon', 'js-nav')
addClampMultipleElements('.card-services__text')
phoneNumberValidation()
