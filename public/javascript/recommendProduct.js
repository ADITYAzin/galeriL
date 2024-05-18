const whislist = document.querySelectorAll('.whislist');
whislist.forEach(index => {
    index.addEventListener('click', () => {
        if(index.classList.contains('fa-plus')){
            index.classList.remove('fa-plus');
            index.classList.toggle('fa-check');
        }
    });
})

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

