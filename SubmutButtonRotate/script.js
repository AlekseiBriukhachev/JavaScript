const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    event.target.classList.add('animate');
    setTimeout(() => {
        event.target.classList.remove('animate');
    }, 4500);
});