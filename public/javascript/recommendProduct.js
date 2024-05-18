const whislist = document.querySelectorAll('.whislist');
const loveIcon = document.querySelectorAll('.love-icon');
whislist.forEach(index => {
    index.addEventListener('click', () => {
        if(index.classList.contains('fa-regular')){
            index.classList.remove('fa-plus');
            index.classList.add('fa-check');
        } else if(index.classList.contains('fa-check')){
            index.classList.remove('fa-check');
            index.classList.add('fa-plus');
        }
    });
})

loveIcon.forEach(indexlove => {
    indexlove.addEventListener('click', () => {
        if(indexlove.classList.contains('fa-plus')){
            indexlove.classList.remove('fa-regular');
            indexlove.classList.add('fa-solid');
        } else if(index.classList.contains('fa-solid')){
            indexlove.classList.remove('fa-solid');
            indexlove.classList.add('fa-regular');
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

