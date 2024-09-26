const pessoas = [
    { id:3,nome:'Luiz'},
    { id:2,nome:'Maria'},
    {id:1,nome:'Helena'},
]

/*const novasPessoas={}
for (const pessoa of pessoas){
    const{id}=pessoa
    novasPessoas[id]={...pessoa}//{...pessoa} = pessoa{id,nome}
}
*/

//PARA CONSERTAR O PROBLEMA:
const novasPessoas= new Map()
for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id ,{...pessoa}) //(chave, valor)
}
console.log(novasPessoas)
console.log(novasPessoas.get(2))
//console.log(novasPessoas[2]) dá undefined

//desestruturando tudo usansdo o array gerado pela iteração de map
for (const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier,id,nome)
}