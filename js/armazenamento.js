export function carregarPessoas() {
    return JSON.parse(localStorage.getItem("pessoas")) || [];
}

export function salvarPessoas(pessoas) {
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
}