const toggleMenu = function (idIconMenu, idNav) {
  const toggelEl = document.getElementById(idIconMenu)
  const menuEl = document.getElementById(idNav)
  
  if (!(toggleMenu && menuEl)) {
    console.warn('Alguno de los elementos no existen ⚠')
    return
  }
  
  toggelEl.addEventListener('click', () => {
    menuEl.classList.toggle('show')
  })
}

toggleMenu('js-menu-icon', 'js-nav')
