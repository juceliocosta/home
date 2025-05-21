document.addEventListener('DOMContentLoaded', () => {
    lidarComEnvio();
});

function lidarComEnvio() {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("#usuario, #senha, #nome, #email, #cpf, #idade, #tel, #cep, #tipo-logradouro, #logradouro, #bairro, #cidade, #estado");

    form.addEventListener("submit", (enviar) => {
        inputs.forEach((input) => {

            const label = input.previousElementSibling;

            spanValidarCampoVazio(label, input, enviar);
            
            spanValidarUsuario(label, input, enviar);
            
            spanValidarSenha(label, input, enviar);
            
            spanValidarEmail(label, input, enviar);
        })
    });
}

function removerSpansFilhos(elemento) {
    elemento.querySelectorAll('span').forEach(span => {
        span.remove()
    });
}

function spanValidarCampoVazio(elementoPai, input, enviar) {
    removerSpansFilhos(elementoPai)
    if (input.value.trim() === "") {
        elementoPai.innerHTML += "<span>requerido</span>";
        enviar.preventDefault();
    } 
}

function spanValidarUsuario(elementoPai, input, enviar) {
    if (input.getAttribute("id") === "usuario") {
        if (input.value.length <= 5) {
            removerSpansFilhos(elementoPai)
            elementoPai.innerHTML += "<span>requer mais de 5 caracteres</span>";
            enviar.preventDefault();
        }
    }
}

function spanValidarSenha(elementoPai, input, enviar) {
    const senhaValida = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{9,}$/;

    if (input.getAttribute("id") === "senha") {
        if (!senhaValida.test(input.value)) {
            removerSpansFilhos(elementoPai)
            elementoPai.innerHTML += "<span> requer mais de 8 caracteres contendo: números, letras e símbolos</span>";
            enviar.preventDefault();
        }
    }
}

function spanValidarEmail(elementoPai, input, enviar){
    const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (input.getAttribute("id") === "email") {
        if (!emailValido.test(input.value)) {
            removerSpansFilhos(elementoPai)
            elementoPai.innerHTML += "<span>requer um email válido</span>";
            enviar.preventDefault();
        } 
    }
}