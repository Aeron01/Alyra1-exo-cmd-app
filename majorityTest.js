const chalk = require('chalk');
const readlineSync = require('readline-sync');

const firstName = readlineSync.question('Quelle est votre Prénom ? ');
const lastName = readlineSync.question('Quelle est votre Nom ? ');
const age = readlineSync.question('Quelle âge avez vous ? ');
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