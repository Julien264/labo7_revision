const cta = document.querySelectorAll('.cta');
const modal = document.querySelector('.modal');

for (let i = 0; i < cta.length; i++) {
    const button = cta[i];
    
    button.addEventListener('click', openModal);
}

function openModal(){
    modal.classList.add('visible');


    modal.addEventListener('click', closeModal)
    
}

function closeModal(){
    modal.classList.remove("visible");
}