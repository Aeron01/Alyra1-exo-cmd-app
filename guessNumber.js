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
let secret = Number(process.argv[2])
let isRun = true
let counter = 0



while (isRun) {
  const guessString = readlineSync.question('Quelle est le code ? ')
  const guess = Number(guessString)
  if (isNaN(guessString)) {
    console.log(chalk.redBright(`${guessString} n'est pas un nombre`))
    continue
  }
  counter++
  if (guess < secret) {
    console.log(chalk.redBright('nombre trop petit'))
  } else if (guess > secret) {
    console.log(chalk.redBright('nombre trop grand'))
  } else {
    console.log(chalk.greenBright(`Bravo! Vous avez trouver le code en ${counter} tour${counter > 1 ? 's' : ''}.`))
    isRun = false
  }
}

