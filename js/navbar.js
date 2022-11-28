// Создаю переменные
let navbar = document.getElementById('navbar').classList
let active_class = "navbar_scrolled"

/**
 * Слушаю событие прокрутки
 */
window.addEventListener('scroll', e => {
  if(pageYOffset > 500) navbar.add(active_class)
  else navbar.remove(active_class)
})