ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.main__title, .section__title', {
    delay: 500,
    origin: "left"
})

ScrollReveal().reveal('.sec-01 .image, .info', {
    delay: 600,
    origin: "bottom"
})

ScrollReveal().reveal('.text__box', {
    delay: 700,
    origin: "rightf"
})

ScrollReveal().reveal('.media__icones i', {
    delay: 500,
    origin: "bottom", 
    interval: 100
})

// segunda

ScrollReveal().reveal('.sec__02 .image,.sec__03 .image', {
    delay: 500,
    origin: "top"
})

// terceira

ScrollReveal().reveal('.media__info li', {
    delay: 500,
    origin: "left",
    interval: 200
})