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
const systemRequirementsList  = document.querySelectorAll('.persyaratan-sistem-list');
const inTheboxContentProductTitle = document.querySelector('.isi-kemasan');
const inTheboxContentProduct = document.querySelectorAll('.isi-kemasan-list');
const productPreview = document.querySelector('.popup-product');
const fiturOfProduct = document.querySelector('.fitur-produk');
const closeWindow = document.querySelector('.close-window');
const cardServiceAll= document.querySelectorAll('.card-service');
const daya = document.querySelector('.daya');
const aboutChipEMARK = document.querySelectorAll('.about-chip-emark')[0];
const priceNumber = document.querySelector('.price-number');

const AddToCartBTN = document.querySelector('.add-to-cart');
const iconCART = document.querySelector('.fa-cart-shopping');
const iconCHECK = document.getElementById('icon-check');
const AddedSUCCESS_Notif = document.querySelector('.succes-notification');
const cartTEXT = document.querySelector('.cart-text');
const checkCommentClass = 'fa-check';
const BGblack = 'bg-black';
const countdown = document.querySelector('#countdown');

const navButtonItems = document.querySelectorAll('.nav-items');
const cartButton = document.querySelectorAll('.cart-btn');
const myCartNotifcation = document.querySelector('.mycart-notification-popup');
const cartItemsCard = document.querySelectorAll('.items-product-added-content');
const closeCart = document.querySelector('.close-cart');
const titleProductinCart = document.querySelectorAll('title-product-cart');
const priceItemsTextCart = document.querySelectorAll('price-items-text');

let giveTextColorPinkForClickCart = 'text-pink-500';
let top80PX = 'top-20';


cardServiceAll.forEach((items,index) => {
    cardServiceAll[index].classList.add('rounded-b-xl');
    items.addEventListener('click', () => {
        messageClickService();
});})

function messageClickService() {
    alert('Afwan sementara ini kami hanya bisa menampilkan UI');
}

function chipEMark() {
    const chip = document.createElement('p');
    chip.className = 'about-chip-emark text-gray-500 mt-2 mx-2 italic';
    chip.innerHTML = 'Apa itu Chip E-Mark? Chip Cerdas yang Ditandai Secara Elektronik (E-Mark) adalah pengontrol protokol dan mekanisme perlindungan aman yang diperlukan ketika output arus listrik adaptor daya lebih besar dari 3A atau kabel 5A.';
    return chip;
}

