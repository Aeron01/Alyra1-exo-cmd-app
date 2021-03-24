const chalk = require('chalk');
const readlineSync = require('readline-sync');

const firstName = readlineSync.question('Quelle est votre Prénom ? ');
if (firstName.length === 0) {
  console.log('Désoler, mais vous devez renseigner obligatoirement votre prénom.')
  process.exit(1)
}
const lastName = readlineSync.question('Quelle est votre Nom ? ');
if (lastName.length === 0) {
  console.log('Désoler, mais vous devez renseigner obligatoirement votre nom.')
  process.exit(1)
}
const age = readlineSync.question('Quelle âge avez vous ? ');
if (age === '0' || age.length === 0) {
  console.log('Désoler, mais vous devez renseigner obligatoirement votre age et il ne peut pas être égale à 0.')
  process.exit(1)
}
const majo = 18 /*process.argv[2]*/

const check = (age, majo) => {

  if (isNaN(age)) {
    return (`${age} n'est pas un nombre`)
  } else {
    return age >= majo ? (chalk.greenBright(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter.`)) : (chalk.redBright(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`))
  }

}

/*if (process.argv.length !== 3) {
  console.log('Usage: node interMajorityTest.js majority')
  process.exit(1)
}*/

console.log(check(age, majo))