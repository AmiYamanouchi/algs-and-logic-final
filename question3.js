/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    
    // if the string passed in is an empty string, return 'This is an empty string!'
    if(!str) return 'This is an empty string!'

    //make all the letters lowercase and split the sentence
    let splitString = str.toLowerCase().split(' ')
    // console.log(splitString)

    //for every word, make the first letter uppercase
    for(let i = 0; i < splitString.length; i++) {
        let splitWord = splitString[i].split('')
        splitWord[0] = splitWord[0].toUpperCase()
        joinedWord = splitWord.join('')
        splitString[i] = joinedWord
    }

    //bring the words back together with '-' 
    return splitString.join('-')
    

    
}

console.log((kebabCase('Coding Is Fun'))) //=== 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing')))//=== 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase(''))) //=== 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

