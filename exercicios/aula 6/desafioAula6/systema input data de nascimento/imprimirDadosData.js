const inquirer = require('inquirer')
const inputData = require('./inputData')


inquirer.prompt(inputData).then((resposta) => {   
    let datas = new Date(resposta.pedirAno,resposta.pedirMes, resposta.pedirDia)
    let month = datas.getMonth()
    month ==  0? month = month + 12 : month
    console.log(`Dia: ${datas.getDate()}, mes: ${month}, ano ${datas.getFullYear()}`)
})