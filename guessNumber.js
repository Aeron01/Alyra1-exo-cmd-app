const chalk = require('chalk');
const readlineSync = require('readline-sync');

if (process.argv.length !== 3) {
  console.log('usage: node guessNumber.js number')
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(`${process.argv[2]} is not à number.`)
  process.exit(1)
}
let sec = Number(process.argv[2])
let isRun = true
let counter = 0



while (isRun) {
  const user = readlineSync.question('Quelle est le code ? ')
  const guess = (userGuess, secret) => {
    if (userGuess < secret) {
      counter++
      return console.log(chalk.redBright('nombre trop petit'))
    } else if (userGuess > secret) {
      counter++
      return console.log(chalk.redBright('nombre trop grand'))
    } else if (isNaN(userGuess)) {
      return console.log(chalk.redBright(`${userGuess} n'est pas un nombre`))
      let isRun = true
    }
    counter++
    isRun = false


  }
  guess(user, sec)
}
let mul = counter > 1 ? 's' : ''
return console.log(chalk.greenBright(`Bravo! Vous avez trouver le code en ${counter} tour${mul}.`))
process.exit(1)