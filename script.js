document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MENU MOBILE
    ================================= */

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", function () {

            menu.classList.toggle("active");

        });

    }


    /* ================================
       FILTROS DO CARDÁPIO
    ================================= */

    const filters = document.querySelectorAll(".filter");
    const products = document.querySelectorAll(".product-card");


    filters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            const category = this.getAttribute("data-filter");


            /* Ativa somente o botão clicado */

            filters.forEach(function (button) {

                button.classList.remove("active");

            });

            this.classList.add("active");


            /* Filtra os produtos */

            products.forEach(function (product) {

                const productCategory =
                    product.getAttribute("data-category");


                if (
                    category === "all" ||
                    category === productCategory
                ) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });

});