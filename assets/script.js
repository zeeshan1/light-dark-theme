const switchBtn = document.querySelector('.switch input');
let getTheme = localStorage.getItem('theme')
getTheme = (getTheme == null || getTheme == 'light') ? 'light' : 'dark'


function switchTheme(theme) {
    if (theme == 'light') {
        document.body.classList.remove('dark-theme')
        localStorage.setItem('theme', 'light')
        switchBtn.checked = false

    } else {
        document.body.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark')
        switchBtn.checked = true;
    }
}
switchTheme(getTheme)
switchBtn.addEventListener('change', function() {
    if (this.checked) {
        switchTheme('dark')
    } else {
        switchTheme('light')
    }
})