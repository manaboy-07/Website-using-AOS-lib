const Open = document.getElementById('open');
const Close = document.getElementById('close');
const navList = document.getElementById('nav-list');

Open.addEventListener('click', () => {
    navList.classList.add('active');
})

// close the menu
Close.addEventListener('click', () => {
    navList.classList.remove('active');
})