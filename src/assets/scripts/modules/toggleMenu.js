export default function(){
    const triggerButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('mainMenu');
    const body = document.getElementsByTagName('body')[0];
    triggerButton.addEventListener('click', () => {
        event.currentTarget.classList.toggle('ws-header-toggle_isActive');
        menu.classList.toggle('ws-menu_isActive');
        body.classList.toggle('noScroll');
    });
}