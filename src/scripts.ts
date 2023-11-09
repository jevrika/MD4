//  Task 1
//  Write a function that takes two numbers (a and b) as argument
//  Sum a and b
//  Return the result

import { testResultsProcessor } from "../jest.config";

const add = (a: number, b: number): number => a + b;

console.log(add(1, 2)); // 3
console.log(add(1, 10)); // 11
console.log(add(99, 1)); // 100

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const typeOfValue = (value: number | string | boolean | object | []): unknown => typeof value;

console.log(typeOfValue(2)); // number
console.log(typeOfValue(true)); // boolean
console.log(typeOfValue({ name: 'Ērika', city: 'Liepāja' })); // obejct
console.log(typeOfValue(null)); // obejct
console.log(typeOfValue('Hello')); // string
console.log(typeOfValue([1, 2, 3, 4])); // object

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const compareTwoValues = (a: number | string, b: number | string): boolean => a === b;

console.log(compareTwoValues(2, 3)); // false
console.log(compareTwoValues(3, 3)); // true
console.log(compareTwoValues(1, '1')); // false
console.log(compareTwoValues('10', '10')); // true

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const valueCharacter = (a: string, n: number): string => a.charAt(n - 1);

console.log(valueCharacter('abcd', 1)); // 'a'
console.log(valueCharacter('zyxbwpl', 5)); // 'w'
console.log(valueCharacter('gfedcba', 3)); // 'e'

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a

const removeFirstThree = (a: string): string => a.slice(3);

console.log(removeFirstThree('abcdefg')); // 'defg'
console.log(removeFirstThree('1234')); // '4'
console.log(removeFirstThree('fgedcba')); // 'dcba'

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string

const extractLastThree = (a: string): string => a.substring(a.length - 3);

console.log(extractLastThree('abcdefg')); // 'efg'
console.log(extractLastThree('1234')); // '234'
console.log(extractLastThree('fgedcba')); // 'cba'

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a

const getFirstThree = (a: string): string => a.slice(0, 3);

console.log(getFirstThree('abcdefg')); // 'abc'
console.log(getFirstThree('1234')); // '123'
console.log(getFirstThree('fgedcba')); // 'fge'

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a

const extractFirstHalf = (a: string): string => a.slice(0, a.length / 2);

console.log(extractFirstHalf('abcdefgh')); // 'abcd'
console.log(extractFirstHalf('1234')); // '12'
console.log(extractFirstHalf('gedcba')); // 'ged'

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a

const removeLastThree = (a: string): string => a.slice(0, -3);

console.log(removeLastThree('abcdefg')); // 'abcd'
console.log(removeLastThree('1234')); // '1'
console.log(removeLastThree('fgedcba')); // 'fged'

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentageOf = (a: number, b: number): number => (a / 100) * b;

console.log(percentageOf(100, 50)); // '50'
console.log(percentageOf(10, 1)); // '0.1'
console.log(percentageOf(500, 25)); // '125'

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result

const complexMath = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
  const result = ((a + b - c) * (d / e)) ** f;
  return result;
};

console.log(complexMath(6, 5, 4, 3, 2, 1)); // 10.5
console.log(complexMath(6, 2, 1, 4, 2, 3)); // 2744
console.log(complexMath(2, 3, 6, 4, 2, 3)); // -8

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (a: number): boolean => a % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(-4)); // true
console.log(isEven(5)); // false
console.log(isEven(-111)); // false

// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const countOccurrences = (a: string, b: string): number => b.split(a).length - 1;

console.log(countOccurrences('m', 'how many times does the character occur in this sentence?')); // 2
console.log(countOccurrences('h', 'how many times does the character occur in this sentence?')); // 4
console.log(countOccurrences('?', 'how many times does the character occur in this sentence?')); // 1
console.log(countOccurrences('z', 'how many times does the character occur in this sentence?')); // 0

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWholeNumber = (a: number): boolean => a % 1 === 0;

console.log(isWholeNumber(4)); // true
console.log(isWholeNumber(1.123)); // false
console.log(isWholeNumber(1048)); // ture
console.log(isWholeNumber(10.48)); // false

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const performMathOperation = (a: number, b: number): number => {
  if (a < b) {
    return a / b;
  }
  return a * b;
};

