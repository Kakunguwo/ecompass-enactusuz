const menu_bar = document.getElementById('bar');
const menu_exit = document.getElementById('exit');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        
    })
}

if (exit) {
    exit.addEventListener('click', () => {
        nav.classList.remove('active');
        
    })
}