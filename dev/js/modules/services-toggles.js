import { c, doc } from '../helpers/constantes'
import { addClampMultipleElements } from './clamp-text'
import { addElementToIU } from './crud-actions'
import { glide } from './glide'
import { servicesData } from './services-data'
import { addCardsToIU } from './services-cards'
import { createGliderElement, createListCards, addListCardToGlider } from './services-glider'

const mediumBP = matchMedia('(min-width: 768px)') // breakpoint.


/**
 * @fileoverview
 * Esta función elimina la grid cards html de la sección de servicios
 * cuando la resolución  es menor '768px'. Cuando es mayor la añade.
 * 
 * @param {MediaQueryList} mediumBP 
 * 
 * @return {void} - No regresa nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const toggleCards = mediumBP => {
  if (mediumBP.matches) { 
    addCardsToIU() 
    addClampMultipleElements('.card-services__text', '#js-card-service')
  } 
  else {
    const $section = doc.querySelector('#js-services div')
    const $cardsServices = $section.querySelector('.services__grid')
    if (!($section && $cardsServices)) return

    $section.removeChild($cardsServices)
    addClampMultipleElements('.card-services__text', '#js-card-service') // hack.
  }
}

/**
 * @fileoverview
 * Esta función elimina el glider html de la sección de servicios
 * cuando la resolución  es mayor '768px'. Cuando es menor la añade.
 * 
 * @param {MediaQueryList} mediumBP 
 * 
 * @return {void} - No regresa nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const toggleGlider = (mediumBP) => {
  if (!mediumBP.matches) { 
    addElementToIU('#js-services div', createGliderElement())
    addListCardToGlider(createListCards(servicesData))
    addClampMultipleElements('.card-services__text', '#js-card-service')
    glide('js-glide-services') // Activa la funcionalidad.
  }
  else {
    const $section = doc.querySelector('#js-services div')
    const $glidejs = $section.querySelector('.glide')
    if (!($section && $glidejs)) return

    $section.removeChild($glidejs)
  }
}

export { mediumBP , toggleCards, toggleGlider }
