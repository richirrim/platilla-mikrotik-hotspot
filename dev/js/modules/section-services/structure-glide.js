import { createCard } from './cards'

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
const $glide = document.createElement('DIV')
$glide.setAttribute('class', 'glide')
$glide.setAttribute('id', 'js-glide-services')
$glide.innerHTML = templateGlide

const addGlideToIU = ($element) => {
  if (!$element) return // guard
  const $sectionServices = document.getElementById('js-services')
  if (!$sectionServices) return // guard
  const $container = $sectionServices.querySelector('div')
  if (!$container) return // guard

  $container.appendChild($element)
}

const addCardsToGlide = (data) => {
  const $glide = document.getElementById('js-glide-services')
  if (!$glide) return
  const $ul = $glide.querySelector('.glide__slides')
  if (!$ul) return

  const $contentFragment = document.createDocumentFragment()
  
  data.forEach((card, id) => {
    const $li = document.createElement('LI')
    $li.setAttribute('class', 'glide__slide')
    const $card = createCard(++id, card.title, card.text, card.nameFile)
    $li.appendChild($card)
    $contentFragment.appendChild($li)
  })

  $ul.appendChild($contentFragment)
}
export { $glide, addGlideToIU, addCardsToGlide }