for(let i = 0; i < 1; i++) {
    showPreview_BTN[0].addEventListener('click', ()=>{
        clickPreviewBox();
        presetPreviewLogitechM220();
        closePreviewBox();
        buyThisItems('https://www.tokopedia.com/galerilofficial/logitech-wireless-mouse-m220-hitam?extParam=src%3Dshop%26whid%3D17171163', 3);
    })

    showPreview_BTN[1].addEventListener('click', ()=>{
        clickPreviewBox();
        pwmProlinkMouse('PROLINK - Wireless Mouse - PMW6007 - Putih','https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/26/7ad8b5c2-f3ac-4af9-9ac4-773258155206.jpg', 'Mouse Wireless Prolink PMW6007 dilengkapi sensor optik 800/1200/ 1600DPI yang dapat disetel untuk meningkatkan akurasi.');
        closePreviewBox();
        buyThisItems('https://www.tokopedia.com/galerilofficial/prolink-wireless-mouse-pmw6007-putih?extParam=src%3Dshop%26whid%3D17171163', 3);
    })

    showPreview_BTN[2].addEventListener('click', ()=>{
        clickPreviewBox();
        presetPreviewProlinkCableType_C();
        removeSystemRequirementsList();
        removeDimensionWeightList();
        removeinTheBoxContentProduct();
        fiturDescriptOfProduct[3].remove();
        let connection = fiturOfProduct.appendChild(fiturTypeCtambahan());
        console.log(connection);
        let chipEMar = fiturOfProduct.appendChild(chipEMark());
        console.log(chipEMar);
        closePreviewBox();
        buyThisItems('https://www.tokopedia.com/galerilofficial/prolink-charge-cable-gcc10001-hitam?extParam=whid%3D17171163%26src%3Dshop', 3);
    })

    showPreview_BTN[3].addEventListener('click', ()=>{
        clickPreviewBox();
        closePreviewBox();
        hippoEarphone();
        priceNumber.textContent = 'Rp. 90,000'
        
        buyThisItems('https://www.tokopedia.com/galerilofficial/hippo-bluetooth-earphone-mono-01-v5-hitam?extParam=src%3Dshop%26whid%3D17171163', 3);
    })

    showPreview_BTN[4].addEventListener('click', ()=>{
        clickPreviewBox()
        titleProductNav.textContent = titleProduct[4].textContent;
        closePreviewBox();
        prolinkCarCharger();
        buyThisItems('https://www.tokopedia.com/galerilofficial/prolink-car-charger-pcc33502-hitam?extParam=src%3Dshop%26whid%3D17171163', 3);
    })


    showPreview_BTN[5].addEventListener('click', ()=>{
        clickPreviewBox();
        buyThisItems('https://www.tokopedia.com/galerilofficial/hippo-car-charger-lance-2-hitam?extParam=src%3Dshop%26whid%3D17171163', 3);
        closePreviewBox();
        let tittleTEXT = 'Daya dan Komponen Listrik';
        let tittle = tittleTEXT.toUpperCase();
        systemRequirementsTitle.innerHTML = tittle;
        presetCarChargerHippoLance2();
        presetDimensionWeightChangeAValue('Dimension (mm) 68 x 32 x 32', 'Weight 38g');
        technicalSpexListChangeAValue('Power Delivery 18w', 'Quick Charging 3.0', 'LED Indicator', 'Warna Hitam',);
        removeinTheBoxContentProduct();
    })

    showPreview_BTN[6].addEventListener('click', ()=>{
        clickPreviewBox();
        buyThisItems('https://www.tokopedia.com/galerilofficial/prolink-wireless-mouse-pmw6007-hitam?extParam=src%3Dshop%26whid%3D17171163', 3);
        pwmProlinkMouse('PROLINK - Wireless Mouse - PMW6007 - Hitam','https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/25/298286e9-fdb5-4357-a617-defbad29c6cc.jpg', 'Mouse Wireless Prolink PMW6007 dilengkapi sensor optik 800/1200/ 1600DPI yang dapat disetel untuk meningkatkan akurasi.');
        closePreviewBox();
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
        }
    })
}

function removeinTheBoxContentProduct(){
    inTheboxContentProductTitle.remove();
    inTheboxContentProduct.forEach((items)=>{
        items.remove();
    })
}


