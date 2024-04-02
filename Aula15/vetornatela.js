let num = [5, 8, 1, 9, 3, 4];
num.sort();
console.log(num);
/*for(let i=0; i<num.length; i++){
    console.log(`A posição ${i} possui valor ${num[i]}`);
}*/
//For usado para arrays e objects abaixo:
for(let pos in num){
    console.log(`A posição ${pos} tem o val0r ${num[pos]}`)
}