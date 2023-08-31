let date1 = new Date(process.argv[2]), date2 = new Date(process.argv[3])

console.log(process.argv[2], process.argv[3])

console.log(date1, date2)

console.log((date2 - date1) / (1000 * 60 * 60 * 24))