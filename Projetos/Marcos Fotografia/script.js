const fotos = document.querySelectorAll('.gallery div');

fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        const src = foto.querySelector('img').getAttribute('src');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${src}" alt="Foto ampliada">`;
        document.body.appendChild(modal);
        modal.classList.add('show');
        foto.querySelector('img').style.transform = 'scale(1.2)';

        modal.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(modal);
                foto.querySelector('img').style.transform = 'scale(1)';
            }, 300);
        });
    });
});