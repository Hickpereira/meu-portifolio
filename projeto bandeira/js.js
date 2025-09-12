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







const slider = document.getElementById('slider');
const slides = Array.from(document.querySelectorAll('.continent'));
const total = slides.length;
const slideWidth = slides[0].offsetWidth + 20;

let index = Math.floor(total / 2); // Começa do meio

function updateSlide(animate = true) {
  const containerWidth = document.querySelector('.slider-container').offsetWidth;
  const offset = index * slideWidth - (containerWidth / 2 - slideWidth / 2);

  slider.style.transition = animate ? 'transform 0.5s ease' : 'none';
  slider.style.transform = `translateX(-${offset}px)`;

  slides.forEach(el => el.classList.remove('active'));
  if (slides[index]) slides[index].classList.add('active');
}

function next() {
  if (index < total - 1) {
    index++;
    updateSlide();
  }
}

function prev() {
  if (index > 0) {
    index--;
    updateSlide();
  }
}

window.addEventListener('resize', () => updateSlide(false));
window.addEventListener('load', () => updateSlide(false));





function atualizarSobre(name, img, text) {
  document.getElementById('sobre-titulo').textContent = name;
  document.getElementById('sobre-img').src = img;
  document.getElementById('sobre-texto').textContent = text;
}

slides.forEach(el => {
  el.addEventListener('click', () => {
    const name = el.dataset.name;
    const img = el.dataset.img;
    const text = el.dataset.text;

    atualizarSobre(name, img, text);

    // Rolagem suave até a seção
    document.getElementById('Sobre').scrollIntoView({ behavior: 'smooth' });
  });
});








function buscarBandeira() {
  const pais = document.getElementById("countryInput").value.trim();
  const resultado = document.getElementById("resultado");

  if (pais === "") {
    resultado.innerHTML = "<p>Digite o nome de um país.</p>";
    return;
  }

  fetch(`https://restcountries.com/v3.1/name/${pais}`)
    .then(res => res.json())
    .then(data => {
      const country = data[0];
      resultado.innerHTML = `
  <img src="${country.flags.png}" alt="Bandeira de ${country.name.common}">
  <div id="info">
    <p class="info-box">Capital | ${country.capital}</p>
    <p class="info-box">Região | ${country.region}</p>
  </div>
`;
    })
    .catch(() => {
      resultado.innerHTML = "<p>País não encontrado.<br> Verifique o nome digitado.</p>";
    });
}








  const botao = document.getElementById('modoDarkBtn');
const body = document.body;

botao.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    botao.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  } else {
    botao.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
});