// create sticky Navigation Bar on Scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.togggle("sticky".this.window.scrollY > 0)
})
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
