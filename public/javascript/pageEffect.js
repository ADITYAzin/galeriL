const laptopBox = document.querySelectorAll('.card-laptop');
const shwSPK = document.querySelectorAll('.show-spek');
const descriptionOfSpek = document.querySelectorAll('.deskripsi');
const stockBox = document.querySelectorAll('.stock');
const countdown = document.querySelector('#countdown');

shwSPK.forEach((item, i) => {
    item.addEventListener('click', () => {
        descriptionOfSpek[i].classList.toggle('down-description');
        stockBox[i].classList.toggle('putih');
    });
});
    
    //EFFECT
    const AddToCartBTN = document.querySelector('.add-to-cart');
    const iconCART = AddToCartBTN.querySelector('.fa-cart-shopping');
    const iconCHECK = document.getElementById('icon-check');
    const AddedSUCCESS_Notif = document.querySelector('.succes-notification');
    const cartTEXT = document.querySelector('.cart-text');
    const checkCommentClass = 'fa-check';
    const BGblack = 'bg-black';

//Function button for direct page

AddToCartBTN.addEventListener('click', () => {
    AddToCartBTN.classList.add(`${BGblack}`);
    if (BGblack === 'bg-black') {
        console.log('Klik');
        AddToCartBTN.classList.add('text-white');
        iconCART.classList.replace('fa-cart-shopping', `${checkCommentClass}`);
        iconCHECK.classList.add('text-green-500');
        AddedSUCCESS_Notif.classList.toggle('show-success');
        cartTEXT.textContent = `Barang dipilih`;
        
        setTimeout(() => {
            AddedSUCCESS_Notif.classList.remove('show-success');
        }, 2500);
    }
});

