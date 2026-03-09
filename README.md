1️⃣ What is the difference between var, let, and const?
=>These are keywords used to declare variables in JavaScript, but they behave differently:

var: The oldest way to declare variables. It is function-scoped, meaning it doesn't respect block boundaries (like if or for loops). You can redeclare and update it anywhere, which often leads to bugs.

let: Introduced in ES6, it is block-scoped (lives only inside { }). You can update its value, but you cannot redeclare it within the same scope. This is the preferred way for variables that need to change.

const: Short for "constant." Like let, it is block-scoped. However, once a value is assigned to a const, it cannot be reassigned. It is best for values that should remain permanent (like API URLs).


2️⃣ What is the spread operator (...)?
=>The spread operator consists of three dots (...) used to expand or "spread" the elements of an iterable (like an array or object) into individual elements.

Usage: It is commonly used to make copies of arrays, combine multiple arrays, or pass array elements as arguments to a function without modifying the original data.

3️⃣ What is the difference between map(), filter(), and forEach()?
=> The primary difference between these three methods lies in their return values and intended use. forEach() is used to execute a function for each element in an array but does not return anything (it returns undefined); it is best for performing side effects like logging or updating UI elements. In contrast, map() is used to transform every element in an array and returns a new array of the same length, making it ideal for modifying data. Finally, filter() is used to select specific elements based on a condition and returns a new array containing only the items that passed the test. While map() changes the content, filter() changes the number of items, and forEach() simply iterates.


4️⃣ What is an arrow function?
=>An arrow function is a modern and concise way to write functions in JavaScript, introduced in ES6. It removes the need for the function keyword and uses a fat arrow (=>) to separate the parameters from the body. Arrow functions are particularly useful for short, one-line operations and callbacks because they offer a cleaner syntax and do not have their own this context, which simplifies handling scopes in complex applications.


5️⃣ What are template literals?
=>Template literals are a modern way to handle strings in JavaScript using backticks (`) instead of single or double quotes. They make string manipulation much easier by allowing multi-line strings without special characters and string interpolation, which lets you embed variables or expressions directly into the text using the ${variable} syntax. This is far more readable and efficient than the old method of joining strings with the plus (+) operator.
