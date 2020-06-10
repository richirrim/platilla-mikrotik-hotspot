import { createCardElement } from './services-cards'
import { createElementParent, addElementToIU } from './crud-actions'
import { c } from '../helpers/constantes'

/**
 * @return {Node} - Devuelve un html node.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const createGliderElement = () => {
  const $glider = createElementParent('DIV', {class: 'glide', id: 'js-glide-services'})

  const templateGlide = `
    <!-- ------- glide items ------------------>
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides"></ul>
    </div>
    <!-- ---------- glide controls ---------------->
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow  glide__arrow--left button  icon-arrow-left" data-glide-dir="<" type="button">
      <button class="glide__arrow  glide__arrow--right  button  icon-arrow-right" data-glide-dir=">" type="button">
    </div>
  `
  
  $glider.innerHTML = templateGlide
 return $glider
}

const createListCards = (data) => {
  if (!(Array.isArray(data) && data.length > 0)) return // guard.
  const $listCardFragment = document.createDocumentFragment()
  
  data.forEach((card, id) => {
    const $li = document.createElement('LI')
    $li.setAttribute('class', 'glide__slide')
    const $card = createCardElement(++id, card.title, card.text, card.nameFile)
    $li.appendChild($card)
    $listCardFragment.appendChild($li)
  })

  return $listCardFragment
}

/**
 * @fileoverview
 * Antes de ejecutar esta función, previamente debiste haber ejecutado
 * la función 'createGliderElement()' y así poder añadir '$listCards'
 * al glider html, creado a partir de la función mencionada.
 * @param {DocumentFragment} $listCard
 * 
 * @return {void} - No regresa nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const addListCardToGlider = ($listCards) => {
  if (!$listCards) return // guard
  const $glider = document.getElementById('js-glide-services')
  if (!$glider) return // guard
  const $gliderSlides = $glider.querySelector('.glide__slides')
  if (!$gliderSlides) return // guard

  $gliderSlides.appendChild($listCards)
}

export { createGliderElement, createListCards, addListCardToGlider }
