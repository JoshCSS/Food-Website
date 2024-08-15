const toggleButton = document.getElementsByClassName('burger-button')[0]
const navbarLinks = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})