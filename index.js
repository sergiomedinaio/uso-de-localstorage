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
        crearModal();
    } else {
        localStorage.setItem("contadorDeIngresos", `${contadorDeIngresos + 1}`);
        actualizarTitulo(titulo);
    }
}

const crearModal = () => {
    const app = document.querySelector("#app");
    const body = app.parentNode;
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", "modal");
    const modalDialog = document.createElement("div");
    modalDialog.setAttribute("class", "modal-dialog");
    body.append(modalContainer);
    modalContainer.append(modalDialog);
    const modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");
    modalDialog.append(modalContent);
    const modalBody = document.createElement("div")
    modalBody.setAttribute("class", "modal-body");
    modalDialog.append(modalBody);
    const parrafo = document.createElement("p")
    parrafo.innerText = "ESTA FUNCIONANDO EL MODAL";
    modalBody.append(parrafo);
    
    modalContainer.style.display = "block";
}
consultarTituloDeLaPagina();