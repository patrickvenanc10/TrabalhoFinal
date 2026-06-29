// Botão de alternar tema

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", trocarTema);

function trocarTema() {
    document.body.classList.toggle("light");
}

// Ano automático no rodapé

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();

// Animação dos cards ao aparecer na tela

const cards = document.querySelectorAll(".card");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observador.observe(card);

});