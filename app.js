let q1 = "saylani is a best institute"
let q2 = "Is WEB DEVELOPMENT is important"
let q3 = "HTML IS A LANGUAGE"
let q4 = "ARE YOU MUSLIM"
let q5 = "EINSTIEN IS A SCIENTIST"

let a1 = "yes"
let a2 = "yes"
let a3 = "no"
let a4 = "yes"
let a5 = "yes"

let score = 0
let total = 5
alert("answer the following question yes/no")

const response1 = prompt(q1)
const response2 = prompt(q2)
const response3 = prompt(q3)
const response4 = prompt(q4)
const response5 = prompt(q5)
if( response1 ===a1){
    score++
}
if( response2 ===a2){
    score++
}
if( response3 ===a3){
    score++
}
if( response4 ===a4){
    score++
}
if( response5 ===a5){
    score++
}

let percentage = score/total*100
alert(percentage)


