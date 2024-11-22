
const abrir = document.querySelector('.abrir')
const fechar = document.querySelector('.fechar')
const containerModal = document.querySelector('.container-modal')

function modalToggle (event) {
    containerModal.classList.toggle('modal-ativo')
}

function clickForaModal (event) {
    if (event.target === this) {
        containerModal.classList.remove('modal-ativo')
    }
}

abrir.addEventListener('click', modalToggle)
fechar.addEventListener('click', modalToggle)
containerModal.addEventListener('click', clickForaModal)