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
    threshold: 0.6 //ketika 50% dari layar card muncul
});

cards.forEach(card => {
    observer.observe(card);
});

document
    .getElementById('hamburger')
    .addEventListener('click', () => {


        const navbar = document.getElementById('navbar');

        if (navbar.classList.contains('expands')) {
            navbar.classList.add('collapsed');
            navbar.classList.remove('expands');
            document.body.style.overflow = "auto";
            navbar.classList.remove('nav-mobile');
        } else {
            navbar.classList.remove('collapsed');
            navbar.classList.add('expands');
            document.body.style.overflow = "hidden";
        }


    });


let typed = new Typed('#name', {
    strings: ["AR23Ezio Squad dan PushbikeCorner"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: false,
});


document.querySelectorAll('.custom-details .summary').forEach(summary => {
      summary.addEventListener('click', () => {
        const container = summary.parentElement;
        const wrapper = container.querySelector('.table-wrapper');

        container.classList.toggle('active');

        if (container.classList.contains('active')) {
          wrapper.style.maxHeight = wrapper.scrollHeight + "px";
        } else {
          wrapper.style.maxHeight = "0";
        }
      });
    });



    



    
