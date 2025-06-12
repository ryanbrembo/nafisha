/* TOGLE DARK LIGHT
document.getElementById("toggleDarkMode").addEventListener("click", () => {

 let body = document.body;
 let icon = document.getElementById('theme-icon');

 body.classList.toggle('light');

 if (body.classList.contains('light')) {
    icon.classList.remove('ph-sun-dim');
    icon.classList.add('ph-moon');
 } else {
    icon.classList.remove('ph-moon');
    icon.classList.add('ph-sun-dim');
 }

});
*/

//

// ubah navbar ketika di scroll 100px
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
        navbar
            .classList
            .add('scrolled');
    } else {
        navbar
            .classList
            .remove('scrolled');
    }
})

//efek card hilang timbul ketika di scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry
                .target
                .classList
                .add('show');
            entry
                .target
                .classList
                .remove('hidden');
        } else {
            entry
                .target
                .classList
                .remove('show');
            entry
                .target
                .classList
                .add('hidden');
        }
    });
}, {
    threshold: 0.7 //ketika 70% dari layar card muncul
});

cards.forEach(card => {
    observer.observe(card);
});

document
    .getElementById('hamburger')
    .addEventListener('click', () => {


        const navbar = document.getElementById('navbar');

        if (navbar.classList.contains('collapsed')) {
            navbar.classList.add('expands');
            navbar.classList.remove('collapsed');
            document.body.style.overflow = "auto";
        } else {
            navbar.classList.remove('expands');
            navbar.classList.add('collapsed');
            document.body.style.overflow = "hidden";
        }

/*

        const hiden = document.querySelector('.collapsed');
     
        if (hiden.style.display === "none" || hiden.style.display ==="") {
            hiden.style.display = "block";
            document.body.style.overflow = "hidden";
            
        }  else {
            hiden.style.display = "none";
            document.body.style.overflow = "auto";
        }
         
        */
    });
