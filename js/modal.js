const certificados = document.getElementById("certificados");
const python = document.getElementById("python");
const js = document.getElementById("js");
const modalPython = document.getElementById("modalPython");
const modalJS = document.getElementById("modalJS");

python.addEventListener("click", () => {
    modalPython.classList.remove("d-none");
    modalJS.classList.add("d-none");
});
js.addEventListener("click", () => {
    modalPython.classList.add("d-none");
    modalJS.classList.remove("d-none");
});