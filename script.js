function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver no modo light, adicionar a imagem light
    img.setAttribute(
      "src",
      "https://raw.githubusercontent.com/maykbrito/devlinks/main/assets/avatar-light.png"
    )
  } else {
    // Se não estiver no modo light, manter a imagem normal
    img.setAttribute(
      "src",
      "https://raw.githubusercontent.com/maykbrito/devlinks/main/assets/avatar.png"
    )
  }
}
