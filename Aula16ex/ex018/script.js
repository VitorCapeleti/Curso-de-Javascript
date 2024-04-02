let num = document.querySelector('#txtnum');
let vetor = document.querySelector('#vet');
let res = document.querySelector('#res');
let numbers = [];
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, numbers)){  
        res.innerHTML = '';
        numbers.push(Number(num.value));
        
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        vetor.appendChild(item);       

    }else{
        alert('[ERRO] Insira um número entre 1 e 100');
    }
}
function finalizar(){
    //document.write(numbers);
    if(numbers.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
    let soma = 0;
    let media = 0;
    for(let i=0; i<numbers.length; i++){
        soma = soma + numbers[i];
    }
    media = soma/numbers.length;
    res.innerHTML = `<p>Ao todo temos ${numbers.length} números cadastrados</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, numbers )}</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${Math.min.apply(null, numbers )}</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma} </p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media} </p>`;
    }
}