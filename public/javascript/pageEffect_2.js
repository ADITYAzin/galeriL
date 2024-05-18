const showPreview_BTN = document.querySelectorAll('.btn-show-preview');
const titleProductNav = document.querySelector('.title-product-nav');
const titleProduct = document.querySelectorAll('.title-product');
const imgProduct = document.querySelectorAll('.image-product');
const imgPreview = document.querySelector('.image-preview');
const penjelasanProduct = document.querySelector('.penjelasan-produk-list');
const technicalSpexList = document.querySelectorAll('.technical-spec-list');
const fiturOfProductList = document.querySelectorAll('.fitur-produk-list');
const fiturDescriptOfProduct = document.querySelectorAll('.fitur-produk-deskripsi');
const dimensionWeightTitle = document.querySelector('.dimensi-berat');
const dimensionWeight = document.querySelectorAll('.dimensi-berat-list');
const systemRequirementsTitle = document.querySelector('.persyaratan-sistem');
const systemRequirementsList = document.querySelectorAll('.persyaratan-sistem-list');
const inTheboxContentProductTitle = document.querySelector('.isi-kemasan')
const inTheboxContentProduct = document.querySelectorAll('.isi-kemasan-list');
const productPreview = document.querySelector('.popup-product');
const fiturOfProduct = document.querySelector('.fitur-produk');
const eye_icon = document.querySelector('.eye-close');
const cardServiceAll= document.querySelectorAll('.card-service');

const navButtonItems = document.querySelectorAll('.nav-items');
const cartButton = document.querySelectorAll('.cart-btn');
const myCartNotifcation = document.querySelector('.mycart-notification-popup');
const cartItemsCard = document.querySelectorAll('.items-product-added-content');
const closeCart = document.querySelector('.close-cart');
const titleProductinCart = document.querySelectorAll('title-product-cart');
const priceItemsTextCart = document.querySelectorAll('price-items-text');
let giveTextColorPinkForClickCart = 'text-pink-500';
let top80PX = 'top-20';
for (let i = 0; i < cartButton.length; i++){
cartButton[i].addEventListener('click', () => {
    if(myCartNotifcation.classList.contains('-top-96')){
        myCartNotifcation.classList.replace('-top-96', `${top80PX}`);}

    cartButton[i].classList.add(`${giveTextColorPinkForClickCart}`);
    
    if (giveTextColorPinkForClickCart === 'text-pink-500') {
        myCartNotifcation.classList.add('show-cart')}});

closeCart.addEventListener('click', () => {
    if(cartButton[i].classList.contains(`${giveTextColorPinkForClickCart}`)){
        cartButton[i].classList.remove(`${giveTextColorPinkForClickCart}`);
    } else if (myCartNotifcation.classList.contains('right-3.5')){
        myCartNotifcation.classList.replace('right-3.5', '-right-72')
    } else if (myCartNotifcation.classList.contains('-right-72')){
        myCartNotifcation.classList.replace('-right-72', 'right-3.5')}});}

cardServiceAll.forEach((itmes,index) => {
    cardServiceAll[index].classList.add('rounded-b-2xl');
    itmes.addEventListener('click', () => {
        messageClickService();
    })
})
function messageClickService() {
    alert('Afwan sementara ini kami hanya bisa menampilkan UI');
}
function chipEMark() {
    const chip = document.createElement('p');
    chip.className = 'about-chip-emark text-gray-500 mx-2 italic';
    chip.innerHTML = 'Chip Cerdas yang Ditandai Secara Elektronik (E-Mark) adalah pengontrol protokol dan mekanisme perlindungan aman yang diperlukan ketika output arus listrik adaptor daya lebih besar dari 3A atau kabel 5A.';
    return chip;
}

