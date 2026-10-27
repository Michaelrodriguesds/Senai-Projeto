// Seleciona o elemento HTML onde o resultado será exibido
const tela = document.getElementById('resultado');

// Guarda o sinal da operação escolhida (ex: '+'). Começa vazio: nenhuma operação pendente
let operacao = '';

// Guarda o primeiro número da conta. Começa como null: ainda não existe
let valorA = null;

// Guarda o segundo número da conta, lido da tela no momento do =
let valorB = null;

// Guarda o resultado da conta, para ser mostrado na tela
let resultadoConta = null;

// Seleciona todos os elementos HTML que possuem a classe 'numero'
const numero = document.getElementsByClassName('numero');

// Seleciona o botão HTML que possui a classe 'limpar'
const botaoLimpar = document.querySelector('.limpar');

// Seleciona todos os elementos HTML que possuem a classe 'ponto'
const addPonto = document.getElementsByClassName('ponto');

// Seleciona todos os botões com a classe 'operacao' (/, X, -, +, =).
// Todas as variáveis abaixo guardam a MESMA coleção; só o índice muda.
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

    // Se existe uma operação pendente, o número digitado substitui a tela
    if (operacao) {
        tela.textContent = numClick;

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
function calcularResultado () {

    // Se não existe operação pendente, o = não faz nada
    if (operacao === '') {
        return;
    }

    // Lê o segundo número da tela e converte para número
    valorB = Number(tela.textContent.trim());

    // valorA foi guardado como texto no clique em operação, então converte aqui
    valorA = Number(valorA);

    // Divisão por zero: mostra a mensagem, limpa a operação e encerra a função
    if (operacao === '/' && valorB === 0) {
        tela.textContent = "OP INVALIDA";
        operacao = '';
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
}


// Função responsável por limpar a calculadora
function limparTela() {

    // Substitui o conteúdo atual da tela pelo número zero
    tela.textContent = "0";
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

    // Guarda o sinal clicado (ex: '+', '-', 'X', '/') em operacao
    operacao = e.target.textContent;

    // Guarda o número que está na tela como primeiro número da conta
    valorA = tela.textContent.trim();

    // Mostra o valor guardado no console, para conferir
    console.log(valorA);
    console.log(operacao);
}


// Adiciona um evento de clique ao primeiro botão numérico
// Quando o botão é clicado, chama a função mostranume
numero[0].addEventListener('click', mostranume);

// Adiciona um evento de clique ao segundo botão numérico
numero[1].addEventListener('click', mostranume);

// Adiciona um evento de clique ao terceiro botão numérico
numero[2].addEventListener('click', mostranume);

// Adiciona um evento de clique ao quarto botão numérico
numero[3].addEventListener('click', mostranume);

// Adiciona um evento de clique ao quinto botão numérico
numero[4].addEventListener('click', mostranume);

// Adiciona um evento de clique ao sexto botão numérico
numero[5].addEventListener('click', mostranume);

// Adiciona um evento de clique ao sétimo botão numérico
numero[6].addEventListener('click', mostranume);

// Adiciona um evento de clique ao oitavo botão numérico
numero[7].addEventListener('click', mostranume);

// Adiciona um evento de clique ao nono botão numérico
numero[8].addEventListener('click', mostranume);

// Adiciona um evento de clique ao décimo botão numérico
numero[9].addEventListener('click', mostranume);

// Adiciona um evento de clique ao botão C para limpar a tela
botaoLimpar.addEventListener('click', limparTela);

// Adiciona um evento de clique ao botão de ponto decimal
// O índice [0] acessa o primeiro elemento da coleção addPonto
addPonto[0].addEventListener('click', mostrarPonto);

// Botões de operação: todos chamam mostrarOperacao, que guarda o sinal
// Por enquanto, - / X também guardam o sinal, mas só a soma está implementada
addMais[3].addEventListener('click', mostrarOperacao);
addMenos[2].addEventListener('click', mostrarOperacao);
addDividi[0].addEventListener('click', mostrarOperacao);
addMult[1].addEventListener('click', mostrarOperacao);

// O botão = chama calcularResultado, que faz a conta e mostra o resultado
botaoIgual[4].addEventListener('click', calcularResultado);
