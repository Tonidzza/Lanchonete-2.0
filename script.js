const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


menuBtn.addEventListener("click", function() {

    menu.classList.toggle("active");

});
// =================================
// FILTRO DO CARDÁPIO
// =================================

const filters = document.querySelectorAll(".filter");

const products = document.querySelectorAll(".product-card");


filters.forEach(function(filter) {

    filter.addEventListener("click", function() {

        const category = filter.dataset.filter;


        // Remove o ativo dos outros botões

        filters.forEach(function(button) {

            button.classList.remove("active");

        });


        // Ativa o botão selecionado

        filter.classList.add("active");


        // Filtra os produtos

        products.forEach(function(product) {

            if (product.dataset.category === category) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});