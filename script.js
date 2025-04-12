//mobile menu functionality
const sidemenu = document.querySelector("#sidemenu");

function openMenu() {
    sidemenu.classList.add("header__mobile-menu--open");
    sidemenu.classList.remove("header__mobile-menu--closed");
}

function closeMenu() {
    sidemenu.classList.add("header__mobile-menu--closed");
    sidemenu.classList.remove("header__mobile-menu--open");
}


//header background scroll effect
const headerNav = document.querySelector(".header__nav");
const headerMenu = document.querySelector(".header__menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerNav.classList.add("header__nav--scrolled");
        headerMenu.classList.add("header__menu--hidden");
    } else {
        headerNav.classList.remove("header__nav--scrolled");
        headerMenu.classList.remove("header__menu--hidden");
    }
});

//reset contact form fields when the page loads
window.onload = function () {
    document.getElementById("form").reset();
};
