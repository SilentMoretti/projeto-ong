export function configurarEventos(pessoas, salvarPessoas) {
    const botao = document.getElementById("botao");
    const mensagem = document.getElementById("mensagem");
    const formulario = document.getElementById("formulario");
    const nome = document.getElementById("nome");
    const lista = document.getElementById("lista");

    botao.addEventListener("click", function() {
        mensagem.textContent = "O botão foi clicado!";
    });

    nome.addEventListener("input", function() {
        mensagem.textContent = "Você está digitando: " + nome.value;
    });

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        if (nome.value === "") {
            mensagem.textContent = "Digite seu nome.";
        } else {
            pessoas.push(nome.value);

            salvarPessoas(pessoas);

            lista.innerHTML += "<p>Nome: " + nome.value + "</p>";

            mensagem.textContent = "Nome salvo com sucesso!";

            nome.value = "";
        }
    });
}