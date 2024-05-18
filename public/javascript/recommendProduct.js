const queryGroup = {
    laptopBox: document.querySelectorAll('.card-laptop'),
    showsSpek: document.querySelectorAll('.show-spek'),
    descriptionProduct: document.querySelectorAll('.deskripsi'),
    stockBox: document.querySelectorAll('.stock'),
};
const { laptopBox: lb, showsSpek: ss, descriptionProduct: dp, stockBox: sb } = queryGroup;

ss.forEach((item, i) => {
    item.addEventListener('click', () => {
        dp[i].classList.toggle('down-description');
        sb[i].classList.toggle('putih');
    });
});

const faplus = document.querySelectorAll('.fa-plus');
faplus.classlist.add('whislist);
let check = 'fa-check';
faplus.addEventListener('click', () => {
    if(faplus.classList.contains('.whislist'){
        faplus.classList.replace('fa-plus' , `${check}`
)}
});
