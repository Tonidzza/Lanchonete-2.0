document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MENU MOBILE
       ================================ */

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".menu a");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", function () {

            const isOpen = menu.classList.toggle("active");

            menuBtn.classList.toggle("active", isOpen);

            menuBtn.setAttribute("aria-expanded", isOpen);

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );

        });

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("active");
                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            });

        });

    }


    /* ================================
       FILTROS DO CARDÁPIO
       ================================ */

    const filters = document.querySelectorAll(".filter");
    const products = document.querySelectorAll(".product-card");

    filters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            const category = this.dataset.filter;

            /* Remove o ativo de todos */

            filters.forEach(function (button) {
                button.classList.remove("active");
            });

            /* Ativa o botão clicado */

            this.classList.add("active");


            /* Filtra os produtos */

            products.forEach(function (product) {

                const productCategory =
                    product.dataset.category;

                if (
                    category === "all" ||
                    category === productCategory
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });


    /* ================================
       MENU ATIVO DURANTE O SCROLL
       ================================ */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const observerOptions = {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    };

    const sectionObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    menuLinks.forEach(function (link) {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + currentId
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        }, observerOptions);


    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

});