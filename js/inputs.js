/* Inputs */
// Valores por defecto
document.getElementById('email').value = 'axel@sharemovie.com'
document.getElementById('password').value = 'sharemovie'
document.getElementById('search').value = 'Bojack Horseman'
    
document.getElementById('subscribe').value = 'axel@correo.com'
// Seleccionamos todos los input
const todosInput = document.querySelectorAll('input');
for(const input of todosInput) {
    input.addEventListener('input', () => {
        const val = input.value
        if(!val) {
        input.parentElement.classList.add('empty')
        } else {
        input.parentElement.classList.remove('empty')
        }
    })
}