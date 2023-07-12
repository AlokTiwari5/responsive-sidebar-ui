const body = document.querySelector('body');
const toggleSwtich = document.querySelector('.toggle-switch');
const navText = document.querySelector('.nav-text span');

toggleSwtich.addEventListener('click', () => {
    body.classList.toggle('light');
    if(body.classList.contains('light')){
        navText.innerHTML = 'Dark Mode';
    }
    else{
        navText.innerHTML = 'Light Mode';
    }
});