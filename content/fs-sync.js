const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


writeFileSync('./content/create.txt', 
`thi is the result :
 ${first} ${second}`)
 
console.log(first,second);