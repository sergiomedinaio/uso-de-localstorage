const actualizarTitulo = (titulo) => {
    const app = document.querySelector("#app");
    const html = app.parentNode.parentElement
    const head = html.children[0]
    const title = head.children[4];
    title.innerHTML = titulo;
}

const consultarTituloDeLaPagina = () => {
    const titulo = localStorage.getItem("tituloPagina");
    const contadorDeIngresos = +localStorage.getItem("contadorDeIngresos");
    if(!contadorDeIngresos) {
        actualizarTitulo("Es la primera vez que entraste");
        localStorage.setItem("tituloPagina", "Ya entraste antes");
        localStorage.setItem("contadorDeIngresos", "1");
    } else {
        localStorage.setItem("contadorDeIngresos", `${contadorDeIngresos + 1}`);
        actualizarTitulo(titulo);
    }
}

const crearModal = () => {
    const app = document.querySelector("#app");
    const body = app.parentNode;
    const modalContainer = document.createElement("div");
    body.append(modalContainer);

}
consultarTituloDeLaPagina();
crearModal();