function presetPreviewLogitechM220(){
    titleProductNav.textContent = titleProduct[0].textContent;
    imgPreview.src = imgProduct[0].src;
    priceNumber.textContent = 'Rp. 165,000'
    
    penjelasanProduct.textContent = `LOGITECH - Wireless Mouse - M220 - Hitam
    Mouse wireless senyap, nyaman dan mudah dimudahkan`;
    fiturOfProductList[0].textContent = `KESUNYIAN DI SETIAP KLIK`;
    fiturOfProductList[1].textContent = `LEBIH SENYAP, LEBIH FOKUS`;
    fiturOfProductList[2].textContent = `KUALITAS YANG BISA KAMU ANDALKAN`;
    fiturDescriptOfProduct[0].textContent = `Lupakan tentang suara klik yang mengganggu. M220 mengurangi suara berisik lebih dari 90% sehingga menciptakan lingkungan yang lebih hening dan produktif untukmu dan orang-orang di sekelilingmu. Kontrol kursornya yang kecil dan mulus menjadikannya cocok untuk bekerja di ruang kecil dan meja yang penuh barang.`;
    fiturDescriptOfProduct[1].textContent = `Tetap fokus pada pekerjaanmu tanpa gangguan suara. Teknologi SilentTouch dari Logitech mengurangi suara klik lebih dari 90%. Artinya, kamu bisa merasakan setiap klik, tanpa mendengar suara apa pun.`;
    fiturDescriptOfProduct[2].textContent = `Mouse ini dibuat menggunakan standar kualitas tinggi sama yang menjadikan Logitech sebagai pemimpin global untuk mouse dan keyboard. Tahan lama dan andal, M220 juga dapat digunakan hingga maksimal 18 bulan tanpa mengganti baterai berkat tombol switch on/off dan mode auto-sleep penghemat daya.`;

    fiturDescriptOfProduct[3].remove();
    fiturOfProductList[3].remove();
    
    technicalSpexList[0].innerHTML = `3 Tombol (Klik Kiri/Kanan, Klik Tengah)`;
    technicalSpexList[1].innerHTML = `Baterai: 18 bulan (Daya tahan baterai berdasarkan pengguna dan komputasi.) Informasi Baterai: 1 x AA (included)`;
    technicalSpexList[2].textContent = `Penelusuran optik yang mulus DPI (Min./Maks.): 1000±`;
    technicalSpexList[3].textContent = `Koneksi wireless USB 2,4 GHz dengan Jangkauan: 10m (tergantung kondisi lingkungan pengguna.)`;
    technicalSpexList[4].textContent = `Line-by-line scrolling
    Scroll Wheel: Ya, 2D, optik.`;
    technicalSpexList[5].textContent = `Koneksi / Daya: Ya, switch on/off`;

    systemRequirementsList[0].textContent = 'Receiver USB. Tersedia port USB dalam device anda';
    systemRequirementsList[1].textContent = 'Windows 7, 8, 10 or later';
    systemRequirementsList[2].textContent = 'macOS 10.5 or later';
    systemRequirementsList[3].textContent = 'ChromeOS';
    systemRequirementsList[4].textContent = 'Karnel Linux 2.6+';

    dimensionWeight[0].textContent = 'Height: 3.90 in (99 mm), Width: 2.36 in (60 mm), Depth: 1.54 in (39 mm)';
    dimensionWeight[1].textContent = 'Weight (dengan baterai): 2.65 oz (75.2 g)';
    inTheboxContentProduct[0].textContent = '1 Mouse';
    inTheboxContentProduct[1].textContent = 'Nano Receiver';
    inTheboxContentProduct[2].textContent = '1 AA battery (pra-install)';
    inTheboxContentProduct[3].textContent = 'Buku Panduan';
}

function prolinkCarCharger(){
    titleProductNav.textContent = 'PROLINK – Car Charger - PCC33502 - Hitam';
    
    imgPreview.src = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/26/2e313087-0039-44e5-b8c2-3f34a42e80e1.jpg';
    penjelasanProduct.textContent = `Pengisi Daya Mobil 3 Port Prolink PCC33502 35W dengan IntelliSense dilengkapi dengan 3 port pengisian daya, memungkinkan pengguna mengisi daya hingga 3 perangkat secara bersamaan dengan output pengisian gabungan 35W.`;
    fiturOfProductList[0].textContent = `PENGISIAN KECEPATAN TINGGI`;
    fiturOfProductList[1].textContent = `INTELLISENSE`;
    fiturOfProductList[2].textContent = `AMAN DAN TERPERCAYA`;
    fiturOfProductList[3].textContent = `KOMPATABILITAS LEBAR`;
    fiturDescriptOfProduct[0].textContent = `4X Lebih cepat dari charger konvensional.`;
    fiturDescriptOfProduct[1].textContent = `Mendeteksi dan secara otomatis mendistribusikan jumlah arus pengisian yang tepat untuk perangkat Anda yang terhubung.`;
    fiturDescriptOfProduct[2].textContent = `Perlindungan Lanjutan terhadap tegangan berlebih, suhu berlebih, arus berlebih, beban berlebih, dan korsleting.`;
    fiturDescriptOfProduct[3].textContent = `Kompatibel dengan semua model mobil arus utama pasar.`;

    priceNumber.innerHTML = `Rp. 175,000`;

    daya.textContent = `DAYA ARUS LISTRIK:`;
    technicalSpexList[0].innerHTML = `MEMASUKKAN: DC 12V-24V`;
    technicalSpexList[1].innerHTML = `KELUARAN:
    USB Type A 2.0 5V / 2.4A (Maks, Setiap Port)
    Pengisian Cepat USB Tipe A 3.0 3.6V-6.5V / 3A, 6.5V-9V / 2A, 9V-12V / 1.5A (maks 18W)`;
    technicalSpexList[2].remove();
    technicalSpexList[3].remove();
    technicalSpexList[4].remove();
    technicalSpexList[5].remove();
    systemRequirementsTitle.textContent = 'ADVANCE PROTECTION:'
    systemRequirementsList[0].textContent = 'Perlindungan Tegangan Berlebih'
    systemRequirementsList[1].textContent = 'Perlindungan Suhu Berlebih';
    systemRequirementsList[2].textContent = 'Lebih dari Perlindungan Saat Ini';
    systemRequirementsList[3].textContent = 'Perlindungan Sirkuit Pendek';
    systemRequirementsList[4].textContent = 'Perlindungan Kelebihan Beban';

    presetDimensionWeightChangeAValue('69,5 x 45 x 27mm (hanya produk) 87 x 30 x 119.9mm (dengan kotak)','36,5g (hanya produk) 65g (dengan kotak)')
    inTheboxContentProduct[0].textContent = '1 x PCC33502 35W 3-Port Car Charger dengan IntelliSense';
    inTheboxContentProduct[1].textContent = '1 x Panduan Pengguna + GARANSI RESMI LOKAL 1 TAHUN';
    inTheboxContentProduct[2].remove();
    inTheboxContentProduct[3].remove();
}

