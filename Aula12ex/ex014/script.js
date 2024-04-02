function carregar(){
    var msg = window.document.getElementById('msg')//variavel para a div que contém o texto
    var img = window.document.querySelector('#imagem')//variavel para pegar a imagem que está dentro da div
    var data = new Date()//variavel para criar a funcionalidade de data
    var hora = data.getHours()//variavel para pegar a funcionalidade de data e definir as horas atuais da máquina
    
    msg.innerHTML = `Agora são ${hora} horas`//vai usar a div de mensagem que é a var msg, para imprimir a mensagem das horas
    //condições para as horas do dia
    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src = "manhacircle.png"//pega a imagem e substitui de acordo com a condição(dia)
        document.body.style.background = '#e2cd9f'//pega o background do body e muda a cor
    }else if(hora>=12 && hora < 18){
        //BOA TARDE
        img.src = "tardecircle.png"//pega a imagem e substitui de acordo com a condição(tarde)
        document.body.style.background = '#b9846f'//pega o background do body e muda a cor
    }else{
        //BOA NOITE
        img.src = "noitecircle.png"//pega a imagem e substitui de acordo com a condição(noite)
        document.body.style.background = '#515154'//pega o background do body e muda a cor
    }
}

