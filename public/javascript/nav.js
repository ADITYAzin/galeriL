const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const list = document.getElementsByTagName('li')[1];
const ruu = list.querySelector('a');
const notifications = document.querySelector('.notification');
const card = document.querySelector(".card-notif");
const closeButton = card.querySelector("#close");

//

list.addEventListener('click', () => {
  notifications.style.display = 'flex';//INI
  

});

closeButton.addEventListener("click", () =>{
  notifications.style.display = 'none';
});


//CATATAN:
//SAAT DITAMBAHKAN BACKGROUND ITU CONTAINER WIDTH NYA MENYESUAIKAN
//JIKA TIDAK MAKA CONTAINER WIDTH NYA SESUAI DENGAN CARDNYA
//APABILA INGIN MEMBUAT POPUP MAKA BERIKAN DISPLAY NONE DAN MENAMBHKANNYA DENGAN


const darkTgl = document.getElementById('dark-toggle');
const body = document.querySelector('body');
const html = document.querySelector('html');


darkTgl.addEventListener('click', () =>{
  if(darkTgl.checked){
    body.classList.add('dark');
  } else{
    body.classList.remove('dark');

}});


