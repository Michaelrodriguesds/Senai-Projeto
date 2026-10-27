// Seleciona o elemento HTML onde o resultado será exibido
const tela = document.getElementById('resultado');

// Guarda o sinal da operação escolhida (ex: '+'). Vazio = nenhuma operação pendente
let operacao = '';

// Guarda o primeiro número da conta, já convertido para número
let valorA = null;

// Guarda o segundo número da conta, lido da tela no momento do =
let valorB = null;

// Guarda o resultado da conta
let resultadoConta = null;

// Indica se o próximo número digitado é o primeiro dígito do segundo número
let digitandoSegundo = false;

// Seleciona todos os elementos HTML que possuem a classe 'numero'
const numero = document.getElementsByClassName('numero');

// Seleciona o botão HTML que possui a classe 'limpar'
const botaoLimpar = document.querySelector('.limpar');

// Seleciona todos os elementos HTML que possuem a classe 'ponto'
const addPonto = document.getElementsByClassName('ponto');

// Seleciona os botões com a classe 'operacao' (/, X, -, +, =).
// Todas as variáveis guardam a MESMA coleção; só o índice muda.
// Ordem: [0] = /, [1] = X, [2] = -, [3] = +, [4] = =
const addMais = document.getElementsByClassName('operacao');
const addMenos = document.getElementsByClassName('operacao');
const addDividi = document.getElementsByClassName('operacao');
const addMult = document.getElementsByClassName('operacao');
const botaoIgual = document.getElementsByClassName('operacao');


// Função responsável por tratar o clique em um botão numérico
function mostranume(e) {

    // Lê o texto atual da tela e remove espaços das extremidades
    let textoAtual = tela.textContent.trim();

    // Guarda o texto do botão numérico que foi clicado
    let numClick = e.target.textContent;

    // Se existe uma operação pendente, estamos digitando o segundo número
    if (operacao) {

        // O primeiro dígito do segundo número substitui a tela
        if (digitandoSegundo) {
            tela.textContent = numClick;

            // Os próximos dígitos devem ser juntados
            digitandoSegundo = false;

        } else {
            // Junta o dígito ao que já está na tela
            tela.textContent = textoAtual + numClick;
        }

    } else {

        // Verifica se a tela está mostrando somente o número zero
        if (textoAtual === "0") {

            // Substitui o zero pelo número clicado
            tela.textContent = numClick;

        } else {

            // Junta o texto atual com o número clicado
            tela.textContent = textoAtual + numClick;
        }
    }
}


// Função responsável por calcular o resultado ao clicar em =
function calcularResultado() {

    // Se não existe operação pendente, o = não faz nada
    if (operacao === '') {
        return;
    }

    // Lê o segundo número da tela e converte para número
    valorB = Number(tela.textContent.trim());

    // Divisão por zero: mostra a mensagem, limpa a operação e encerra a função
    if (operacao === '/' && valorB === 0) {
        tela.textContent = "OP INVALIDA";
        operacao = '';
        digitandoSegundo = false;
        return;
    }

    // Escolhe a conta de acordo com o sinal
    if (operacao === '-') {
        resultadoConta = valorA - valorB;
    } else if (operacao === 'X') {
        resultadoConta = valorA * valorB;
    } else if (operacao === '/') {
        resultadoConta = valorA / valorB;
    } else {
        resultadoConta = valorA + valorB;
    }

    // Mostra o resultado na tela
    tela.textContent = resultadoConta;

    // A operação já foi feita, então ela deixa de estar pendente
    operacao = '';
    digitandoSegundo = false;
}


// Função responsável por limpar a calculadora
function limparTela() {

    // Volta a tela para zero
    tela.textContent = "0";

    // Apaga todo o estado da conta
    operacao = '';
    valorA = null;
    valorB = null;
    resultadoConta = null;
    digitandoSegundo = false;
}


// Função responsável por adicionar o ponto decimal na tela
function mostrarPonto() {

    // Lê o texto atual da tela e remove espaços das extremidades
    let textoAtual = tela.textContent.trim();

    // Verifica se já existe um ponto decimal no texto
    if (textoAtual.includes('.')) {

        // Encerra a função para impedir a adição de outro ponto
        return;
    }

    // Adiciona um ponto decimal ao final do texto atual
    tela.textContent = textoAtual + '.';
}


// Função responsável por guardar a operação clicada e o primeiro número
function mostrarOperacao(e) {

    // Guarda o sinal clicado (ex: '+', '-', 'X', '/')
    operacao = e.target.textContent;

    // Guarda o número que está na tela como primeiro número, já convertido
    valorA = Number(tela.textContent.trim());

    // Avisa que o próximo número digitado é o segundo número da conta
    digitandoSegundo = true;
}


// Adiciona um evento de clique a cada botão numérico
// Todos chamam a mesma função, mostranume
numero[0].addEventListener('click', mostranume);
numero[1].addEventListener('click', mostranume);
numero[2].addEventListener('click', mostranume);
numero[3].addEventListener('click', mostranume);
numero[4].addEventListener('click', mostranume);
numero[5].addEventListener('click', mostranume);
numero[6].addEventListener('click', mostranume);
numero[7].addEventListener('click', mostranume);
numero[8].addEventListener('click', mostranume);
numero[9].addEventListener('click', mostranume);

// Botão C limpa a calculadora
botaoLimpar.addEventListener('click', limparTela);

// Botão de ponto decimal
addPonto[0].addEventListener('click', mostrarPonto);

// Botões de operação guardam o sinal e o primeiro número
addMais[3].addEventListener('click', mostrarOperacao);
addMenos[2].addEventListener('click', mostrarOperacao);
addDividi[0].addEventListener('click', mostrarOperacao);
addMult[1].addEventListener('click', mostrarOperacao);

// Botão = faz a conta e mostra o resultado
botaoIgual[4].addEventListener('click', calcularResultado);
