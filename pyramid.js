const showStars = (nbStars, caract) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(`${caract}`.repeat(i))
  }
}
if (process.argv.length !== 4) {
  console.log('Usage: node pyramid.js number caractère')
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}
let nb = Number(process.argv[2])
let car = process.argv[3]
showStars(nb, car)