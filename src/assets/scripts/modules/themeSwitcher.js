export default function(){
    const triggerButton = document.getElementById('toggleTheme');
    const body = document.getElementsByTagName("body")[0];
    const iconTheme = document.querySelectorAll('.ws-header-theme')[0];
    const storedTheme = localStorage.getItem('theme');

    // if has stored theme, then set data-theme with current theme or light as default
    if(storedTheme){
        body.setAttribute('data-theme', storedTheme);
        storedTheme == 'light' ? iconTheme.classList.remove("dark-mode-on") : iconTheme.classList.add("dark-mode-on");
    }
    else{
        body.setAttribute('data-theme', "light");
    };

    // trigger button, to set them with current value
    triggerButton.addEventListener('click', () => {
        let currentTheme = '';

        if(body.getAttribute('data-theme') == 'light'){
            currentTheme = 'dark';
            body.setAttribute('data-theme', "dark");
            iconTheme.classList.add("dark-mode-on");
        }
        else{
            currentTheme = 'light';
            body.setAttribute('data-theme', "light");
            iconTheme.classList.remove("dark-mode-on");
        }

        localStorage.setItem('theme', currentTheme);
    });
}