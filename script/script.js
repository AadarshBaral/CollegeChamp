
const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const toggleButton1 = document.getElementsByClassName('toggle-btn1')[0]

const navbarLinks = document.getElementsByClassName('nav-links')[0]


toggleButton.addEventListener('click', () => {
  console.log('click')
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle('hide')
  toggleButton1.classList.toggle('act')
})
toggleButton1.addEventListener('click', () => {
  console.log('click')
  navbarLinks.classList.toggle('active')
  toggleButton1.classList.toggle('act')
  toggleButton.classList.toggle('hide')

})
document.querySelector("iframe").addEventListener("load", 
    function() {
        window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});








