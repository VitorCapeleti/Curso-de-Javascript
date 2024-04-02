function fatorial(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat;
}
console.log(fatorial(5))
/*Além do paramentro iniciamos uma variável para multiplicar e guardar o valor
Ou seja, no for pegamos valor do parametro, e adicionamos ele a outra variável
e decrementamos ele, até chegar a dois, pq um numero X 1 é 1, depois do loop
retornamos a variável que armezenou a multiplicação fatorial*/