function pwmProlinkMouse(titleProductIndex, imgProductIndex, penjelasanProductIndex){
    titleProductNav.textContent = titleProductIndex;
    imgPreview.src = imgProductIndex;
    priceNumber.textContent = 'Rp. 90,000'
    
    penjelasanProduct.textContent = penjelasanProductIndex;
    fiturOfProductList[0].textContent = 'Kenyamanan Ekstrim:';
    fiturOfProductList[1].textContent = 'Kontrol dan Presisi:';
    fiturOfProductList[2].textContent = 'Penghemat Energi:';
    fiturOfProductList[3].remove();

    fiturDescriptOfProduct[0].textContent = 'Selalu siap. Biarkan penerima-nano tersambung ke laptop Anda - mouse Anda selalu siap digunakan. Penerima nano ultra kecil. Hampir tidak terlihat saat plug-in';
    fiturDescriptOfProduct[1].textContent = 'Scrolling sangat cepat, terbang melalui dokumen panjang dengan kecepatan tinggi dengan hampir tanpa gesekan roda gulir. Tombol DPI yang Dapat Disesuaikan Cukup tekan tombol DPI untuk memilih kecepatan kursor pilihan Anda 800/1200 / 1600DPI.';
    fiturDescriptOfProduct[2].textContent = 'Masa pakai baterai lebih lama: Hingga 12 bulan (atau lebih lama dengan sakelar Nyala / Mati). Mode Tidur: Bangunkan mouse dari Mode Tidur dengan mengklik tombol apa saja.';
    fiturDescriptOfProduct[3].remove();

    technicalSpexList[0].innerHTML = 'Buttons 4';
    technicalSpexList[1].innerHTML = 'Sensor Optical';
    technicalSpexList[2].innerHTML = 'DPI Resolution 800/1200/1600 DPI';
    technicalSpexList[3].innerHTML = 'Interface USB';
    technicalSpexList[4].innerHTML = 'USB Report Rate 125Hz';
    technicalSpexList[5].innerHTML = 'FPS 2400 times/sec';

    systemRequirementsList[0].remove();
    systemRequirementsList[1].textContent = 'Windows 8/10';
    systemRequirementsList[2].textContent = 'Mac OS X 10.10 or later';
    systemRequirementsList[3].textContent = 'Linux® kernel 2.6+';
    systemRequirementsList[4].remove();

    presetDimensionWeightChangeAValue('Dimension 107mm x 58.5mm x 36.8mm (product only)', 'Weight 56g (product only)');

    inTheboxContentProduct[0].textContent = '1 x PMW6007 - Wireless Optical Mouse';
    inTheboxContentProduct[1].textContent = '1 x USB Receiver';
    inTheboxContentProduct[2].textContent = '1 x AA Alkaline Battery';
    inTheboxContentProduct[3].textContent = '1 x User Manual';
}