console.log(performMathOperation(10, 100)); // 0.1
console.log(performMathOperation(90, 45)); // 4050
console.log(performMathOperation(8, 20)); // 0.4
console.log(performMathOperation(2, 0.5)); // 1

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const appendStringIfContains = (a: string, b: string): string => {
  if (a.includes(b)) {
    return b + a;
  }
  return a + b;
};

console.log(appendStringIfContains('cheese', 'cake')); // 'cheesecake'
console.log(appendStringIfContains('lips', 's')); // 'slips'
console.log(appendStringIfContains('Java', 'script')); // 'Javascript'
console.log(appendStringIfContains(' think, therefore I am', 'I')); // 'I think, therefore I am'

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundToSecondDecimal = (a: number): number => parseFloat(a.toFixed(2));

console.log(roundToSecondDecimal(2.12397)); // 2.12
console.log(roundToSecondDecimal(3.136)); // 3.14
console.log(roundToSecondDecimal(1.12397)); // 1.12
console.log(roundToSecondDecimal(26.1379)); // 26.14

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array

const splitNumberIntoDigits = (a: number): number[] => a.toString().split('').map(Number);

console.log(splitNumberIntoDigits(10)); // [1,0]
console.log(splitNumberIntoDigits(931)); // [9,3,1]
console.log(splitNumberIntoDigits(193278)); // [1,9,3,2,7,8]

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'

const clearString = (a: string, b: string): string => {
  const ALetters = a.replace(/[^a-zA-Z]/g, '');
  const BLetters = b.replace(/[^a-zA-Z]/g, '');

  const BLettersReversed = BLetters.split('').reverse().join('');

  return ALetters.charAt(0).toUpperCase() + ALetters.substring(1) + BLettersReversed;
};
console.log(clearString('java', 'tpi%rcs')); // 'Javascript'
console.log(clearString('c%ountry', 'edis')); // 'Countryside'
console.log(clearString('down', 'nw%ot')); // 'Downtown'

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const returnPrime = (num: number): number => {
  function checkPrime(n: number) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (checkPrime(num)) {
    return num;
  }
  while (checkPrime(num) === false) {
    // eslint-disable-next-line no-param-reassign
    num += 1;
  }

  return num;
};

console.log(returnPrime(38)); // the return should be 41
console.log(returnPrime(7)); // the return should be 7
console.log(returnPrime(115)); // the return should be 127
console.log(returnPrime(2000)); // the return should be 2003

// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const checkDivisibilityAndReturn = (x: number, y: number): number => {
  let number = x;
  while (number % y !== 0) {
    number += 1;
  }
  return number;
};

console.log(checkDivisibilityAndReturn(1, 23)); // 23
console.log(checkDivisibilityAndReturn(23, 23)); // 23
console.log(checkDivisibilityAndReturn(7, 3)); // 9
console.log(checkDivisibilityAndReturn(-5, 7)); // 0

// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertStringAfterEveryNChars = (a: string, b: string): string => {
  const n = 3;
  const insertChar = b;
  let outputString = '';

  for (let i = a.length - 1; i >= 0; i -= 1) {
    const char = a[i];
    outputString = char + outputString;

    if (i > 0 && (a.length - i) % n === 0) {
      outputString = insertChar + outputString;
    }
  }

  return outputString;
};
console.log(insertStringAfterEveryNChars('1234567', '.'));
console.log(insertStringAfterEveryNChars('abcde', '$'));
console.log(insertStringAfterEveryNChars('zxyzxyzxyzxyzxyz', 'w'));

// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const incrementLettersInString = (a: string): string => {
  const splitedString = a.split('');
  splitedString.forEach((char, index) => {
    splitedString[index] = String.fromCharCode(char.charCodeAt(0) + 1);
  });
  return splitedString.join('');
};

console.log(incrementLettersInString('bnchmf')); // 'coding'
console.log(incrementLettersInString('bgddrd')); // 'cheese'
console.log(incrementLettersInString('sdrshmf')); // 'testing'

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const returnNthElementFromArray = (a: number[], n: number): number | undefined => {
  if (n > 0) {
    return a[n - 1];
  }
  return undefined;
};

