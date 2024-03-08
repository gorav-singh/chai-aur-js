const name = "Gorav"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String("Gorav=Singh=Golu=bhaii")

//console.log(gameName[2])

//console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('S'))

const newString = gameName.substring(5, 10)
console.log(newString)

const anotherString = gameName.slice(-8,5)
console.log(anotherString)

const trimString = "  Gorav  "
console.log(trimString)
console.log(trimString.trim())

const url = "https://gorav.com/gorav%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('gaurav'))

console.log(gameName.split('='));