// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:l
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "Alpha 2022"
 console.log(cohort.length)

//a) Your answer: I expect it to output the amount of character in str.
// b) Verify and explain: I was correct, each character in a string has a placement called an index. Using the .length property outputs the number of characters with in said string.


// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: I think the "o" character should will be output.
// b) Verify and explain: The variable 'greeting', holds the string "hollo world".  Index 4 refers to the 5th character within the string.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
    console.log(languages[index])

// a) Your answer: I believe "Ruby" will console.log
// b) Verify and explain:I was correct becaues the index starts its count at 0 with "javaScript". This make "Ruby" number 1 index.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: I don't think anything will happen.
// b) Verify and explain: I was right but im not sure why. I think its because .to UpperCase() is a built in for a str. However, maybe it would it would work if an index within an array was identified.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:I honestly dont know.
// b) Verify and explain: The answer was number. I would have expected dataType to be an object. Note: thought about typeof is identifying .length as a number.
