import clamp from '../clamp'
/**
 * @fileoverview
 * Limita un parrafo a las líneas que se decee mostrar (visualmente).
 * Por defecto, muestra 5 líneas la función. Esta función solo modifica
 * un elemento.
 * @param {string} id
 * @param {number} numberLine 
 * 
 * @return {void} - No devuelve nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const addClampSingleElement = function (id, numberLine) {
  // https://github.com/josephschmitt/Clamp.js
  const pEl = document.getElementById(id)
  if (!pEl) return
  if (typeof pEl === 'string') return
  if (!numberLine) {
    $clamp(pEl, { clamp: 5 })
    return
  }         
  $clamp(pEl, { clamp: numberLine })
}

/**
 * @fileoverview
 * Limita un parrafo a las líneas que se decee mostrar (visualmente).
 * Esta función modifica más de un elemento.
 * 
 * @param {string} elementClass 
 * @param {string} id 
 * 
 * @return {void} - No devuelve nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
 */
const addClampMultipleElements = function (elementClass, id) {
  const cards = Array.from(document.querySelectorAll(id))
  if (!(cards.length > 0)) return

  for (const card of cards) {
    const text = card.querySelector(elementClass)
    if (!text) return
    addClampSingleElement(text.id)
  }
}

export { addClampSingleElement, addClampMultipleElements }
