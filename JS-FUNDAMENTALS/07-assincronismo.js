
const fs = require('fs')
const { resolve } = require('path')
console.log('11111')
const readFile = file => {
  return new Promise((resolve,reject) =>{
    fs.readFile(file,(err,content) =>{
      if(!err){
        resolve(content.toString())
      } else {
        reject(err)
      }
    })
  })
}
readFile('05-hof.js')
  .then(content => {
    console.log(content)
  })

  console.log('22222')