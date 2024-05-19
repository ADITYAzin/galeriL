const whislist = document.querySelectorAll('.whislist');
const loveIcon = document.querySelectorAll('.love-icon');
loveIcon.forEach((element)=>{
    element.addEventListener('click', () => {
        if (element.classList.contains('fa-regular')){
            element.classList.remove('fa-regular');
            element.classList.add('fa-solid');
        } else if (element.classList.contains('fa-solid')){
            element.classList.remove('fa-solid');
            element.classList.add('fa-regular');
        }
    });
})
whislist.forEach(index => {
    index.addEventListener('click', () => {
        if(index.classList.contains('fa-plus')){
            index.classList.remove('fa-plus');
            index.classList.add('fa-check');
        } else if(index.classList.contains('fa-check')){
            index.classList.remove('fa-check');
            index.classList.add('fa-plus');
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

