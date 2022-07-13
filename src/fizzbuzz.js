// TODO: Write your function in this file

// function theFizzBuzzTest (lower, upper){
//     const answer = []

//     for(let i = lower; i <= upper; i++ ) {
//        if (i % 3 === 0 && i % 5 === 0) {
//         answer.push("FizzBuzz")
//        } else if (i % 3 === 0){
//         answer.push("Fizz")
//        } else if(i % 5 === 0) {
//         answer.push("Buzz")
//        } else {
//         answer.push(i)
//        }
//        return answer
//     }
    
// }

function theFizzBuzzTest (lower, upper){
    const answer = []
 
    for(let i =lower; i <= upper; i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            answer.push("FizzBuzz")  
        } else if (i % 3 === 0){
            answer.push("Fizz")
        } else if (i % 5 === 0){
        answer.push("Buzz")  
        }  else {
            answer.push(i)
        }
    }
    return answer

}



// TODO: Change undefined below to the name of your function
module.exports = theFizzBuzzTest
