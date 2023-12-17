/*
    "33"   =>  33
    "33ab" =>  NaN
    true   =>  1
    false  =>  0
*/
let score = 234;
console.log(`Type is ${typeof score}`,`Value is ${score}`)

let strScore = '234'
strScore = Number(strScore)
console.log(`Type is ${typeof strScore}`,`Value is ${strScore}`)


let strScore2 = '234dsfsdf'
strScore2 = Number(strScore2)
console.log(`Type is ${typeof strScore2}`,`Value is ${strScore2}`)

let score3  = null
score3 = Number(score3)
console.log(`Type is ${typeof score3}`,`Value is ${score3}`)

let score4  = undefined
score4 = Number(score4)
console.log(`Type is ${typeof score4}`,`Value is ${score4}`)

let score5  = true
score5 = Number(score5)
console.log(`Type is ${typeof score5}`,`Value is ${score5}`)


/*
    true => 1 and false => 0
*/


console.log(`1 convert to boolean `,Boolean(1))



console.log(`Empty string convert to boolean `,Boolean(''))
console.log(`String convert to boolean `,Boolean('XYZ'))