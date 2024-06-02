
//function clickScroll (param){
//return param === 'top' ? location.href = '#creation-box' : location.href = '#yata';
//}

const showDown = document.querySelectorAll('.show-down');
const textBox = document.querySelectorAll('.text-box');

for (let i =  0; i < showDown.length; i++) {
    showDown[i].addEventListener('click', function(){
        textBox[i].classList.toggle('clickd');
        showDown[i].classList.toggle('oke');
    });
}

const closeX = document.querySelector('.close-x');  
const notifDesign = document.querySelector('.notification-design');
const iconInstall = document.querySelector('.icon-download-component');



const cardBX = document.querySelectorAll('.cardbx');

const observer = new IntersectionObserver((entries) => 
entries.forEach((entry) => {console.log(entry);
if (entry.isIntersecting){
    entry.target.classList.add('show-card');
} else{
    entry.target.classList.remove('show-card');
}}));

const hiddenElementsLeft = document.querySelectorAll('.hiddenElements');
hiddenElementsLeft.forEach((allElementsLeft) => {
    observer.observe(allElementsLeft)
});


