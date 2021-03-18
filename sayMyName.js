const firstName = process.argv[2]
const lastName = process.argv[3]
const age = process.argv[4]
const live = process.argv[5]
if (process.argv.length !== 6) {
  console.log('Usage: node sayMyName.js firstname lastename age live')
  process.exit(1)
}
console.log(`My first name is ${firstName}, my last name is ${lastName}, im ${age} and i'm living in ${live}.`)