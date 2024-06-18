// Nome : Multiples of 3 or 5 | URL : https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript | Enunciado Resumido :  
// fazer uma função que ache os valores multiplos de 3 e 5 de determiado numero e some eles
number = 10;
//numero aleatorio para exemplo


function solution(number) {
    let eq = 0

    for (i = 1; i < number; i++) {
        //testa se o numero for divisivel por 3 ou 5, e assim ve se ele é multiplo do mesmo para o fim do exercicio
        if ((i % 3) === 0 || (i % 5) === 0) {
            //soma da dos valores que passarem e adicionado o valor para a variavel
            eq += i
        }
    }
    return eq;
}

//teste
console.log(solution(number))