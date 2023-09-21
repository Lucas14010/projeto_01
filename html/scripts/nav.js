const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
const navList = document.querySelector('.nav_list');

mobileMenuIcon.addEventListener('click', () => {
    navList.classList.toggle('show_menu');
}); 
