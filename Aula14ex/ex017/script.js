function calcular(){
    let num = document.querySelector('#txtnum');//pega o valor do input
    let tab = document.getElementById('seltab');//pega o select
    //verifica se o input não está vazio
    if(!num.value){
        window.alert('[ERRO] Digite um valor na caixa');
    }else{
        let vnum = Number(num.value);//converte o valor do input para number
        tab.innerHTML = '';//limpa o select
        //loop para encrementar i
        for(let i=0; i<=10; i++){
            let item = document.createElement('option');//criamos um elemento de html
            item.text = `${i}X${vnum}=${vnum*i}`; //o texto do item que criamos
            item.value = `tab${i}`;//valor do option que criamos
            tab.appendChild(item);//adicionamos no select o option
        }
    }
}


