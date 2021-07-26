
const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const toggleButton1 = document.getElementsByClassName('toggle-btn1')[0]

const navbarLinks = document.getElementsByClassName('nav-links')[0]
// const dropdown = document.getElementsByClassName('dropdown')[0]
// const subclass_items = document.querySelectorAll('.subclass-items')[0]


// dropdown.addEventListener('click',() =>{
// subclass_items.style.display = 'flex'
// console.log('clixkk')

// })

toggleButton.addEventListener('click', () => {
 
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle('hide')
  toggleButton1.classList.toggle('act')
})
toggleButton1.addEventListener('click', () => {
 
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




var btn2 = document.getElementById('btn2');


function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block') {
    e.style.display = 'none';
  }
  else {
    e.style.display = 'block';
    
  }
  
  console.log('clicked');
  return;
}

