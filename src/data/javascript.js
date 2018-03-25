import * as constants from '../shared/constants';

const jsData = [
  {
    topic: constants.JAVASCRIPT,
    question: 'What is a closure?',
    answer: `A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 
            The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 
            it has access to the outer function’s variables, and it has access to the global variables.`
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What are the <b>primitive</b><br><br> types in Javascript',
    answer: '<ul><li>Boolean</li><li>Number</li><li>String</li><li>Undefined</li><li>Null</li></ul><p>* Use typeof(myvar) to determine the type</p>'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is a Javascript module? Give an example of why you would use it',
    answer: `A module is similar to a Java Class. It's good for organization, and supports public/private methods and variables`
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is <b>use strict</b> mode used for in javascript?',
    answer: 'Defines that JavaScript code should be executed in "Strict Mode". For example, if you have "x = 25;" using strict mode, this would fail because you have not declared x'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is a Javascript Promise?',
    answer: 'A Promise is an object that represents a value which might not yet exist'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is a callback?',
    answer: 'Answer goes here'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'How is a Promise different from a callback function?',
    answer: 'The difference between Promises and the traditional callbacks approach, is that async methods now synchronously return Promise objects, which the client sets a callback on'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is the difference between == and === ?',
    answer: 'Answer goes here'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'Name as many Javscript data structures as you can',
    answer: '<ul><li>Array</li><li>Object</li><li>Set (ES6)</li><li>Map (ES6)</li></ul>'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'Compare/Contrast various data structures. List advantages and disadvantages',
    answer: '<ul><a>Array</a><a>Object</a><a>Set (ES6)</a><a>Map (ES6)</a></ul>'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What are some popular Javascript helper libraries commonly used?',
    answer: '<ul><li>Lodash</li><li>Immutable.js</li><li>RxJS</li><li>ESLint</li></ul>'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is a functor?',
    answer: '<ul><li>Lodash</li><li>Immutable.js</li><li>RxJS</li><li>ESLint</li></ul>'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'When is it better to use an Array vs. Set, and vice versa?',
    answer: `<ul>
                    <li>Set is better when you are dealing with <b>distinct</b> elements</li>
                    <li>Array is better to keep elements in order</li>
                    <li>Basic operations of like union(), intersect(), difference(), etc… are easily implemented with <b>Set</b> due to the delete() method</li></ul>`

  },
  {
    topic: constants.JAVASCRIPT,
    question: 'When is it better to use an Object vs. Map, and vice versa?',
    answer: `<ul>
                    <li>Object is better if it's a simple structure with keys that will be Strings or integers due to performance</li>
                    <li>Object has better JSON support</li>
                    <li>Map preserves <b>order</b> of it's keys, and it supports Iteration</li>
                    <li>Map performs better when storing large sets of data</li></ul>`

  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What does the Array.map() function do?',
    answer: 'Creates a new Array based on the callback function (use the <b>return</b> keyword)'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'Describe some <b>Map</b> functions and properties. What are they are what do they do?',
    answer: `<ul>
                    <li>myMap.size - number of elements</li>
                    <li>myMap.set(key, value) - add or update an element</li>
                    <li>myMap.get(key) - returns an element with given key</li>
                    <li>myMap.delete(key) - removes an element</li>
                    <li>myMap.keys() - returns an Iterator object with all keys</li>
                    <li>myMap.values() - returns an Iterator object with all values</li>
                    <li>myMap.has(key) - returns a boolean indicating whether an element with the key exists</li>
                    <li>myMap.clear() - removes all elements</li>
                </ul>`
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is immutability?',
    answer: `Objects whose state are NOT allowed to change over time. For example if you have an order object that has a pending state change, you
            want to be able to back that out to it's original state before attempting to modify `
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What are some examples of data structures that are immutable and mutable in Javascript?',
    answer: '<ul><li><b>Immutable</b> - Strings, numbers</li><li><b>Mutable</b> - Objects, Arrays, Sets, Maps</li></ul>'
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'What is Immutable.js? Name the Immutable.js data structures available',
    answer: `A javascript library for creating collections of data that cannot be changed. Available Data Structures:
            <ul><li>List</li><li>Stack</li><li>Map</li><li>OrderedMap</li><li>Set</li><li>OrderedSet</li><li>Record</li><li>Lazy Seq</li></ul>`
  },
  {
    topic: constants.JAVASCRIPT,
    question: 'Is Javascript pass parameters by reference or pass by value?',
    answer: 'Primitives are pass by value, Objects are pass by reference. '
  }
]

export default jsData;