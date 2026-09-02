/* =================================
   MENU MOBILE
================================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    const isOpen = menu.classList.toggle("active");

    menuBtn.classList.toggle("active", isOpen);

    menuBtn.setAttribute("aria-expanded", isOpen);

    document.body.classList.toggle("menu-open", isOpen);

});


/* =================================
   FECHAR MENU AO CLICAR
================================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");

    });

});


/* =================================
   FILTRO DO CARDÁPIO
================================= */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const category = filter.dataset.filter;


        /* Remove ativo */

        filters.forEach(function (button) {

            button.classList.remove("active");

        });


        /* Ativa selecionado */

        filter.classList.add("active");


        /* Filtra */

        products.forEach(function (product) {

            const productCategory = product.dataset.category;

            if (productCategory === category) {

                product.style.display = "block";

                product.style.animation = "none";

                requestAnimationFrame(function () {

                    product.style.animation =
                        "cardAppear 0.5s ease both";

                });

            } else {

                product.style.display = "none";

            }

        });

    });

});


/* =================================
   FUNDO INTERATIVO
================================= */

const backgroundItems =
    document.querySelectorAll(".bg-food");


let scrollPosition = 0;

let ticking = false;


function updateBackground() {

    scrollPosition = window.scrollY;


    backgroundItems.forEach(function (item, index) {

        const speed =
            0.08 + (index * 0.018);

        const direction =
            index % 2 === 0 ? 1 : -1;

        const movement =
            scrollPosition * speed * direction;


        item.style.transform =
            `translate3d(0, ${movement}px, 0)`;

    });


    ticking = false;

}


window.addEventListener("scroll", function () {

    if (!ticking) {

        window.requestAnimationFrame(
            updateBackground
        );

        ticking = true;

    }

});


/* =================================
   FECHAR MENU AO REDIMENSIONAR
================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth >= 768) {

        menu.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    }

});