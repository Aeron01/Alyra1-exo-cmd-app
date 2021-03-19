const chalk = require('chalk');
const readlineSync = require('readline-sync');

let note = 0


const choix = ['language', 'compilateur']
const choix2 = ['Vrais', 'Faux']


const Qst1 = readlineSync.keyInSelect(choix, 'Question 1: Le C++ est un:')
Qst1 === 0 ? note++ : note = 0
const Qst2 = readlineSync.keyInSelect(choix2, 'Question 2: TypeScript est une évolution de Javascript:')
Qst2 === 0 ? note++ : note = 0
const Qst3 = readlineSync.keyInSelect(choix2, 'Question 3: Lire les cours avant de faire les exercices est inutile:')
Qst3 === 1 ? note++ : note = 0
const Qst4 = readlineSync.keyInSelect(choix2, 'Question 4: react.js a été developpé par Google:')
Qst4 === 1 ? note++ : note = 0
const Qst5 = readlineSync.keyInSelect(choix2, 'Question 5: Ethereum est une blockchain publique:')
Qst5 === 0 ? note++ : note = 0


console.log(`Votre note est de ${note} bonne réponse sur 5.`)