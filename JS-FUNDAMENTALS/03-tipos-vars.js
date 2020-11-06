const num = 10.10
const str = `Meu numero é: ${num}`
console.log(str)

const obj = {
  name: 'Walace Filiciano',
  cidade: {
    nome: 'Três Pontas',
    uf: 'MG'
  }
}
const key = 'name'
console.log(obj[key])

const arr = [1,2,3]
console.log(arr[1])

//functions: first-class citizens

console.log(parseInt('10') + 1)

const toint = parseInt
console.log(toint('10') + 1)

