import { c, doc } from '../helpers/constantes'
/**
 * @fileoverview
 * Crea un elemento html padre. Este elemento puede tener o no
 * atributos como id o clases, pero es opcional.
 * 
 * @param {string} element - String con el nombre del elemento Html a crear.
 * @param {Object} [attributes] - Recibe un objeto con las siguientes propiedades.
 * @param {string} [attributes.class] - Es un string con clases separadas por espacios.
 * @param {string} [attributes.id] - Es un string con ids separado por espacios.
 * 
 * @return {Object} - Devuelve un nodo HTML.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const createElementParent = (element, attributes) => {
  if (!element) return // guard.
  const $element = doc.createElement(element)
  
  if (Object.entries(attributes).length > 0) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  return $element
} 

/**
 * @fileoverview
 * Añade un node element a la UI. Esta función te permite seleccionar un elemento html
 * pasando un selector css o un id normal.
 * 
 * @param {string} selector - Este parámetro  acepta selectores css como '#nav' o '.nav' o un id como 'js-nav'.
 * @param {Object} elements - Puedes pasar una lista de elementos o un único elemento HTML.
 * 
 * @return {void} - No retorna nada.
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const addElementToIU = function(selector, elements) {
  let $elementParent
 
  if (!(selector && elements)) return // guard.

  if (selector[0] === '.' || selector[0] === '#') $elementParent = doc.querySelector(selector)
  else $elementParent = doc.getElementById(selector)
  
  if (!$elementParent) return
  $elementParent.appendChild(elements)
}

export { createElementParent, addElementToIU }
