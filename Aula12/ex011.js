var idade = 64;
console.log(`Você tem ${idade}`)
if(idade<16){
    console.log('Não vota')
} else if(idade < 18 || idade > 65){
        console.log('Voto opcional')
} else {
        console.log('Voto obrigatório')
    
}
var media = 9.9;
console.log(`Sua média é ${media}`)
if(media<5){
    console.log('Reprovado')
} else if(media >= 5 && media < 6){
        console.log('Recuperação')
} else {
        console.log('Aprovado') 
}