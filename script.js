document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", () => {

            const isOpen = menu.classList.toggle("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Fecha o menu ao clicar em uma opção */

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       FILTROS DO CARDÁPIO
       ===================================================== */

    const filters = document.querySelectorAll(".filter");
    const products = document.querySelectorAll(".product-card");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            /* Remove o estado ativo dos outros botões */

            filters.forEach(button => {
                button.classList.remove("active");
            });


            /* Ativa o botão clicado */

            filter.classList.add("active");


            /* Descobre a categoria escolhida */

            const selectedCategory =
                filter.getAttribute("data-filter");


            /* Mostra ou esconde os produtos */

            products.forEach(product => {

                const productCategory =
                    product.getAttribute("data-category");


                if (
                    selectedCategory === "all" ||
                    selectedCategory === productCategory
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });


    /* =====================================================
       BOTÕES "+"
       ===================================================== */

    const addButtons =
        document.querySelectorAll(".add-btn");


    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            const originalText = button.textContent;

            button.textContent = "✓";

            button.style.transform = "scale(1.12)";


            setTimeout(() => {

                button.textContent = originalText;

                button.style.transform = "";

            }, 700);

        });

    });


    /* =====================================================
       ANIMAÇÃO SUAVE DOS CARDS
       ===================================================== */

    const cards =
        document.querySelectorAll(".product-card");


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        card.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        observer.observe(card);

    });

});