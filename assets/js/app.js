const navbar = document.querySelector('.navbar');
const cartItem = document.querySelector('.cart-items-container');
const searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}


document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});


sr.reveal(`.home__title`, {
    origin: 'top',
    interval: 300,
    distance: '160px'
})
sr.reveal(`.home__description`, {
    origin: 'left',
    delay: 300,
    distance: '1300px'
})
sr.reveal(`.home__button`, {
    origin: 'bottom',
    delay: 400,
    distance: '300px'
})


sr.reveal(`.menu-box, .products-box, .blogs-box`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.review-box`, {
    origin: 'right',
    interval: 200,
    distance: '300px'
})

sr.reveal(`.contact__form`, {
    opacity: 0.1,
    delay: 400
})