function abrirConvite() {
  // Toca a música de fundo
  const audio = document.getElementById("bg-music");
  audio.play();

  // Esconde a tela inicial
  document.getElementById("startScreen").classList.add("hidden");

  // Mostra a tela do convite
  const convite = document.getElementById("invitation");
  convite.classList.remove("hidden");

  // Confete animado
  confetti({
    particleCount: 400,
    spread: 200,
    origin: { y: 0.6 }
  });

  // Confete contínuo por alguns segundos
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function () {
    if (Date.now() > animationEnd) return clearInterval(interval);

    confetti({
      particleCount: 50,
      spread: 180,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 250);
}
