const imagens = [];
for (let i = 1; i <= 7; i++) {
  imagens.push(`${i}.png`);
}

let index = 0;
const imageElement = document.getElementById("image");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("music");

// Toca a música assim que a página carrega
window.addEventListener("DOMContentLoaded", () => {
  music.play().catch(() => {
    // Caso o navegador bloqueie autoplay, podemos pedir clique
    console.log("Autoplay bloqueado, espere interação do usuário.");
  });
});

nextBtn.addEventListener("click", () => {
  if (index === imagens.length - 1) {
    window.location.href = "parte.html";
    return;
  }

  imageElement.style.opacity = 0;
  setTimeout(() => {
    index++;
    imageElement.src = imagens[index];
    imageElement.style.opacity = 1;
  }, 300);
});
