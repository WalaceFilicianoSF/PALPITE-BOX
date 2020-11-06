// high order function

const soma = (a,b) => a + b
const mult = (a,b) => a * b

const calc =(op,a,b) => op(a,b)
const selectOP = op => {
  const ops ={
    '+': soma,
    '*': mult
}
    return ops[op]
}


const c = calc(soma, 10, 5)
console.log(c)

const d = calc(selectOP('+'), 10,5)
console.log(d)
