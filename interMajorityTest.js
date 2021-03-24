const chalk = require('chalk');
const readlineSync = require('readline-sync');

if (process.argv.length !== 3) {
  console.log(chalk.redBright('Usage: node interMajorityTest.js majority'))
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(chalk.redBright(`Error: ${process.argv[2]} is not à number.`))
  process.exit(1)
}
let checkmajo = Number(process.argv[2])
if (checkmajo === 0) {
  console.log(chalk.redBright(`Error: ${checkmajo} is not a proper argument.`))
  process.exit(1)
}

if (checkmajo < 0) {
  console.log(chalk.redBright(`Error: ${checkmajo} is a negative number.`))
  process.exit(1)
}

while (true) {
  const check = (age, majo) => {

    if (isNaN(age)) {
      return (chalk.redBright(`${age} n'est pas un nombre`))
    } else {
      return age >= majo ? (chalk.greenBright(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter.`)) : (chalk.redBright(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`))
    }

  }

  let majo = checkmajo

  const firstName = readlineSync.question('Quelle est votre Prénom ? ');
  if (firstName.length === 0) {
    console.log('Désoler, mais vous devez renseigner obligatoirement votre prénom.')
    continue
  }

  const lastName = readlineSync.question('Quelle est votre Nom ? ');
  if (lastName.length === 0) {
    console.log('Désoler, mais vous devez renseigner obligatoirement votre nom.')
    continue
  }

  const age = readlineSync.question('Quelle âge avez vous ? ');
  let age2check = Number(age)

  if (age2check <= 0 || age.length === 0) {
    console.log('Désoler, mais vous devez renseigner obligatoirement votre age et il ne peut pas être égale ou inférieur à 0.')
    continue
  }

  console.log(check(age, majo))
}