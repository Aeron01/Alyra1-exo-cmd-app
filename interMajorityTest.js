const chalk = require('chalk');
const readlineSync = require('readline-sync');

const check = (age, majo) => {

  if (isNaN(age)) {
    return (chalk.redBright(`${age} n'est pas un nombre`))
  } else {
    return age >= majo ? (chalk.greenBright(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter.`)) : (chalk.redBright(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`))
  }

}

if (process.argv.length !== 3) {
  console.log(chalk.redBright('Usage: node interMajorityTest.js majority'))
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(chalk.redBright(`Error: ${process.argv[2]} is not à number.`))
  process.exit(1)
}
let majo = Number(process.argv[2])


const firstName = readlineSync.question('Quelle est votre Prénom ? ');
const lastName = readlineSync.question('Quelle est votre Nom ? ');
const age = readlineSync.question('Quelle âge avez vous ? ');



console.log(check(age, majo))