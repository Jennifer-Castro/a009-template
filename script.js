// Pratica guiada parte 1

// const nome = prompt("Qual o seu nome?")
// const nomeMaiusculo = nome.toUpperCase()
// const corFavorita = prompt("Qual é a sua cor preferida?")
// const citacaoFavorita = prompt("Qual a sua citação favorita?")

// const stringConcatenada1 = 'A cor favorita de ' + nomeMaiusculo + ' é ' + corFavorita + ' e sua citação favorita é: \''+ citacaoFavorita +'\'.'
// console.log('STRING CONCATENADA', stringConcatenada1)

// const stringConcatenada2 = `Nome: ${nomeMaiusculo} \nCor Favorita: ${corFavorita}`
// console.log('TEMPLATE STRING', stringConcatenada2)

// // verificando tamanho da string
// const tamanho = nome.length
// console.log('esse nome tem', tamanho, 'letras')

// // verificando se a string possui letra A
// const temA = nome.includes('A')
// console.log('Seu nome tem a letra A?', temA)

// Exercíco de fixação
const emailDoUsuario = prompt('Qual seu e-mail?')
const tamanho2 = emailDoUsuario.length
const mudandoLetras = emailDoUsuario.replaceAll(`r`, `l`)
console.log(mudandoLetras)

console.log(`O e-mail do usuário foi cadastrado com sucesso\nSeja bem vindo ${emailDoUsuario}\nE seu e-mail tem ${tamanho2} letras`)



// verificando se tem @ no e-mail do usuário
const temArroba = emailDoUsuario.includes('@')
console.log('Seu e-mail tem o caractere @?', temArroba)






