import { StringManipulation } from './src/word-count.js';
import { MyArray } from './src/array.js';

/**
 * Question number 1. Write a program which takes 3 numbers as input and generates a 3 dimensional array based on those numbers.
 * Populate each cell in the array with the product of the indexes.
 */

const [first, second, third] = [2, 2, 2];

const firstResult = MyArray.threeDimensional(first, second, third);
console.log(firstResult);

/**
 * Question number 2. Given a string containing substrings separated by newlines (paragraphs)
 * and periods/question marks/exclamation marks (sentences) and a max word count (integer),
 * write a program that only includes full sentences whose total word count fall under the provided max word count value.
 * Inclusion of sentences should traverse the string from the first sentence onward.
 */
const sentence = `How much is that doggie in the window? I do hope that doggie's for sale.`;
const maxWordCount = 9;
const secondResult = StringManipulation.wordCount(sentence, maxWordCount);

console.log(secondResult);
