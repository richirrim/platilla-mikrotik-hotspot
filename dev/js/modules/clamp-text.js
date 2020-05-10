
/**
 * function: addClampSingleElement()
 * 
 * @param {string} id
 * @param {number} numberLine 
 * 
 * Limita un parrafo a las líneas que se decee mostrar (visualmente).
 * Por defecto, muestra 5 líneas la función. Esta función solo modifica
 * un elemento.
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
 * function: addClampMultipleElements()
 * 
 * Limita un parrafo a las líneas que se decee mostrar (visualmente).
 * Esta función modifica más de un elemento.
 */
const addClampMultipleElements = function (elementClass) {
  const cards = Array.from(document.querySelectorAll('#js-card-service'))
  if (!(cards.length > 0)) return

  for (const card of cards) {
    const text = card.querySelector(elementClass)
    if (!text) return
    addClampSingleElement(text.id)
  }
}

export { addClampSingleElement, addClampMultipleElements }
