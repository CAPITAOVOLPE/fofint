// Array com as imagens (1.png até 7.png)
const imagens = [];
for (let i = 1; i <= 7; i++) {
  imagens.push(`${i}.png`);
}

let index = 0;
const imageElement = document.getElementById("image");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("music");

let musicStarted = false;      // Para iniciar música apenas uma vez
let isTransitioning = false;   // Para bloquear cliques durante a transição

nextBtn.addEventListener("click", () => {
  // Inicia música no primeiro clique
  if (!musicStarted) {
    music.play().catch(() => console.log("Erro ao iniciar música"));
    musicStarted = true;
  }

  // Bloqueia cliques durante a transição
  if (isTransitioning) return;
  isTransitioning = true;

  // Se estiver na última imagem, redireciona
  if (index === imagens.length - 1) {
    window.location.href = "parte.html";
    return;
  }

  // Transição suave
  imageElement.style.opacity = 0;
  setTimeout(() => {
    index++;
    imageElement.src = imagens[index];
    imageElement.style.opacity = 1;
    isTransitioning = false; // libera o clique
  }, 300); // duração da transição (300ms)
});
