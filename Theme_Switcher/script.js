
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {

//     button.addEventListener("click", () => {

//         const theme = button.id;

//         document.body.className = theme;

//         localStorage.setItem("theme", theme);

//     });

// });

// // Load saved theme

// const savedTheme = localStorage.getItem("theme");

// if(savedTheme){
//     document.body.className = savedTheme;
// }else{
//     document.body.className = "light";
// }


// Project flow 

// Website Open Hui
//         │
//         ▼
// localStorage Check Hua
//         │
//         ├── Theme Mila?
//         │       │
//         │      Haan
//         │       │
//         │       ▼
//         │  Wahi Theme Laga Do
//         │
//         └── Nahi
//                 │
//                 ▼
//           Light Theme Laga Do

// User Button Dabata Hai
//         │
//         ▼
// Theme Ka Naam Mila
//         │
//         ▼
// Body Ki Class Change Hui
//         │
//         ▼
// Theme localStorage Me Save Hui
//         │
//         ▼
// Refresh Ke Baad Bhi Wahi Theme Aayegi



// const buttons = document.querySelectorAll('.buttons')

// buttons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const target = e.target.id

//         if (target === 'light') {
//             document.body.style.backgroundColor = 'white'
//         }

//         if (target === 'dark') {
//             document.body.style.backgroundColor = 'grey'
//         }

//         if (target === 'blue') {
//             document.body.style.backgroundColor = 'lightblue'
//         }

//         if (target === 'green') {
//             document.body.style.backgroundColor = 'lightgreen'
//         }

//     })
// })



const buttons = document.querySelectorAll('.buttons')

function changeTheme(theme) {
    if (theme === 'light') {
        document.body.style.backgroundColor = 'white'
    }
    else if (theme === 'dark') {
        document.body.style.backgroundColor = 'grey'
    }
    else if (theme === 'blue') {
        document.body.style.backgroundColor = 'lightblue'
    }
    else if (theme === 'green') {
        document.body.style.backgroundColor = 'lightgreen'
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target.id
        changeTheme(target)

        localStorage.setItem('theme', target)
    })
})

const savedTheme = localStorage.getItem('theme')

if (savedTheme) {
    changeTheme(savedTheme)
}
else{
    changeTheme('light')
}