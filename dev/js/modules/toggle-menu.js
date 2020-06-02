/**
 * function: toggleMenu()
 * 
 * @param {string} idElement 
 * @param {string} idNav 
 */
export const toggleMenu = function (idElement, idNav) {
  const $navEl = document.getElementById(idNav)
  const $toggelEl = document.getElementById(idElement)
  
  if (!($toggelEl && $navEl)) return
  
  $toggelEl.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') $navEl.classList.toggle('showNav') // Al hacer clic en un enlace dentro del menu, el menu se cierra.
    if (e.target.id === 'js-menu-open') $navEl.classList.toggle('showNav')
    if (e.target.id === 'js-icon-close') $navEl.classList.toggle('showNav')
  })
}
