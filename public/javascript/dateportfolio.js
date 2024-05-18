let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString(); // Example: "12/21/2023"
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Note: January is 0
let year = currentDate.getFullYear();

const update = document.getElementsByClassName('date');

for (var i = 0; i < update.length ; i++){
    update[i].textContent = 'Published By ADITYA ' + month + '/' + year;
}

