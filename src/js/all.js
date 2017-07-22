import { palindromeChecker } from './ds/stack/palindrome.js';
import MyStack from './ds/stack/MyStack.js';

const word1 = 'racecar';
const word2 = 'nop';

palindromeChecker(word1);
palindromeChecker(word2);

const myStack = new MyStack();

myStack.push('yo');
myStack.push('yoyo');
myStack.push('yoyoyo');
console.log(myStack.size());
console.log(myStack.peak());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
