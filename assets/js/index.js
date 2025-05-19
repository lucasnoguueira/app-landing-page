const menuToggle = document.getElementById('container-menu-toggle')
const mobileNav = document.getElementById('container-mobile-nav')

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})
