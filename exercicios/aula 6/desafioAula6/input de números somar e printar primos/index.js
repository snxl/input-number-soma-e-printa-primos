const inquirer = require('inquirer')
const input = require('./input')

let arrayUsuario = []

function entradaDeNumeros(){
    inquirer.prompt(input).then((callback) =>{
        arrayUsuario.push(callback.input)
        if(callback.novo_numero == true){
            return entradaDeNumeros()
        }
        let somaArray = arrayUsuario.reduce((num1, num2) => num1 + num2)
        console.log(`Soma do seu array: ${somaArray}`)
        for(let x = 0; x < arrayUsuario.length; x++){
            if(arrayUsuario[x] % 2 == 1){
                let arrayImpar = [arrayUsuario[x]]
                console.log(`Seu array com  números impares: ${arrayImpar}`)
            }
        }
    })
}
entradaDeNumeros()