// const btn = document.querySelector('#themeBtn')

// btn.addEventListener('click', function(){
//     document.body.classList.toggle('dark')

//     if(document.body.classList.contains('dark')) {
//         btn.textContent = 'Light Mode'
//     } else {
//         btn.textContent = 'Dark Mode'
//     }
// })

const btn = document.querySelector('#themeBtn')

const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark') {
    document.body.classList.add('dark')
    btn.textContent = 'Light Mode'
}

btn.addEventListener('click', function () {
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
        btn.textContent = 'Light Mode'
    } else {
        localStorage.setItem('theme', 'light')
        btn.textContent = 'Dark Mode'
    }
})