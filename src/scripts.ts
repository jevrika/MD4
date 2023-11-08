/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
//  Task 1
//  Write a function that takes two numbers (a and b) as argument
//  Sum a and b
//  Return the result

import { ListFormat } from 'typescript';

const add = (a: number, b: number): number => a + b;

console.log(add(1, 2)); // 3
console.log(add(1, 10)); // 11
console.log(add(99, 1)); // 100

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const typeOfValue = (value: any): any => typeof value;

console.log(typeOfValue(2)); // number
console.log(typeOfValue(true)); // boolean
console.log(typeOfValue({ name: 'Ērika', city: 'Liepāja' })); // obejct
console.log(typeOfValue(null)); // obejct
console.log(typeOfValue('Hello')); // string
console.log(typeOfValue([1, 2, 3, 4])); // object

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const compareTwoValues = (a: any, b: any): boolean => a === b;

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

const filterArray = (arr: (string | number | boolean)[], n: string | number | boolean): (number | string | boolean)[] => arr.filter((element: any) => element !== n);

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

const sortedArray = (arr:number[]): number[] => arr.sort((a, b) => a - b);

console.log(sortedArray([1, 3, 2])); // [3,2,1]
console.log(sortedArray([4, 2, 3, 1])); // [4,3,2,1]

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically

const sortedArrayAlphabetically = (arr: string []): string[] => arr.sort();

console.log(sortedArrayAlphabetically(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortedArrayAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageOfArray = (arr:number[]): number => {
  let sum = 0;
  arr.forEach((num) => { sum += num; });
  const average = sum / arr.length;
  return average;
};

console.log(averageOfArray([10, 100, 40])); // 50
console.log(averageOfArray([10, 100, 1000])); // 370
console.log(averageOfArray([-50, 0, 50, 200])); // 50

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (arr:string[]):string => {
  const words:string[] = arr.toString().replace(/[^a-zA-Z']/g, ' ').split(' ');

  const longestWord : string[] = words.sort((a:string, b:string) => b.length - a.length);
  return longestWord[0];
};

console.log(longestString(['help', 'me'])); // 'help'
console.log(longestString(['I', 'need', 'candy'])); // 'candy'
