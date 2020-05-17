/**
 * function: toggleMenu()
 * 
 * @param {string} idIconMenu 
 * @param {string} idNav 
 */
export const toggleMenu = function (idIconMenu, idNav) {
  const navEl = document.getElementById(idNav)
  const toggelEl = document.getElementById(idIconMenu)
  
  if (!(toggelEl && navEl)) return
  
  toggelEl.addEventListener('click', () => {
    navEl.classList.toggle('showNav')
  })
}
