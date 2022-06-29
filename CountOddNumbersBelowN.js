/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
 */

function oddCount(n){
    return(n<1 ? 'Oops! Wrong.' : Math.floor(n/2))
}
console.log(oddCount(7))
console.log(oddCount(15))
console.log(oddCount(22))
console.log(oddCount(1))
console.log(oddCount(-11))
console.log(oddCount(0))