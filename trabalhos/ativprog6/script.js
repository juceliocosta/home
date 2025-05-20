const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input-group:not([hidden])");

document.addEventListener('DOMContentLoaded', () => {
    lidarComEnvio();
    aplicarMascaraEmCPF();
    aplicarMascaraEmTelefone();
    aplicarMascaraEmCEP();
});

function lidarComEnvio() {
    form.addEventListener("submit", (enviar) => {
        enviar.preventDefault();
        inputs.forEach((input) => {
            //acessar o elemento anterior do input
            const label = input.previousElementSibling;

            const span = label.querySelector('span');
            if (input.value.trim() === "" && !span) {
                label.innerHTML += "<span> requerido *</span>";
            }
            if (input.value.trim() !== "" && span) {
                span.remove();
            }
        })

    });
}

function aplicarMascaraEmCPF() {
    let inputCPF = document.querySelector("#cpf")
    inputCPF.addEventListener("input", () => {
        let cpfComValoresValidos = inputCPF.value.replace(/\D/g, "");

        cpf = cpfComValoresValidos.substring(0, 11);

        // Aplica a máscara
        if (cpf.length > 9) {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
        } else if (cpf.length > 6) {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        } else if (cpf.length > 3) {
            cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
        }
        inputCPF.value = cpf;
    });
}

function aplicarMascaraEmTelefone() {
    let inputTel = document.querySelector("#tel");
    inputTel.addEventListener("input", () => {
        let telefoneComValoresValidos = inputTel.value.replace(/\D/g, "");

        telefone = telefoneComValoresValidos.substring(0, 11);

        if (telefone.length > 10) {
            telefone = telefone.replace(/(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (telefone.length > 6) {
            telefone = telefone.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
        } else if (telefone.length > 2) {
            telefone = telefone.replace(/(\d{2})(\d{1,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/(\d{0,2})/, "($1");
        }

        inputTel.value = telefone;
    });
}

function aplicarMascaraEmCEP(cep) {
    let inputCep = document.querySelector("#cep");
    inputCep.addEventListener("input", () => {
        let cep = inputCep.value.replace(/\D/g, "");

        if (cep.length > 5) {
            cep = cep.replace(/(\d{5})(\d{1,3}).*/, "$1-$2");
        } else {
            cep = cep.replace(/(\d{0,5})/, "$1");
        }

        inputCep.value = cep;
    });
}



//evitar o envio se ouver algum input-group vazio
//avizar que existem elementos vazios

//informar quais elementos estão vazios
//validar os inputs especificos
