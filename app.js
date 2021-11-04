let ham = document.querySelector('.ham');
let nav = document.querySelector('nav');

ham.onclick = () =>{
    ham.classList.toggle('fa-times');
    nav.classList.toggle('nav');
}

window.onscroll = () =>{
    ham.classList.remove('fa-times');
    nav.classList.remove('nav');
}