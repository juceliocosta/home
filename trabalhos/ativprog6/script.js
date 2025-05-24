document.addEventListener('DOMContentLoaded', () => {
    lidarComEnvio();
});

function lidarComEnvio() {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("#usuario, #senha, #nome, #email, #cpf, #idade, #tel, #cep, #tipo-logradouro, #logradouro, #bairro, #cidade, #estado");

    form.addEventListener("submit", (envio) => {
        inputs.forEach((input) => {

            valorVazio = input.value.trim() === "";
            inserirSpan(input, valorVazio, envio, "<span>requerido</span>")

            if(input.getAttribute("id") === "usuario"){
                menorQue5 = input.value.length <= 5;
                inserirSpan(input, menorQue5, envio, "<span>requer mais de 5 caracteres</span>");
            }

            if(input.getAttribute("id") === "senha"){
                const senhaValida = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{9,}$/;
                senhaInvalida = !senhaValida.test(input.value)
                inserirSpan(input, senhaInvalida, envio, "<span> requer mais de 8 caracteres contendo: números, letras e símbolos</span>");
            }

            if(input.getAttribute("id") === "email"){
                const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                emailInvalido = !emailValido.test(input.value);
                inserirSpan(input, emailInvalido, envio, "<span>requer mais de 5 caracteres</span>");
            }
        })
    });
}

function inserirSpan(input, condicao, envio, msgSpan){
    const elementoAnterior = input.previousElementSibling;

    elementoAnterior.querySelectorAll('span').forEach(span => {
        span.remove()
    });

    if (condicao) {
        elementoAnterior.innerHTML += msgSpan;
        envio.preventDefault();
    }
}