/**
 * Function: createCard()
 * @param {number} id 
 * @param {string} title 
 * @param {string} text 
 * @param {string} nameFile 
 */
const createCard = (id, title = 'Título', text = 'Description', nameFile) => {
  const $card = document.createElement('ARTICLE')
  $card.setAttribute('class', 'card-services  b-shadow')
  $card.setAttribute('id', 'js-card-service')

  const contentElements = `
    <img class="card-services__image" src='/images/section-service-${nameFile}.svg' alt="Imagen, servicios de soporte a usuarios y equipos.">
    <h3 class="card-services__subtitle">${title}</h3>
    <p class="card-services__text" id="js-text${id}">${text}</p>
  `

  $card.innerHTML = contentElements
  return $card
}

/**
 * Function: addInfoToCard()
 * @param {Array} data 
 */
const addInfoToCard = (data) => {
  const $contentFragment = document.createDocumentFragment()
  
  data.forEach((card, id) => {
    const $card = createCard(++id, card.title, card.text, card.nameFile)
    $contentFragment.appendChild($card)
  })
  
  return $contentFragment
}

/**
 * Function: addCardsToIU()
 * @param {Array} data 
 */
const addCardsToIU = (data) => {
  if (!(Array.isArray(data) && data.length > 0)) return // guard.
  const $cards = addInfoToCard(data)
  
  let $section = document.getElementById('js-services')
  if (!$section) return // guard.
  $section = $section.querySelector('DIV')

  // Crea div para usarlo como grid para las $cards.
  const $div = document.createElement('DIV')
  $div.setAttribute('class', 'services__grid')

  $section.innerHTML = ''
  $div.appendChild($cards)
  $section.appendChild($div)
}

export { addCardsToIU, createCard }
