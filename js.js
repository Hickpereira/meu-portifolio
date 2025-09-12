document.querySelectorAll('.menu-desktop a, .btn-contato a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste conforme necessário
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const abrirMenu = document.querySelector(".abrir-menu");
    const menuMobile = document.querySelector(".menu-mobile");
    const overlayMenu = document.querySelector(".overlay-menu");

    function fecharMenu() {
        menuMobile.classList.remove("abrimenu");
        overlayMenu.style.display = "none";
        document.removeEventListener("click", fecharMenu);
    }

    abrirMenu.addEventListener("click", function(event) {
        // Impede que o clique no botão se propague e feche o menu imediatamente
        event.stopPropagation();
        
        // Se o menu já estiver aberto, fecha-o
        if (menuMobile.classList.contains("abrimenu")) {
            fecharMenu();
        } else {
            // Abre o menu
            menuMobile.classList.add("abrimenu");
            overlayMenu.style.display = "block";
            // Após abrir, adiciona o listener que fecha o menu com clique em qualquer lugar
            setTimeout(() => {
                document.addEventListener("click", fecharMenu);
            }, 0);
        }
    });
});



function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `
*Nome:* ${nome}
*Email:* ${email}
*Celular:* ${celular}
*Mensagem:* ${mensagem}`;

    const numeroDestino = '5511948569636';
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  }