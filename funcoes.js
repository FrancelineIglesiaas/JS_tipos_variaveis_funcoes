//Funçoes//

//let x = '';
//console.log(x);

//x = 'oi'; 

 // Definindo uma função chamada imprimeTexto que aceita um parâmetro 'texto' e o imprime no console.
 function imprimeTexto(texto) {
    console.log(texto);
    }
    
    // Chamando a função imprimeTexto com diferentes argumentos.
    
    imprimeTexto('Oi');
    imprimeTexto('Outro texto');
    
    //podemos utilizar uma função varias vezes em nosso codigo//
    //3 formas de escrever funções//
    // Exemplo de função sem parâmetros que retorna a soma de 2 + 2.
    
    function soma() {
    //const resultado = 2 + 2;//
    return 2 + 2; //volta o valor para fora do bloco quando chamado// return na ultima linha//
    }
    // Chamando a função soma e passando seu resultado para a função imprimeTexto.
    imprimeTexto(soma());
    

//caso de funções matemáticas (Math em inglês), alguns exemplos são:

//Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

//Math.round(4.3) retorna 4
//Math.round(3.85) retorna 4
//Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
//Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

//Math.ceil(5.2) retorna 6
//Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

//Math.floor(5.2) retorna 5
//Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

//Math.trunc(4.3) retorna 4
//Math.trunc(4.8) retorna 4
//Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

//Math.pow(4 , 2) retorna 4^2 = 16
//Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
//Math.sqrt() : Retorna a raiz quadrada de um número.

//Math.sqrt(64) retorna 8
//Math.min(): Retorna o menor valor entre os argumentos.

//Math.min(0, 150, 30, 20, -8, -200) retorna -200
//Math.max(): Retorna o maior valor entre os argumentos.

//Math.max(0, 150, 30, 20, -8, -200) retorna 150
//Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

//Math.random() retorna 0.7456916270759015
//Math.random() retorna 0.15449802102729304
//Math.random() retorna 0.4214269561951203