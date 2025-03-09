//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];


// Adicionar nomes
function adicionarAmigo() {
    let input = document.getElementById('amigo')
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome valido.');
    }

    listaDeAmigos.push(nome);
    input.value = '';
    atualizarLista()
}


function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
        
    });
}


// Sorteio Aleatorio
// O amigo secreto sorteado e:
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Nao ha nomes registrados para serem sorteados!');
    }

    let indiceSorteio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceSorteio];

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${nomeSorteado}</strong></li>`
}