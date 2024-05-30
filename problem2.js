/* Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона. */

/* 
=====
I can fill up the array and count everything later.

I can count it while I'm calculating it 

I need 
    to save the result of sum
    to save the prelast number
    to save the last number

I am going calculate the next number.
When it's done, I'm about to update RESULT OF SUM.
Then update reassign prelast and last numbers.
*/

let sum = 2
let penultimateNumber = 1
let pastNumber = 2
let limit = 4000000

while (pastNumber < limit) {

    const newNumber = penultimateNumber + pastNumber
    
    const newNumberIsEven = newNumber % 2 == 0
    
    if (newNumberIsEven) {
        sum += newNumber
    }

    penultimateNumber = pastNumber
    pastNumber = newNumber
}

console.log(sum);