console.log(returnNthElementFromArray([1, 2, 3, 4, 5], 3)); // 3
console.log(returnNthElementFromArray([10, 9, 8, 7, 6], 5)); // 6
console.log(returnNthElementFromArray([7, 2, 1, 6, 3], 1)); // 7

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'

const removeArrayFirstThree = (arr: number[]): number[] => arr.splice(3, arr.length);

console.log(removeArrayFirstThree([1, 2, 3, 4])); // [4]
console.log(removeArrayFirstThree([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(removeArrayFirstThree([99, 1, 1])); // []

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a

const removeArrayLastThree = (arr: number[]): number[] => arr.slice(arr.length - 3);

console.log(removeArrayLastThree([1, 2, 3, 4])); // [2,3,4]
console.log(removeArrayLastThree([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(removeArrayLastThree([99, 1, 1])); // [99,1,1]

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a

const extractArrayFirstThree = (arr: number[]): number[] => arr.slice(0, 3);

console.log(extractArrayFirstThree([1, 2, 3, 4])); // [1,2,3]
console.log(extractArrayFirstThree([5, 4, 3, 2, 1, 0])); // [5,4,3]
console.log(extractArrayFirstThree([99, 1, 1])); // [99,1,1]

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const returnNElementsOfArray = (arr: number[], n: number): number[] => arr.slice(arr.length - n);

console.log(returnNElementsOfArray([1, 2, 3, 4, 5], 2)); // [4,5]
console.log(returnNElementsOfArray([1, 2, 3], 6)); // [1,2,3]
console.log(returnNElementsOfArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [6,7,8]

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b

// eslint-disable-next-line max-len
const filterArray = (arr: (string | number | boolean)[], n: string | number | boolean): (number | string | boolean)[] => arr.filter((element) => element !== n);

console.log(filterArray([1, 2, 3], 2)); // [4,5]
console.log(filterArray([1, 2, '2'], '2')); // [1,2,3]
console.log(filterArray([false, '2', 1], false)); // [6,7,8]
console.log(filterArray([1, 2, '2', 1], 1)); // [6,7,8]

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrayLenght = (arr: number[]): number => arr.length;

console.log(arrayLenght([1, 2, 2, 4])); // 4
console.log(arrayLenght([9, 9, 9])); // 3
console.log(arrayLenght([4, 3, 2, 1, 0])); // 5

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const numberOfNegativeValues = (arr: number[]) => {
  let negativeValuesCounter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) {
      negativeValuesCounter += 1;
    }
  }
  return negativeValuesCounter;
};

console.log(numberOfNegativeValues([1, -2, 2, -4]));
console.log(numberOfNegativeValues([0, 9, 1]));
console.log(numberOfNegativeValues([4, -3, 2, 1, 0]));

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortedArray = (arr: number[]): number[] => arr.sort((a, b) => a - b);

console.log(sortedArray([1, 3, 2])); // [3,2,1]
console.log(sortedArray([4, 2, 3, 1])); // [4,3,2,1]

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically

const sortedArrayAlphabetically = (arr: string[]): string[] => arr.sort();

console.log(sortedArrayAlphabetically(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortedArrayAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageOfArray = (arr: number[]): number => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  const average = sum / arr.length;
  return average;
};

console.log(averageOfArray([10, 100, 40])); // 50
console.log(averageOfArray([10, 100, 1000])); // 370
console.log(averageOfArray([-50, 0, 50, 200])); // 50

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (arr: string[]): string => {
  const words: string[] = arr
    .toString()
    .replace(/[^a-zA-Z']/g, ' ')
    .split(' ');

  const longestWord: string[] = words.sort((a: string, b: string) => b.length - a.length);
  return longestWord[0];
};

console.log(longestString(['help', 'me'])); // 'help'
console.log(longestString(['I', 'need', 'candy'])); // 'candy'

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// eslint-disable-next-line max-len
const areAllElementsEqual = (arr: (number | string | boolean)[]): boolean => arr.every((element) => element === arr[0]);

console.log(areAllElementsEqual([true, true, true, true])); // true
console.log(areAllElementsEqual(['test', 'test', 'test'])); // true
console.log(areAllElementsEqual([1, 1, 1, 2])); // false
console.log(areAllElementsEqual(['10', 10, 10, 10])); // false

// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const mergeArrays = (...arrays: unknown[]): (string | number | boolean)[] => [].concat(...arrays);

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(mergeArrays([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order

interface MyObject {
  a: number;
  b: number;
}
const sortArrayByBAscending = (arr: MyObject[]): MyObject[] => arr.sort((a, b) => a.b - b.b);

console.log(
  sortArrayByBAscending([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ]),
); // [{a:1,b:2},{a:5,b:4}]
console.log(
  sortArrayByBAscending([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ]),
); // [{a:5,b:4},{a:2,b:10}]
console.log(
  sortArrayByBAscending([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ]),
); // [{a:2,b:1},{a:1,b:7}]

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order

const mergeAndSortArrays = (firstArr: number[], secondArr: number[]): number[] => {
  const arr = firstArr.concat(secondArr);
  const mergedArr = [...new Set(arr)];
  return mergedArr.sort((a, b) => a - b);
};

console.log(mergeAndSortArrays([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
// eslint-disable-next-line max-len
console.log(mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b

const sumArrayElementsGreaterThanB = (arr: number[], b: number): number => arr.reduce((sum, cur) => {
  if (cur > b) {
    return sum + cur;
  }
  return sum;
}, 0);

console.log(sumArrayElementsGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(sumArrayElementsGreaterThanB([-10, -11, -3, 1, -4], -3)); // 1
console.log(sumArrayElementsGreaterThanB([78, 99, 100, 101, 401], 99)); // 602

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const generateRange = (min: number, max: number): number[] => {
  const arr = [];
  for (let i = 0; i <= max - min; i += 1) {
    arr[i] = min + i;
  }
  return arr;
};

console.log(generateRange(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(generateRange(1, 3)); // [1, 2, 3]
console.log(generateRange(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(generateRange(2, 7)); // [2, 3, 4, 5, 6, 7]

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings

const groupStringsByFirstLetter = (arr: string[]): Record<string, string[]> => {
  const result: Record<string, string[]> = {};

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const firstLetter = item[0];

    result[firstLetter] = result[firstLetter] || [];

    if (!new Set(result[firstLetter]).has(item)) {
      result[firstLetter].push(item);
    }
  }

  return result;
};

console.log(groupStringsByFirstLetter(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupStringsByFirstLetter(['Ant', 'Bear', 'Bird'])); // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupStringsByFirstLetter(['Berlin', 'Paris', 'Prague'])); // { b: ['Berlin'], p: ['Paris', 'Prague']}

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array

const createNewArrayWithNumber = (arr: (number | string | boolean)[], n: number): (number | string | boolean)[] => {
  if (n >= 6) {
    return [n, ...arr];
  }
  return [0, ...arr];
};

console.log(createNewArrayWithNumber([1, 2, 3], 6)); // [6,1,2,3]
console.log(createNewArrayWithNumber(['a', 'b'], 2)); // [0,'a','b']
console.log(createNewArrayWithNumber([null, false], 11)); // [11,null,false]

// Task 45
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array

const saveEveryNthElement = (arr: number[], n: number): number[] => arr.filter((element, i) => i % n === n - 1);

console.log(saveEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3,6,9]
console.log(saveEveryNthElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // [6,1]
console.log(saveEveryNthElement([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // [2,6,4,8,10]

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const getCountryPropertyValue = (obj: { continent: string; country: string }): string => obj.country;

console.log(getCountryPropertyValue({ continent: 'Asia', country: 'Japan' })); // 'Japan'
console.log(getCountryPropertyValue({ country: 'Sweden', continent: 'Europe' })); // 'Sweden'

// Task 47
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'

const getProp2Value = (obj: { [key: string]: string | number }): number | string => obj['prop-2'];

console.log(getProp2Value({ one: 1, 'prop-2': 2 })); // 2
console.log(getProp2Value({ 'prop-2': 'two', prop: 'test' })); // 'two'

// Task 48
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// eslint-disable-next-line max-len
const getValueByStringKey = (obj: { [key: string]: string }, keytoFind: string): string => obj[keytoFind];

console.log(getValueByStringKey({ continent: 'Asia', country: 'Japan' }, 'continent')); // 'Asia'
console.log(getValueByStringKey({ country: 'Sweden', continent: 'Europe' }, 'country')); // 'Sweden'

// Task 49
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b

const hasPropertyByKey = (obj: { [key: string]: string | number }, keyToFind: string)
: boolean => Object.prototype.hasOwnProperty.call(obj, keyToFind);

console.log(hasPropertyByKey({ a: 1, b: 2, c: 3 }, 'b'));
console.log(hasPropertyByKey({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(hasPropertyByKey({ x: 'a', y: 'b', z: 'c' }, 'z'));

// Task 50
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a

const createObjectWithKey = (a: string): { key: string } => ({ key: a });

console.log(createObjectWithKey('a')); // {key:'a'}
console.log(createObjectWithKey('z')); // {key:'z'}
console.log(createObjectWithKey('b')); // {key:'b'}

// Task 51
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'

const createObjectWithKeyValue = (a: string, b: string): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  result[a] = b;
  return result;
};

console.log(createObjectWithKeyValue('a', 'b')); // {a:'b'}
console.log(createObjectWithKeyValue('z', 'x')); // {z:'x'}
console.log(createObjectWithKeyValue('b', 'w')); // {b:'w'}

// Task 52
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'

const createObjectFromArrays = (firstArr: (number | string)[], secondArr: (number | string)[])
: object => {
  const result: { [key: string]: number | string } = {};
  firstArr.forEach((key, i) => { result[key] = secondArr[i]; });
  return result;
};

console.log(createObjectFromArrays(['a', 'b', 'c'], [1, 2, 3])); // {a:1,b:2,c:3}
console.log(createObjectFromArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // {w:10,x:9,y:5,z:2}
console.log(createObjectFromArrays([1, 'b'], ['a', 2])); // {1:'a',b:2}

// Task 53
// Write a function that takes an object (a) as argument

const getObjectKeys = (obj: { [key: string]: string | number }):(string | number)[] => {
  const arr: (string | number)[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
};

console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // ['a','b','c']
console.log(getObjectKeys({j: 9, i: 2, x: 3, z: 4})); // ['j','i','x','z']
console.log(getObjectKeys({ w: 15, x: 22, y: 13 })); // ['w','x','y']

// Task 54
// Write a function that takes an object (a) as argument

const processObject = (obj: { [key: string]: number }): number => {
  let sum:number = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return sum;
};

console.log(processObject({ a: 1, b: 2, c: 3 })); // 6
console.log(processObject({ j: 9, i: 2, x: 3, z: 4 })); // 18
console.log(processObject({ w: 15, x: 22, y: 13 })); // 50

// Task 55
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const cloneObjectWithoutB = (obj : {[key: string]: number}): object => {
  const result: { [key: string]: number } = {};

  for (const key in obj) {
    if (key !== 'b') {
      result[key] = obj[key];
    }
  }

  return result;
};

console.log(cloneObjectWithoutB({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(cloneObjectWithoutB({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(cloneObjectWithoutB({e: 6, f: 4, b: 5, a: 3})); // { e: 6, f: 4, a: 3 }

// Task 56
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeAndCorrectProperties = (
  firstObj : {[key: string]: number},
  secondObj: {[key: string]: number},
): object => {
  const changedSecondObj = secondObj;
  if ('b' in changedSecondObj) {
    changedSecondObj.d = changedSecondObj.b;
    delete changedSecondObj.b;
  } return { ...firstObj, ...changedSecondObj };
};

console.log(mergeAndCorrectProperties({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeAndCorrectProperties({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
// { a: 5, b: 4, c: 3, e: 2, d: 1}

// Task 57
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'

const multiplyValuesByNumber = (obj: {[key: string]:number}, num:number): object => {
  const result: {[key: string]:number} = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key] * num;
    }
  }
  return result;
};

console.log(multiplyValuesByNumber({a: 1, b: 2, c: 3 }, 3)); // {a:3,b:6,c:9}
console.log(multiplyValuesByNumber({j: 9, i: 2, x: 3, z: 4 }, 10)); // {j:90,i:20,x:30,z:40}
console.log(multiplyValuesByNumber({w: 15, x: 22, y: 13}, 6)); // {w:90,x:132,y:78}

// Task 58
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapKeyValues = (obj: {[key: string | number]:string | number}): object => {
  const swappedObj: {[key:string | number]: string | number} = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      swappedObj[obj[key]] = key;
    }
  };
  return swappedObj;
};

console.log(swapKeyValues({ z: 'a', y: 'b', x: 'c', w: 'd' })); // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapKeyValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapKeyValues({ a: 1, z: 24 })); // {1:'a',24:'z'}

// Task 59
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values

const replaceEmptyWithNull = (obj: {[key: string]:string }): object => {
  const newObj: {[key:string]: string | null} = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = (obj[key]).trim() === '' ? null : obj[key];
    }
  }
  return newObj;
};

console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' })); // { a: 'a', b: 'b', c: null }
console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' })); // { a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })); // { a: 'a', b: 'b ', c: null, d: null }

// Task 60
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight

const ExtractPersonalInfo = (person:
  { fn?: string; ln?: string; age?: number; size?: number; email?: string;weight?: number }):
 { fn?: string; ln?: string; size?: string; weight?: string } => {
  const { fn, ln, size, weight } = person;

  const result: { fn?: string; ln?: string; size?: string; weight?: string } = {};

  if (fn) {
    result.fn = fn;
  }

  if (ln) {
    result.ln = ln;
  }

  if (size !== undefined) {
    result.size = `${size}cm`;
  }

  if (weight !== undefined) {
    result.weight = `${weight}kg`;
  }

  return result;
};

console.log(ExtractPersonalInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(ExtractPersonalInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(ExtractPersonalInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})); // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(ExtractPersonalInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})); // {fn: 'Matthew', ln: 'Müller'}

// Task 61
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects

const addContinentToObjects = (arr: Array<{ [key: string]: string }>, continent: string):
object => arr.map((obj) => ({...obj, continent}))

console.log(addContinentToObjects([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' },
// { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinentToObjects([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')); 
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' },
// { city: 'Paris', country: 'France', continent: 'Europe' }]

// Task 62
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const arrayToCountObject = (arr: number[]) : object {
  const countObject: {[key: number]:number }= {};

  arr.forEach((num) => {
    countObject[num] = (countObject[num] || 0) + 1
  })
 return countObject
}

console.log(arrayToCountObject([1, 2, 2, 3])); // {1:1,2:2,3:1}
console.log(arrayToCountObject([9, 9, 9, 99])); // {9:3,99:1}
console.log(arrayToCountObject([4, 3, 2, 1])); // {1:1,2:1,3:1,4:1}

// Task 63
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const areDatesEqual = (firstDate: Date, secondDate: Date): boolean => {
  return firstDate.getTime() === secondDate.getTime();
}

console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // false
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // true
console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // false

// Task 64
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const datesBetweenDates = (firstDate: Date, secondDate: Date): number =>{
const differenceBetween = secondDate.getTime() - firstDate.getTime();
const differenceBetweenInDays = differenceBetween / (1000 * 3600 * 24)
return differenceBetweenInDays
}

console.log(datesBetweenDates(new Date('2020-06-01'), new Date('2020-06-11'))); // 10
console.log(datesBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'))); // 7457

// Task 65
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const areDatesOnSameDay  = (firstDate: Date, secondDate: Date): boolean => {
  return firstDate.getTime() === secondDate.getTime();
}

console.log(areDatesOnSameDay (new Date('2000/01/01'), new Date('2000/01/01'))); // true
console.log(areDatesOnSameDay (new Date('2000/01/01'), new Date('2000/01/02'))); // false
console.log(areDatesOnSameDay (new Date('2001/01/01'), new Date('2000/01/01'))); // false
console.log(areDatesOnSameDay (new Date('2000/11/01'), new Date('2000/01/01'))); // false