function fiturTambahan(){
    const ListFiturTambahan = document.createElement('li');
    const desFiturTambahan = document.createElement('p');
    const styleTambahan = 'fitur-produk-list mt-2'
    ListFiturTambahan.textContent = 'Wide Compatibility';
    ListFiturTambahan.className= styleTambahan;
    desFiturTambahan.textContent = `Mono-01 V5 bukan hanya dipergunakan untuk Ponsel, tetapi bisa saja digunakan di Tablet/iPad, Laptop, PC dll.`;
    desFiturTambahan.className = 'fitur-product-deskripsi';
    ListFiturTambahan.appendChild(desFiturTambahan);
    return ListFiturTambahan;
}

function hippoEarphone(){
    titleProductNav.textContent = 'HIPPO - Bluetooth Earphone - Mono 01 V5 - Hitam'
    imgPreview.src = 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/3/25/a3fbbfea-b844-48c0-94df-b33148060d0b.jpg.webp?ect=4g'
    penjelasanProduct.textContent = `HIPPO - Bluetooth Earphone - Mono 01 V5`;
    fiturOfProductList[0].textContent = `Bluetooth 5.0`;
    fiturOfProductList[1].textContent = `IPX4 Anti Cipratan Air`;
    fiturOfProductList[2].textContent = `Noice Reduce / Peredam Suara`;
    fiturOfProductList[3].textContent = 'Voice Assistant';
    fiturDescriptOfProduct[0].textContent = `Dengan mengadopsi Bluetooth 5.0 membuat koneksi menjadi lebih stabil dibandingkan dengan versi dibawah 5.0, konsumsi baterai menjadi lebih lebih kecil.`;
    fiturDescriptOfProduct[1].textContent = `IPX4 membuat perangkat Mono-01 menjadi tahan terhadap percikan air dari segala arah serta mencegah debu masuk kedalam perangkat.`;
    fiturDescriptOfProduct[2].textContent = `Peredam suara dari Mono-01 V5 bermanfaat untuk menekan kebisingan dari percapakan telepon (Baik suara yang dikirim atau yang didengarkan). Sangat cocok digunakan pada tempat yang penuh kebisingan terutama saat anda mengendarai Sepeda Motor.`;
    fiturDescriptOfProduct[3].textContent = 'Voice Assistant dalam Mono-01 V5 membantu Anda memerintah Ponsel Anda melalui Suara, misalnya dalam iPhone ada “SIRI” dan Android ada “GOOGLE ASSISTANT”. Jenis perintah yang bisa dilakukan beragam, misalnya pemutaran lagu, Peta, Reminder, Telepon dan masih banyak yang bisa dilakukan.';

    let percob = fiturOfProduct.appendChild(fiturTambahan())
    console.log(percob);
    
    technicalSpexList[0].textContent = `Bluetooth : Versi 5.0`;
    technicalSpexList[1].textContent = `Luas Transmisi : 10 Meter`;
    technicalSpexList[2].textContent = `Pemutaran Musik : 4 Hours (80% Volume)`;
    technicalSpexList[3].textContent = `Percakapan : 4 Hours (80% Volume)`;
    technicalSpexList[4].textContent = `Line-by-line scrollingInput : Micro USB`;
    technicalSpexList[5].textContent = `Bat : 70 mAh. Lama Pengisian : Sekitar 1.5 Jam`;

    removeSystemRequirementsList();

    removeDimensionWeightList();

    dimensionWeight[0].textContent = 'Height: 3.90 in (99 mm), Width: 2.36 in (60 mm), Depth: 1.54 in (39 mm)';
    dimensionWeight[1].textContent = 'Weight (dengan baterai): 2.65 oz (75.2 g)';
    inTheboxContentProduct[0].textContent = 'Headset';
    inTheboxContentProduct[1].textContent = 'Extra Earbud';
    inTheboxContentProduct[2].textContent = 'Ear Hook';
    inTheboxContentProduct[3].textContent = 'Kabel Micro, Buku Panduan + Garansi : 12 Bulan';
}