for(let i = 0; i < 1; i++) {
    showPreview_BTN[0].addEventListener('click', ()=>{
        clickPreviewBox();
        presetPreviewLogitechM220();
        console.log('Press');
    })

    showPreview_BTN[1].addEventListener('click', ()=>{
        clickPreviewBox();
        titleProductNav.textContent = titleProduct[1].textContent;
        imgPreview.src = imgProduct[1].src;
        systemRequirementsList[4].remove()
    })
    showPreview_BTN[2].addEventListener('click', ()=>{
        clickPreviewBox();
        presetPreviewProlinkCableType_C();
        removeSystemRequirementsList();
        removeDimensionWeightList();
        removeinTheBoxContentProduct();
        fiturDescriptOfProduct[3].remove();
        let hsg = fiturOfProduct.appendChild(chipEMark());
        console.log(hsg);
    })
    showPreview_BTN[3].addEventListener('click', ()=>{
        clickPreviewBox();
        earphone();
        
    })
    showPreview_BTN[4].addEventListener('click', ()=>{
        clickPreviewBox()
        titleProductNav.textContent = titleProduct[4].textContent;
        imgPreview.src = imgProduct[4].src;
    })
    showPreview_BTN[5].addEventListener('click', ()=>{
        clickPreviewBox();
        let tittleTEXT = 'Daya dan Komponen Listrik';
        let tittle = tittleTEXT.toUpperCase();
        systemRequirementsTitle.innerHTML = tittle;
        presetCarChargerHippoLance2();
        presetDimensionWeightChangeAValue('Dimension (mm) 68 x 32 x 32', 'Weight 38g');
        technicalSpexListChangeAValue('Power Delivery 18w', 'Quick Charging 3.0', 'LED Indicator', 'Warna Hitam',);
        technicalSpexList[4].remove();
        technicalSpexList[5].remove();
        systemRequirementsList[0].innerHTML = 'input DC12V-24V';
        systemRequirementsList[1].innerHTML = 'Output USB DC3.6V-6V/3A,6V-9V/2A9V-12V/1.5A (Max)';
        systemRequirementsList[2].innerHTML = 'Output Type C DC5V/3A,9V/2A,12V/1.5A (Max)';
        systemRequirementsList[3].remove();
        systemRequirementsList[4].remove();
        removeinTheBoxContentProduct();
    })
    showPreview_BTN[6].addEventListener('click', ()=>{
        clickPreviewBox()
        titleProductNav.textContent = titleProduct[6].textContent;
        imgPreview.src = imgProduct[6].src;
    })
    showPreview_BTN[7].addEventListener('click', ()=>{
        clickPreviewBox()
        titleProductNav.textContent = titleProduct[7].textContent;
        imgPreview.src = imgProduct[7].src;
    })
}

    function removeSystemRequirementsList(){
        systemRequirementsTitle.remove();
        systemRequirementsList.forEach((items)=>{
            items.remove();
        })    
    }

    function removeDimensionWeightList(){
        dimensionWeightTitle.remove();
        dimensionWeight.forEach((items)=>{
        items.remove();
        if(items.remove){
        console.log(`${items[dimensionWeight]} Dimension Weight Removed`);
    }})}

    function removeinTheBoxContentProduct(){
        inTheboxContentProductTitle.remove();
        inTheboxContentProduct.forEach((items)=>{
            items.remove();
        })
    }

    function presetPreviewLogitechM220(){
        titleProductNav.textContent = titleProduct[0].textContent;
        imgPreview.src = imgProduct[0].src;
        penjelasanProduct.textContent = `LOGITECH - Wireless Mouse - M220 - Hitam
        Mouse wireless senyap, nyaman dan mudah dimudahkan`;
        fiturOfProductList[0].textContent = `KESUNYIAN DI SETIAP KLIK`;
        fiturOfProductList[1].textContent = `LEBIH SENYAP, LEBIH FOKUS`;
        fiturOfProductList[2].textContent = `KUALITAS YANG BISA KAMU ANDALKAN`;
        fiturDescriptOfProduct[0].textContent = `Lupakan tentang suara klik yang mengganggu. M220 mengurangi suara berisik lebih dari 90% sehingga menciptakan lingkungan yang lebih hening dan produktif untukmu dan orang-orang di sekelilingmu. Kontrol kursornya yang kecil dan mulus menjadikannya cocok untuk bekerja di ruang kecil dan meja yang penuh barang.`;
        fiturDescriptOfProduct[1].textContent = `Tetap fokus pada pekerjaanmu tanpa gangguan suara. Teknologi SilentTouch dari Logitech mengurangi suara klik lebih dari 90%. Artinya, kamu bisa merasakan setiap klik, tanpa mendengar suara apa pun.`;
        fiturDescriptOfProduct[2].textContent = `Mouse ini dibuat menggunakan standar kualitas tinggi sama yang menjadikan Logitech sebagai pemimpin global untuk mouse dan keyboard. Tahan lama dan andal, M220 juga dapat digunakan hingga maksimal 18 bulan tanpa mengganti baterai berkat tombol switch on/off dan mode auto-sleep penghemat daya.`;

        fiturDescriptOfProduct[3] && fiturOfProductList[3].remove
        
        technicalSpexList[0].innerHTML = `3 Tombol (Klik Kiri/Kanan, Klik Tengah)`;
        technicalSpexList[1].innerHTML = `Baterai: 18 bulan (Daya tahan baterai berdasarkan pengguna dan komputasi.) Informasi Baterai: 1 x AA (included)`;
        technicalSpexList[2].textContent = `Penelusuran optik yang mulus DPI (Min./Maks.): 1000±`;
        technicalSpexList[3].textContent = `Koneksi wireless USB 2,4 GHz dengan Jangkauan: 10m (tergantung kondisi lingkungan pengguna.)`;
        technicalSpexList[4].textContent = `Line-by-line scrolling
        Scroll Wheel: Ya, 2D, optik.`;
        technicalSpexList[5].textContent = `Koneksi / Daya: Ya, switch on/off`;

        systemRequirementsList[1].textContent = 'Windows 7, 8, 10 or later';
        systemRequirementsList[2].textContent = 'macOS 10.5 or later';
        systemRequirementsList[3].textContent = 'ChromeOS';
        systemRequirementsList[4].textContent = 'Karnel Linux 2.6+';

        dimensionWeight[0].textContent = 'Height: 3.90 in (99 mm), Width: 2.36 in (60 mm), Depth: 1.54 in (39 mm)';
        dimensionWeight[1].textContent = 'Weight (dengan baterai): 2.65 oz (75.2 g)';
        inTheboxContentProduct[0].textContent = '1 Mouse';
        inTheboxContentProduct[1].textContent = 'Nano Receiver';
        inTheboxContentProduct[2].textContent = '1 AA battery (pre-installed)';
        inTheboxContentProduct[3].textContent = 'Buku Panduan';
    }

    function presetPreviewProlinkCableType_C (){
        titleProductNav.innerHTML = titleProduct[2].innerHTML;
        imgPreview.src = imgProduct[2].src;
        penjelasanProduct.textContent = `PROLINK – Charge Cable – GCC10001 - Hitam`;
        fiturOfProductList[0].textContent = `Transfer Data Berkecepatan Cepat:`;
        fiturOfProductList[1].textContent = `Pengisian Sangat Cepat:`;
        fiturOfProductList[2].textContent = `Chip Cerdas E-Mark:`;
        fiturDescriptOfProduct[0].textContent = `Transfer file, audio, dan video dengan kecepatan transfer 480 Mbps yang luar biasa.`;
        fiturDescriptOfProduct[1].textContent = `Mendukung daya keluaran Pengiriman Daya 100W yang mengesankan yang memungkinkan pengisian daya laptop yang kuat dan stabil, dan pengisian cepat QC4.0 untuk perangkat yang kompatibel dengan USB-C.`;
        fiturDescriptOfProduct[2].textContent = `Mencapai kecepatan transfer data yang lebih cepat dan transmisi daya yang lebih tinggi secara bersamaan tanpa mengorbankan keselamatan secara keseluruhan`;
        fiturDescriptOfProduct[3] && fiturOfProductList[3].remove()
        technicalSpexList[0].innerHTML = `Konektor kabel : C ke C`;
        technicalSpexList[1].innerHTML = `Bahan : Aluminium Alloy Shell Casing + Nylon Braided`;
        technicalSpexList[2].textContent = `Kecepatan Transfer Data: 480 Mbps`;
        technicalSpexList[3].textContent = `Arus Keluaran : 5A, 100W`;
        technicalSpexList[4].textContent = `Panjang : 2 Meter`;
        technicalSpexList[5].textContent = `Fitur : Power Delivery 3.0, Qualcomm 4.0`;
        ;
    }

    function presetCarChargerHippoLance2(){
        titleProductNav.innerHTML = titleProduct[5].innerHTML;
        imgPreview.src = imgProduct[5].src;
        penjelasanProduct.innerHTML = 'Lance 2 Car Charger hadir dengan 2 USB port yang dapat Anda gunakan untuk mencharger smartphone secara bersamaan. Produk ini memiliki sebuah port USB yang dapat digunakan untuk mengisi baterai smartphone dan tablet PC di mobil dan juga terdapat kabel USB Type C untuk mengisi baterai smartphone yang menggunakan USB Type C'
        fiturOfProductList[0].innerHTML = 'Output 36W';
        fiturDescriptOfProduct[0].innerHTML = 'Car Charger ini dapat mengeluarkan output hingga 36w sehingga dapat mengisi baterai smartphone maupun tablet dengan sangat cepat.';
        fiturOfProductList[1].innerHTML = 'Power Delivery 3.0';
        fiturDescriptOfProduct[1].innerHTML = 'Dengan teknologi PD 3.0 proses pengisian daya menggunakan kabel USB Type C akan sangat cepat dan menghemat waktu Anda.';
        fiturOfProductList[2].innerHTML = 'Quick Charge 3.0';
        fiturDescriptOfProduct[2].innerHTML = 'Charger ini dapat mengisi perangkat smartphone lebih cepat dibanding charger lainnya. Smartphone yang Anda gunakan harus mendukung fitur Quick charge 3.0 untuk dapat menggunakan teknologi ini secara efektif.';
        fiturOfProductList[3].innerHTML = 'Car Cigarette Plug';
        fiturDescriptOfProduct[3].innerHTML = 'Car charger ini memiliki port cigarette plug sebagai sumber listriknya, sangat ramah lingkungan dan tidak mudah panas.';
    };

    function presetDimensionWeightChangeAValue(dimensi, weight){
     return `${dimensionWeight[0].innerHTML = dimensi};
     ${dimensionWeight[1].innerHTML = weight};`
    }

    function technicalSpexListChangeAValue(zeroList, firstList , secList, thirdList, fourList, fiveList){
        return `${technicalSpexList[0].innerHTML = zeroList};
        ${technicalSpexList[1].innerHTML = firstList};
        ${technicalSpexList[2].innerHTML = secList};
        ${technicalSpexList[3].innerHTML = thirdList};
        ${technicalSpexList[4].innerHTML = fourList};
        ${technicalSpexList[5].innerHTML = fiveList};
        
        `
    }

    function clickPreviewBox(){
        productPreview.classList.add('muncul');
    }
