/**
 * @param {string} idElement - String con el id del elemento que lanza el evento.
 * @param {string} idNav  - Strin con el id del elemento que se desplegara.
 * 
 * @return {void} - No devuelve nada.
 * 
 * @author Ricardo Ortega Chap <ricardoortega.dev@gmail.com>
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
