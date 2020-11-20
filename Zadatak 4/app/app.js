const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length-1].classList.add('current');
    }
}

next.addEventListener('click', e =>{
    nextSlide();
})

prev.addEventListener('click', e =>{
    prevSlide();
})



//KeyCode == 37 i 39 isto radi ali prikazuje upozorenje (-----) ???
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
}

