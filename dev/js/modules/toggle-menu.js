/**
 * function: toggleMenu()
 * 
 * @param {string} idIconMenu 
 * @param {string} idNav 
 */
export const toggleMenu = function (idIconMenu, idNav) {
  const toggelEl = document.getElementById(idIconMenu)
  const menuEl = document.getElementById(idNav)
  
  if (!(toggleMenu && menuEl)) return
  
  toggelEl.addEventListener('click', () => {
    menuEl.classList.toggle('show')
  })
}
