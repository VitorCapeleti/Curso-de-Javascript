function contar(){
    let inc = document.querySelector('#txtini')
    let fim = document.querySelector('#txtfim')
    let pas = document.querySelector('#txtpas')
    let res = document.getElementById('res')

        if(inc.value.length == 0 ||  fim.value.length == 0 ||  pas.value.length == 0){
            res.innerHTML = 'Impossível contar!'
            window.alert('[ERRO]Confira se os dados foram colocados corretamente')           
        }else {
            res.innerHTML = 'Contando: <br>'
            let vinc = Number(inc.value)   
            let vfim = Number(fim.value)
            let vpas = Number(pas.value)
            if(vpas<=0){
                window.alert('Passo inválido! Considerando PASSO = 1')
                vpas = 1
            }      
            if(inc.value>fim.value){
            //contagem regressiva
            for(let c = vinc; c>=vfim; c -= vpas){
                    //result += (` -> ${c}`)
                    res.innerHTML += ` ${c} \u{1F449}`

            }
        }else{
            //contagem crescente
            for(let c = vinc; c<=vfim; c += vpas){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        }

}

