const showStars = (nbStars, caract, revert) => {
  if (rev === "-r") {
    for (let i = nbStars; i >= 1; i -= 1) {
      console.log(`${caract}`.repeat(i))
    }
  } else {
    for (let i = 1; i <= nbStars; i += 1) {
      console.log(`${caract}`.repeat(i))

    }
  }
}

if (process.argv.length !== 4) {
  if (process.argv[4] === '-r') {
    let rev = '-r'
  } else if (process.argv.length !== 4) {
    console.log('Usage: node pyramid.js number caractère -r')
    process.exit(1)
  } else {
    console.log('Usage: node pyramid.js number caractère')
    process.exit(1)
  }
}
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let nb = Number(process.argv[2])
let car = process.argv[3]
let rev = process.argv[4]
showStars(nb, car, rev)