import { c, doc } from '../helpers/constantes' 
import { servicesData } from './services-data'
import { createElementParent, addElementToIU } from './crud-actions'

/**
 * @fileoverview
 * Crea la estructura de un componente html card.
 * 
 * @param {number} id - Un número diferente de cero, el cero como id puede ocacionar problemas.
 * @param {string} title - Texto para el título de la card. 
 * @param {string} text - Una descripción para la card.
 * @param {string} nameFile  - Una imagen para la card.
 * 
 * @return {Node} Devuelve un nodo de tipo elemento.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
*/
const createCardElement = (id, title = 'Título', text = 'Description', nameFile) => {
  const $card = createElementParent('ARTICLE', {
    class: 'card-services  b-shadow',
    id: 'js-card-service'
  })

  const contentElements = `
    <img class="card-services__image" src='/images/section-service-${nameFile}.svg' alt="Imagen, servicios de soporte a usuarios y equipos.">
    <h3 class="card-services__subtitle">${title}</h3>
    <p class="card-services__text" id="js-text${id}">${text}</p>
  `

  $card.innerHTML = contentElements
  return $card
}


/**
 * @param {Object[]} data - Recibe un array de objetos.
 * 
 * @return {DocumentFragment} - Devuelve un fragmeto con un conjuto de cards html.
 *
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const createListCards = (servicesData) => {
  if (!(Array.isArray(servicesData) && servicesData.length > 0)) return // guard.
  const $listCardFragment = doc.createDocumentFragment()
  
  servicesData.forEach((card, id) => {
    const $card = createCardElement(++id, card.title, card.text, card.nameFile)
    $listCardFragment.appendChild($card)
  })
  
  return $listCardFragment
}


/**
 * @return {void} No retorna nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const addCardsToIU = () => {
  let $section = doc.getElementById('js-services')
  if (!$section) return // guard.
  const $div = $section.querySelector('DIV')
  if (!$div) return // guard.

  const $listCards = createListCards(servicesData)
  // Crea div para usarlo como grid para las $cards.
  const $gridListCards = createElementParent('DIV', {class: 'services__grid'})
  $gridListCards.appendChild($listCards)

  $div.innerHTML = ''
  addElementToIU('#js-services div',  $gridListCards)
}

export { addCardsToIU, createCardElement }
