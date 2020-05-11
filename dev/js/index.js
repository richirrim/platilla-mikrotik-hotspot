import { toggleMenu } from './modules/toggle-menu'
import { phoneNumberValidation } from './modules/formats'
import { addClampSingleElement, addClampMultipleElements } from './modules/clamp-text'
import { glide } from './modules/glide'

glide('js-glide-business')
glide('js-glide-services')
toggleMenu('js-menu-icon', 'js-nav')
addClampMultipleElements('.card-services__text', '#js-card-service')
addClampMultipleElements('.card-business__text', '#js-card-business')
phoneNumberValidation()
