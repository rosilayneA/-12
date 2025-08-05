// Criando o corpo da página
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.height = "100vh";
document.body.style.overflow = "hidden";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(to bottom right, #ffe6f0, #ffccdd)";
document.body.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";

// Criando o botão inicial
const botao = document.createElement("button");
botao.textContent = "Pra você nunca se esquecer 💌";
botao.style.padding = "20px 40px";
botao.style.fontSize = "20px";
botao.style.backgroundColor = "#ff80aa";
botao.style.color = "white";
botao.style.border = "none";
botao.style.borderRadius = "30px";
botao.style.cursor = "pointer";
botao.style.boxShadow = "0 4px 15px rgba(255, 105, 180, 0.4)";
botao.style.transition = "transform 0.2s, box-shadow 0.2s";

// Hover efeito
botao.onmouseover = () => {
  botao.style.transform = "scale(1.05)";
  botao.style.boxShadow = "0 6px 20px rgba(255, 105, 180, 0.6)";
};
botao.onmouseout = () => {
  botao.style.transform = "scale(1)";
  botao.style.boxShadow = "0 4px 15px rgba(255, 105, 180, 0.4)";
};

// Mensagem escondida
const mensagem = document.createElement("div");
mensagem.textContent = "EU TE AMO PRA SEMPRE MOMO 🎀";
mensagem.style.marginTop = "30px";
mensagem.style.fontSize = "28px";
mensagem.style.color = "#d63384";
mensagem.style.display = "none";
mensagem.style.textAlign = "center";

// Quando clicar no botão
botao.onclick = () => {
  mensagem.style.display = "block";
  botao.disabled = true;
  botao.style.opacity = "0.6";
  botao.style.cursor = "default";
};

// Adicionando os elementos à tela
document.body.appendChild(botao);
document.body.appendChild(mensagem);

// Emojis fofos no movimento do mouse
let lastEmojiTime = 0;

document.body.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastEmojiTime < 80) return; // controla frequência
  lastEmojiTime = now;

  const emoji = document.createElement("div");
  const emojis = ["🎀", "🌼", "💖", "🌸", "✨", "🧸", "💗"];
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.position = "absolute";
  emoji.style.left = `${e.clientX}px`;
  emoji.style.top = `${e.clientY}px`;
  emoji.style.fontSize = `${16 + Math.random() * 16}px`;
  emoji.style.pointerEvents = "none";
  emoji.style.opacity = "1";
  emoji.style.transition = "transform 1s ease-out, opacity 1s ease-out";

  // Estado inicial
  emoji.style.transform = "translate(0, 0)";
  document.body.appendChild(emoji);

  // Força reflow antes de animar
  requestAnimationFrame(() => {
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = -60 - Math.random() * 20;
    emoji.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
    emoji.style.opacity = "0";
  });

  // Remover depois da animação
  setTimeout(() => emoji.remove(), 1000);
});

