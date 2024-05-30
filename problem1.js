/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 

The sum of these multiples is 23. 

Find the sum of all the multiples of 3 or 5 below 1000. 

=======

Max number is 999.
Min is 10.
Counter is already equal to 23.

What is the natural number? 

Can do it as is
===========
Can do it with algorithmical formula (i can figure out the number of includings, hehe)
*/

// let counter = 23
// let maxNumber = 1000

// for (let index = 10; index < maxNumber; index++) {
    
//     const multipleOf5 = index % 5 == 0 ? true : false
//     const multipleOf3 = index % 3 == 0 ? true : false

//     if (multipleOf3 || multipleOf5) counter+=index
// }

// console.log(counter)

/* Can do it with algorithmical formula (i can figure out the number of includings, hehe)
 */

/* let maxNumber = 999

const arithmeticProgression  = (n, lim) =>
  Array.from({ length: Math.floor(lim / n) }, (_, i) => (i + 1) * n );

const arithmeticProgressionFor3 = arithmeticProgression (3, maxNumber)
const arithmeticProgressionFor5 = arithmeticProgression (5, maxNumber)

console.log(arithmeticProgressionFor5[arithmeticProgressionFor5.length -1 ]);

let arrayOfNumbers = arithmeticProgressionFor3.concat(arithmeticProgressionFor5)
const setOfNumbers = new Set(arrayOfNumbers)
arrayOfNumbers = Array.from(setOfNumbers);

const sum = arrayOfNumbers.reduce((a, b) => a + b, 0)
console.log(sum) */

const target = 999

const sumDivisibleBy = (number) => {
    const counterOfDivisibleNumbers = Math.floor(target / number)
    return number * (counterOfDivisibleNumbers* (counterOfDivisibleNumbers+1)) / 2
}

console.log(sumDivisibleBy(3)+sumDivisibleBy(5)-sumDivisibleBy(15)) 