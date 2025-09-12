// --- Configuração da galeria de imagens ---
const imagens = [];
for (let i = 1; i <= 7; i++) imagens.push(`${i}.png`);

let index = 0;
const imageElement = document.getElementById("image");
const nextBtn = document.getElementById("nextBtn");
const contentDiv = document.getElementById("content");
const music = document.getElementById("music");

let isTransitioning = false;

// Próxima imagem / última imagem leva para emojis
nextBtn.addEventListener("click", () => {
  if (isTransitioning) return;
  isTransitioning = true;

  if (index === imagens.length - 1) {
    showEmojiGame();
    return;
  }

  imageElement.style.opacity = 0;
  setTimeout(() => {
    index++;
    imageElement.src = imagens[index];
    imageElement.style.opacity = 1;
    isTransitioning = false;
  }, 300);
});

// --- Função para mostrar o jogo dos emojis ---
function showEmojiGame() {
  contentDiv.innerHTML = `
    <h1>🔒 Complete a senha com os emojis e cores certas 🔒</h1>
    <div class="emoji-container">
      ${createEmojiBox("☠","Laranja")}
      ${createEmojiBox("😎","Cinza")}
      ${createEmojiBox("🦊","Ciano")}
      ${createEmojiBox("🙃","Vinho")}
      ${createEmojiBox("👻","Preto")}
      ${createEmojiBox("🤡","Azul")}
    </div>
    <div id="message" class="message">
      ✨💛 <strong>Oi, meu amor!</strong> 💛✨<br>
      Quero que você saiba que você é <strong>extremamente importante para mim</strong>.<br>
      Cada detalhe que fiz aqui foi com <strong>muito cuidado e carinho</strong>, pensando em você.<br>
      Eu te amo <strong>mil, milhões de vezes</strong>! 💖<br>
      E aqui vai a sua <strong>senha especial</strong>: <code>beijinhomomoh</code> 💌
    </div>
  `;

  const selects = document.querySelectorAll(".color-select");
  const message = document.getElementById("message");

  selects.forEach(select => {
    select.addEventListener("change", () => {
      let allCorrect = true;
      selects.forEach(s => {
        if (s.value !== s.dataset.correct) allCorrect = false;
      });
      message.style.display = allCorrect ? "block" : "none";
    });
  });
  isTransitioning = false;
}

// --- Função auxiliar para criar cada emoji com dropdown ---
function createEmojiBox(emoji, correctColor) {
  const colors = ["Preto","Cinza","Azul","Vinho","Ciano","Laranja"];
  const options = colors.map(c => `<option value="${c}">${c}</option>`).join("");
  return `
    <div class="emoji-box">
      <span class="emoji">${emoji}</span>
      <select class="color-select" data-correct="${correctColor}">
        <option value="">Escolha a cor</option>
        ${options}
      </select>
    </div>
  `;
}
