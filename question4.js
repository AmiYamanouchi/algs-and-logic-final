/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {
    
    // return the error message if the given array is empty.
    if (arr.length === 0) return 'This is an empty array!';
    
    // make each word lower case → split the words → put back the sentence with "_".
    for (let i = 0; i < arr.length; i++) {
        const lowerStr = arr[i].toLowerCase();
        const splitStr = lowerStr.split(' ');
        arr[i] = splitStr.join('_')
    }

    // return the array.
    return arr;
    
}

console.log((snakeCaseArr(['Coding Is Fun']))) //=== ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']))) //=== ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']))) //=== ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");