function fiturTypeCtambahan(){
    const nilonTitle = document.createElement('li');
    nilonTitle.textContent = 'Nilon Dikepang:';
    nilonTitle.className = 'fitur-produk-list mt-2';
    const koilKaret = document.createElement('li');
    koilKaret.textContent = 'Pereda ketegangan:';
    koilKaret.className = 'fitur-produk-list mt-2';
    const compatibility = document.createElement('li');
    compatibility.textContent = 'Kompatibilitas Universal:';
    compatibility.className = 'fitur-produk-list mt-2';
    const lenghtCable = document.createElement('li');
    lenghtCable.textContent = 'Panjang Ditambahkan:';
    lenghtCable.className = 'fitur-produk-list mt-2';
    const connectorC = document.createElement('li');
    connectorC.textContent = 'Konektor C yang Dapat Dibalik:';
    connectorC.className = 'fitur-produk-list mt-2';
    const nilonP = document.createElement('p');
    nilonP.textContent = 'Kabel nilon yang dikepang memastikan keandalan dan daya tahan dengan eksterior anyaman yang mencegah robek dan berjumbai dari penggunaan sehari-hari(5x lebih tahan lama daripada kabel biasa).';
    nilonP.className = 'fitur-produk-deskripsi';
    const koilKaretP = document.createElement('p');
    koilKaretP.textContent = 'Koil karet tambahan yang kuat namun fleksibel untuk membantu melepaskan ketegangan dan tekanan, sekaligus memperkuat sambungan antara kabel dan konektor untuk mencegah kerusakan yang mudah.';
    koilKaretP.className = 'fitur-produk-deskripsi';
    const compatibilityP = document.createElement('p');
    compatibilityP.textContent = 'Kabel USB C-to-C standar dengan mudah mendukung perangkat Tipe-C – dari ponsel dan laptop.';
    compatibilityP.className = 'fitur-produk-deskripsi';
    const lenghtCableP = document.createElement('p');
    lenghtCableP.textContent = 'Dua kali panjang kabel standar kami (2m) sehingga Anda dapat menyambungkan dan mengisi daya perangkat Anda di dalam mobil, di nakas, dan banyak lagi.';
    lenghtCableP.className = 'fitur-produk-deskripsi';
    const connectorCP = document.createElement('p');
    connectorCP.textContent = 'Antarmuka USB-C standar yang baru adalah konektor reversibel yang mudah digunakan yang memungkinkan Anda menghubungkan kabel ke perangkat Anda ke segala arah.';
    connectorCP.className = 'fitur-produk-deskripsi';

    nilonTitle.appendChild(nilonP);
    koilKaret.appendChild(koilKaretP);
    compatibility.appendChild(compatibilityP);
    lenghtCable.appendChild(lenghtCableP);
    connectorC.appendChild(connectorCP);
    nilonTitle.appendChild(koilKaret);
    nilonTitle.appendChild(compatibility);
    nilonTitle.appendChild(lenghtCable);
    nilonTitle.appendChild(connectorC);
    return nilonTitle;
}

function presetPreviewProlinkCableType_C (){
    titleProductNav.innerHTML = 'PROLINK – Charge Cable – GCC10001 - Hitam';
    
    imgPreview.src = imgProduct[2].src;
    priceNumber.textContent = 'Rp. 150,000'
    penjelasanProduct.textContent = `PROLINK – Charge Cable – GCC10001 - Hitam`;
    
    fiturOfProductList[0].textContent = `Transfer Data Berkecepatan Cepat:`;
    fiturOfProductList[1].textContent = `Pengisian Sangat Cepat:`;
    fiturOfProductList[2].textContent = `Chip Cerdas E-Mark:`;
    fiturOfProductList[3].remove();
    fiturDescriptOfProduct[0].textContent = `Transfer file, audio, dan video dengan kecepatan transfer 480 Mbps yang luar biasa.`;
    fiturDescriptOfProduct[1].textContent = `Mendukung daya keluaran Pengiriman Daya 100W yang mengesankan yang memungkinkan pengisian daya laptop yang kuat dan stabil, dan pengisian cepat QC4.0 untuk perangkat yang kompatibel dengan USB-C.`;
    fiturDescriptOfProduct[2].textContent = `Mencapai kecepatan transfer data yang lebih cepat dan transmisi daya yang lebih tinggi secara bersamaan tanpa mengorbankan keselamatan secara keseluruhan`;
    fiturDescriptOfProduct[3].remove()
    technicalSpexList[0].innerHTML = `Konektor kabel : C ke C`;
    technicalSpexList[1].innerHTML = `Bahan : Aluminium Alloy Shell Casing + Nylon Braided`;
    technicalSpexList[2].textContent = `Kecepatan Transfer Data: 480 Mbps`;
    technicalSpexList[3].textContent = `Arus Keluaran : 5A, 100W`;
    technicalSpexList[4].textContent = `Panjang : 2 Meter`;
    technicalSpexList[5].textContent = `Fitur : Power Delivery 3.0, Qualcomm 4.0`;
    ;
}

