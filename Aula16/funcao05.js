function fatorial(n){
    //se o parametro for igual a 1, 1 fatorial é 1.
    //Se não, o parametro vai multiplicar, até chegar a um, ele por ele menos 1
    if(n==1){
        return 1;
    }else{
        return n * fatorial(n-1);
    }
}
console.log(fatorial(5))