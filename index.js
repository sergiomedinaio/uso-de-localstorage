const actualizarTitulo = () => {
    const app = document.querySelector("#app");
    const html = app.parentNode.parentElement
    const head = html.children[0]
    const title = head.children[4];
    title.innerHTML = "Jugando con localStorage";
}