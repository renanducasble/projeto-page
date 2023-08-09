// FUNÇÃO PARA LIGAR E DESLIGAR O BOTÃO
function toggleMode() {
   const html = document.documentElement
   const avatarFoto = document.querySelector("#profile img")
   const fraseSemFoto = document.querySelector("#profile img")
   html.classList.toggle("light")

   /* LEIA A FRASE ABAIXO DA FUNÇÃO
    if (html.classList.contains("light")) {
    html.classList.remove("light")
    } else {
      html.classList.add("light")

    }
    */

   // JÁ EXISTE UMA FUNÇÃO BUILT-IN PARA FAZER TUDO ISSO, CHAMADA TOGGLE

   if (html.classList.contains("light")) {
      avatarFoto.setAttribute("src", "./assets/Avatar.png")
      fraseSemFoto.setAttribute("alt", "Outra resposta")
   } else {
      avatarFoto.setAttribute("src", "./assets/foto_facebook.jpg")
   }
}
