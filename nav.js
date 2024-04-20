// function updateSB(ele) {

//     // Clear the active tab
//     document.getElementById('navHome').classList.remove("active");
//     document.getElementById('navNews').classList.remove("active");
//     document.getElementById('navContact').classList.remove("active");
//     document.getElementById('navAbout').classList.remove("active");

//     // Set the new active tab
//     ele.className = "active";

// }


// Sticky navbar
window.addEventListener('scroll', stickyNav);

// Get the navbar and its offset
var navbar;
var sticky;
window.onload = init;
function init(){
    navbar = document.getElementById('navBar');
    sticky = navbar.offsetTop;
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky')
    } 
    else {
        navbar.classList.remove('sticky');
    }

}
