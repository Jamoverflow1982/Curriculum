const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    console.log(email, nombre);

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const enviado = document.getElementById("enviado");
    const error = document.getElementById("error");
    let formularioOk = true;

    if (nombre === "") {
        errorNombre.classList.remove("d-none");
    } else {
        errorNombre.classList.add("d-none");
    }
    if (email === "") {
        errorEmail.classList.remove("d-none");
    } else {
        errorEmail.classList.add("d-none");
    }

    if (nombre === "" || email === "") {
        formularioOk = false;
    }

    if (formularioOk) {
        formulario.submit();
        console.log("formulario enviado");
        enviado.classList.remove("d-none");
        error.classList.add("d-none");
    } else {
        e.preventDefault();
        console.log("formulario no enviado");
        enviado.classList.add("d-none");
        error.classList.remove("d-none");
    }

    const limpiar = document.getElementById("limpiar");
    limpiar.addEventListener("click", () => {
        enviado.classList.add("d-none");
        error.classList.add("d-none");
        errorEmail.classList.add("d-none");
        errorNombre.classList.add("d-none");
    });
});
