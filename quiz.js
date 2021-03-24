const chalk = require('chalk');
const readlineSync = require('readline-sync');

let note = 0


const choix = ['language', 'compilateur']
const choix2 = ['Vrais', 'Faux']

console.log('Question 1: Le C++ est un:')
const Qst1 = readlineSync.keyInSelect(choix)
Qst1 === 0 ? note++ : note = 0
console.log('Question 2: TypeScript est une évolution de Javascript:')
const Qst2 = readlineSync.keyInSelect(choix2)
Qst2 === 0 ? note++ : note = 0
console.log('Question 3: Lire les cours avant de faire les exercices est inutile:')
const Qst3 = readlineSync.keyInSelect(choix2)
Qst3 === 1 ? note++ : note = 0
console.log('Question 4: react.js a été developpé par Google:')
const Qst4 = readlineSync.keyInSelect(choix2)
Qst4 === 1 ? note++ : note = 0
console.log('Question 5: Ethereum est une blockchain publique:')
const Qst5 = readlineSync.keyInSelect(choix2)
Qst5 === 0 ? note++ : note = 0



console.log(`Votre note est de ${(chalk.blueBright(note))} bonne réponse sur 5.`)