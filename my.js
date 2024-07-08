function scrollTo(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}



const godown = document.querySelector(".header-arrow ");


const foter = document.querySelector(".portfolio ");

godown.addEventListener('click', function () {
    scrollTo(foter);
    })


