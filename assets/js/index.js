const burgerMenus = document.querySelectorAll('.hamburger')
const sideNav = document.querySelector('.side-nav')

burgerMenus.forEach(menu => {
  menu.addEventListener('click', (e) => {
    e.preventDefault()
  
    if(!sideNav.classList.contains('show')){
      sideNav.classList.add('show');
    } else {
      sideNav.classList.remove('show');
    }
  })
})
