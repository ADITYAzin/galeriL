const whatsappIcon = document.querySelector('.whatsapp-icn');
const captionArea = document.querySelector('.caption-area');
const whatsAppPopup = document.querySelector('.wa-contact-main');
const backToPage = document.querySelector('.back-to-page');
const adminProfile = document.querySelector('.admin-profile');
let styleButtonBack = 'back-to-page transition-all duration-150 ease-out rotate-0';
let clickButton= 'rotate-180';
const flexPopup = 'flex'
const hiddenPopup = 'hidden';
stylingCaption
let rotateIconClick = 'click-rotate-again';
let rotateIcon = 'rotate-icon';
let prsetText = 'Pesan via WhatsApp';
let presetStyle = 'caption-area bg-green-500 border-4 border-white rounded-br-xl text-center text-ellipis text-nowrap top-1.5 py-2 px-3 text-white absolute shadow-xl';

adminProfile.src = 'image/admin-profile copy.jpeg';

function stylingCaption(){
    captionArea.innerHTML = `${prsetText}`;
    captionArea.className = `${presetStyle}`;
    captionArea.classList.add('skew-effect');
}
setTimeout(stylingCaption, 2800);

function WAEffectsStyle(){
    whatsappIcon.classList.add(rotateIcon);
}
setTimeout(WAEffectsStyle, 2000); //)

whatsappIcon.addEventListener('click',()=>{
    captionArea.classList.toggle('skew-effect');
    if(whatsappIcon.classList.contains('skew-effect')){
        whatsappIcon.classList.replace(rotateIcon, rotateIconClick);
    }else if(rotateIconClick === 'click-rotate-again'){
        alert('Anda klik akan hilang, refresh page untuk mengulangi.')
        whatsappIcon.classList.remove(rotateIcon);
    }
})
backToPage.classList.add(clickButton);
backToPage.addEventListener('click',()=>{
    backToPage.classList.toggle(clickButton)
    if(backToPage.classList.contains('rotate-0')){
        backToPage.classList.replace('rotate-0', 'rotate-180');
    } else if(whatsAppPopup.classList.contains('show-contact')){
        whatsAppPopup.classList.remove('show-contact');
    }
});

captionArea.addEventListener('click',()=>{
    whatsAppPopup.classList.add('show-contact');
});

function sendMessageToWhatsapp(){
    const urlWhatsapp = `https://wa.me/6281515153436?text=Halo Min!, nama saya ${nama.value}, Pesanan: ${pesan.value}. Berikut alamat kirim saya: ${alamat.value}`;
    window.open(urlWhatsapp);
}