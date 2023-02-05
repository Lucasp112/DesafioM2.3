let compras = ["café", "suco", "laranja", "arroz", "leite"]
console.log(compras)

compras.unshift("Guaraná")
console.log(compras)

compras.pop()
console.log(compras)

compras.push("chocolate", "morango")
console.log(compras)

compras.shift()
console.log(compras)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

let sobreMim = [{
    Nome: "Lucas",
    Idade: 17,
    Cidade: "Magé"
}]
console.log(sobreMim)

sobreMim[0].estado = "Rio de Janeiro"
console.log(sobreMim)

delete sobreMim[0].Cidade
console.log(sobreMim)

let cadastro = [{
    Nome: 'Isis',
    idade: 39,
    Telefone: 550907944,
    Amigos: 'lidiane, marcia, paula, elisa',
},{
    Nome: 'gustavo',
    idade: 16,
    Telefone: 559864367,
    Amigos: 'lucas, rian, isaque, marcos',
},{
    Nome: 'everton',
    idade: 19,
    Telefone: 554362780, 
    Amigos: 'fernando, kevin, daniel, joão',
},{
    Nome: 'talita',
    idade: 23,
    Telefone: 550963732,
    Amigos: 'vanessa, cristiane, fernanda, bruna',
},{
    Nome: 'elias',
    idade: 45,
    Telefone: 559862431,
    Amigos: 'nico, matheus, josemar, wagner',
}]

console.log(cadastro)