@'
# 🧮 Calculadora

Calculadora web feita com **HTML, CSS e JavaScript**, desenvolvida como projeto do curso de **Desenvolvedor de Sistemas do SENAI**.

🔗 **[Acesse a calculadora online](https://michaelrodriguesds.github.io/Senai-Projeto/)**

---

## ✨ Funcionalidades

- Digitação de números e ponto decimal
- Soma, subtração, multiplicação e divisão
- Tratamento de divisão por zero (`OP INVALIDA`)
- Botão `C` para limpar a tela
- Segundo `=` não recalcula a conta

## 🛠️ Tecnologias

- **HTML5**: estrutura da página
- **CSS3**: aparência e layout em grade (`grid`)
- **JavaScript**: lógica, eventos e manipulação do DOM

## 📁 Estrutura

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura dos botões e da tela |
| `estilo.css` | Cores, espaçamentos e organização visual |
| `javascript.js` | Lógica da calculadora |

## 🧠 O que aprendi

- Selecionar elementos do DOM por `id`, classe e coleção
- Usar `addEventListener` e `e.target.textContent` para reagir a cliques
- Diferenciar variáveis locais e globais, com `let` e `const`
- Guardar estado (operação pendente, primeiro número) entre cliques
- Usar `if`, `else if` e `else`, inclusive aninhados
- Converter texto em número com `Number()` e limpar espaços com `trim()`
- Depurar com `console.log` e interpretar mensagens de erro

## 🐛 Erros enfrentados

1. **Nome duplicado**: uma variável e uma função com o mesmo nome causaram `SyntaxError`.
2. **Escopo**: uma variável declarada dentro de uma função não existia em outra.
3. **Coleção x elemento**: `getElementsByClassName` devolve uma coleção, e foi preciso acessar o índice correto.
4. **Espaços do HTML**: o `textContent` trazia quebras de linha, que quebravam comparações com `"0"`.
5. **Concatenação**: `"8" + "3"` resultou em `83`, e não em `11`.
6. **Segundo `=`**: a conta era refeita porque a operação não era apagada após o cálculo.
7. **Divisão por zero**: a conta resultava em `Infinity`, e a mensagem de erro era sobrescrita pela linha que mostrava o resultado.

## 🚀 Como executar

Baixe o projeto, abra o `index.html` no navegador ou acesse o link acima.
'@ | Set-Content README.md -Encoding utf8

git add README.md
git commit -m "Atualiza README com relatório do projeto"
git push
