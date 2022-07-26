// map sempre terá o mesmo tamanho do array original podendo alterar seus valores

// dobre os números
//const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 8, 9, 15, 22];
//const numerosEmDobro = numeros.map((valor)=>valor * 2)
//console.log(numerosEmDobro)

 // Para cada elemento:
 // retorne apenas uma string com o nome da pessoa 
 // remova apenas a chave "nome" do objeto
 // adicione uma chave id em cada objeto


 const Pessoas = [
    {nome: 'bruno', idade: 23},
    {nome: 'juju', idade: 43},
    {nome: 'tutu', idade: 33},
    {nome: 'larissa', idade: 63},
    {nome: 'leticia', idade: 83},
    {nome: 'Patrick', idade: 13}
]

const nomes = Pessoas.map((obj)=>obj.nome)
const idade = Pessoas.map((obj)=>({idade: obj.idade}))
const ComIds = Pessoas.map(function(obj, indice) {
    const newObj= {...obj} // deixando de usar o objeto original, usando '...' pois caso contrário estaria modificando o obj original 'pessoas'
    newObj.id = indice
    return newObj
})
console.log(ComIds)



