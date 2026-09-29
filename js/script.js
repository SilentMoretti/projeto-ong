import { carregarPessoas, salvarPessoas } from "./armazenamento.js";
import { configurarEventos } from "./eventos.js";

let pessoas = carregarPessoas();

const lista = document.getElementById("lista");

pessoas.forEach(function(pessoa) {
    lista.innerHTML += "<p>Nome: " + pessoa + "</p>";
});

configurarEventos(pessoas, salvarPessoas);