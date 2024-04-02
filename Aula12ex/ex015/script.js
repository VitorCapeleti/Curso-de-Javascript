function verificar(){
    var data = new Date()//criamos a funcionalidade de pegar a data
    var ano = data.getFullYear()//pegamos o ano atual com a funcionalidade data
    var fano = document.getElementById('txtano')//var que pegou input que é para digitar a idade
    var res = document.querySelector('#res')//var que pegou a div de resultado
    if(fano.value.length == 0 || fano.value > ano){//verificação de dados
        window.alert('[ERRO] Verifique os dados novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')//var que pega os radio inputs, pelo nome
        var idade = ano - Number(fano.value)//var que calcula a idadde, fazendo o ano atual menos o digitado
        var genero = ''//uma var string vazia, que receberá o genero
        var img = document.createElement('img')//criamos o tag img dentro dessa variável, inteiramente pelo javascript
        img.setAttribute('id', 'foto')//definimos um id para a imagem
        img.style.width = '350px'//eu defini um tamano mais razoável para a imagem
        if(fsex[0].checked){//se o primeiro radio input estiver selecionado
            genero = 'Homem'//var genero recebe Homem
            if(idade >= 0 && idade < 10){//condições para idade
                //Criança
                img.setAttribute('src', 'bebe-m.png')//adicionamos no src da img, a foto de bebe, os outros seguem o mesmo padrão, de acordo com a idade
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'//alinhamos a div res para o centro
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos`//imprimimos genero e idade
        res.appendChild(img)//vai adicionar depois de ser criado, ou seja, é adicionado ao res o img criado
    }
}