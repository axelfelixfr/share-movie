/* Modal */
const modal = document.querySelector('.modalEffect');
const botonCerrar = document.querySelectorAll('.cerrarModal');

const cerrarModal = () => {
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

const abrirModal = () => {
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');
    modal.style.display = 'flex';
}

for (let i = 0; i < botonCerrar.length; i++) {

    const elements = botonCerrar[i];

    elements.onclick = (e) => cerrarModal();

    modal.style.display = 'none';

    window.onclick = function (event) {
        if (event.target == modal) cerrarModal();
    }
}