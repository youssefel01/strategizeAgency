// Hamburger menu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

// Add an event listener to each menu item to close the menu when clicked
const menuItems = mainMenu.querySelectorAll('li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', close);
});

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.classList.add('menu-open');
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.classList.remove('menu-open'); 
    mainMenu.style.top = '-100%';
}
// For Receiving emails
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

const serviceID = "service_k8qfw6i";
const templateID = "template_3aba4a5";

emailjs
    .send(serviceID, templateID, params)
    .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("your message sent successfully")
    })
    .catch((err)=> console.log(err));
}