function presetCarChargerHippoLance2(){
    titleProductNav.innerHTML = 'HIPPO – Car Charger – Lance 2 - Hitam'
    priceNumber.textContent = 'Rp. 90,000'
    
    imgPreview.src = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/26/69f29f68-33ab-43f8-8f68-7f5f3f9b002e.jpg';
    penjelasanProduct.innerHTML = 'Lance 2 Car Charger hadir dengan 2 USB port yang dapat Anda gunakan untuk mencharger smartphone secara bersamaan. Produk ini memiliki sebuah port USB yang dapat digunakan untuk mengisi baterai smartphone dan tablet PC di mobil dan juga terdapat kabel USB Type C untuk mengisi baterai smartphone yang menggunakan USB Type C'
    fiturOfProductList[0].innerHTML = 'Output 36W';
    fiturDescriptOfProduct[0].innerHTML = 'Car Charger ini dapat mengeluarkan output hingga 36w sehingga dapat mengisi baterai smartphone maupun tablet dengan sangat cepat.';
    fiturOfProductList[1].innerHTML = 'Power Delivery 3.0';
    fiturDescriptOfProduct[1].innerHTML = 'Dengan teknologi PD 3.0 proses pengisian daya menggunakan kabel USB Type C akan sangat cepat dan menghemat waktu Anda.';
    fiturOfProductList[2].innerHTML = 'Quick Charge 3.0';
    fiturDescriptOfProduct[2].innerHTML = 'Charger ini dapat mengisi perangkat smartphone lebih cepat dibanding charger lainnya. Smartphone yang Anda gunakan harus mendukung fitur Quick charge 3.0 untuk dapat menggunakan teknologi ini secara efektif.';
    fiturOfProductList[3].innerHTML = 'Car Cigarette Plug';
    fiturDescriptOfProduct[3].innerHTML = 'Car charger ini memiliki port cigarette plug sebagai sumber listriknya, sangat ramah lingkungan dan tidak mudah panas.';
    technicalSpexList[4].remove();
        technicalSpexList[5].remove();
        systemRequirementsList[0].innerHTML = 'input DC12V-24V';
        systemRequirementsList[1].innerHTML = 'Output USB DC3.6V-6V/3A,6V-9V/2A9V-12V/1.5A (Max)';
        systemRequirementsList[2].innerHTML = 'Output Type C DC5V/3A,9V/2A,12V/1.5A (Max)';
        systemRequirementsList[3].remove();
        systemRequirementsList[4].remove();

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

function clickPreviewBox() {
    productPreview.classList.add('muncul');
}

function closePreviewBox() {
    closeWindow.addEventListener('click', ()=>{
        refreshPage();
        if(productPreview.classList.contains('muncul')) {
            productPreview.classList.remove('muncul');
        }
    });
}

function buyThisItems(linkDestination, seconds){
    AddToCartBTN.addEventListener('click', ()=>{
        AddToCartBTN.classList.add(`${BGblack}`);
    if (BGblack === 'bg-black') {
        console.log('Klik');
        AddToCartBTN.classList.add('text-white');
        iconCART.classList.replace('fa-cart-shopping', `${checkCommentClass}`);
        iconCHECK.classList.add('text-green-500');
        AddedSUCCESS_Notif.classList.toggle('show-success');
        cartTEXT.textContent = `Barang dipilih`;

        var destinationUrl = linkDestination;
        setTimeout(function() {
            window.location.href = destinationUrl;
          }, 3000); // 3000 milliseconds = 3 seconds

        let timer = setInterval(()=>{
            seconds--;
            countdown.textContent = seconds;

            if (seconds == 0) {
                clearInterval(timer);
                console.log('beralih...')
            }
        },1000);

        setTimeout(() => {
            AddedSUCCESS_Notif.classList.remove('show-success');
        }, 3000);
    }})
}

// Menangani klik OK pada alert

function refreshPage() {
      // Merefresh halaman
      window.location.reload();
  window.onload();
  };
  
