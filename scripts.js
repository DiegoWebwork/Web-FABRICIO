function clicou() {
    console.log("clicou no botao");
}
const botao = document.querySelector(".botao");
botao.addEventListener("click", () => {
    clicou()
}
)
